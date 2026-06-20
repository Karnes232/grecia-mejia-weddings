"use client";

/**
 * Document action for localized documents (article, venue): deletes the ENTIRE
 * translation set at once — every locale document (draft + published) plus the
 * `translation.metadata` record — in a single transaction.
 *
 * Why a custom action: the document-internationalization plugin's
 * `useDeleteTranslationAction` only removes a single translation. Because the
 * Studio lists are filtered to English, deleting just the English doc would
 * strand the other five locales. This removes the whole set cleanly.
 *
 * Deleting the metadata and all referenced docs in one transaction satisfies
 * referential integrity even though the metadata→doc references are strong.
 */

import { TrashIcon } from "@sanity/icons";
import { useToast } from "@sanity/ui";
import { useCallback, useState } from "react";
import {
  useClient,
  type DocumentActionDescription,
  type DocumentActionProps,
} from "sanity";

import { apiVersion } from "../env";

const METADATA_QUERY = `*[_type == "translation.metadata" && references($id)][0]{
  _id, "ids": translations[].value._ref
}`;

export function deleteTranslationSet(
  props: DocumentActionProps,
): DocumentActionDescription {
  const { id, onComplete } = props;
  const baseId = id.replace(/^drafts\./, "");
  const client = useClient({ apiVersion });
  const toast = useToast();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  const handleDelete = useCallback(async () => {
    setBusy(true);
    try {
      const meta = await client.fetch<{ _id: string; ids: string[] } | null>(
        METADATA_QUERY,
        { id: baseId },
      );
      const docIds = Array.from(new Set([...(meta?.ids ?? []), baseId]));

      const tx = client.transaction();
      if (meta?._id) {
        tx.delete(meta._id);
        tx.delete(`drafts.${meta._id}`);
      }
      // Deleting a non-existent id is a no-op, so cover both perspectives.
      for (const docId of docIds) {
        tx.delete(docId);
        tx.delete(`drafts.${docId}`);
      }
      await tx.commit({ visibility: "async" });

      toast.push({
        status: "success",
        title: `Deleted ${docIds.length} language version(s)`,
      });
      setOpen(false);
      onComplete();
    } catch (err) {
      toast.push({
        status: "error",
        title: "Failed to delete translations",
        description: (err as Error).message,
      });
      setBusy(false);
    }
  }, [client, toast, baseId, onComplete]);

  return {
    label: "Delete all translations…",
    icon: TrashIcon,
    tone: "critical",
    onHandle: () => setOpen(true),
    dialog: open && {
      type: "confirm",
      tone: "critical",
      message:
        "This permanently deletes every language version of this document and its translation metadata. This cannot be undone.",
      confirmButtonText: busy ? "Deleting…" : "Delete all",
      onConfirm: handleDelete,
      onCancel: () => {
        setOpen(false);
        onComplete();
      },
    },
  };
}
