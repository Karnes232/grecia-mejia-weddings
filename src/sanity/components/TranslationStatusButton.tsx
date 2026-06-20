"use client";

/**
 * Document-header button that shows the publish status of every translation.
 *
 * The document-internationalization plugin's own "Translations" menu lists the
 * languages but shows no publish state. Because the Studio lists are filtered to
 * English, an editor otherwise can't tell whether the other locales are live.
 * This adds a "Status" button next to it: a popover with one dot per language —
 * green = published, yellow = draft only, grey = not created.
 *
 * Registered via `document.unstable_languageFilter` in `sanity.config.ts`.
 */

import { CircleIcon, DotIcon, EditIcon, TranslateIcon } from "@sanity/icons";
import {
  Box,
  Button,
  Card,
  Flex,
  Popover,
  Stack,
  Text,
  useClickOutsideEvent,
} from "@sanity/ui";
import { useEffect, useRef, useState } from "react";
import { useClient, useEditState } from "sanity";
import { useDocumentInternationalizationContext } from "@sanity/document-internationalization";

import { apiVersion } from "../env";

type Props = { documentId: string; schemaType: string };

type Language = { id: string; title: string };

const REFS_QUERY = `*[_type == "translation.metadata" && references($id)][0]
  .translations[]{ "lang": _key, "id": value._ref }`;

/** A language whose translation document exists — resolve its live status. */
function KnownRow({
  language,
  docId,
  schemaType,
}: {
  language: Language;
  docId: string;
  schemaType: string;
}) {
  const { draft, published } = useEditState(docId, schemaType);
  const [tone, icon, label] =
    published && draft
      ? (["caution", <EditIcon key="i" />, "Unpublished edits"] as const)
      : published
        ? (["positive", <DotIcon key="i" />, "Published"] as const)
        : draft
          ? (["caution", <DotIcon key="i" />, "Draft"] as const)
          : (["default", <CircleIcon key="i" />, "—"] as const);

  return (
    <Flex align="center" gap={3} paddingX={3} paddingY={2}>
      <Text size={1} muted={tone === "default"}>
        <Box style={{ color: toneColor(tone) }}>{icon}</Box>
      </Text>
      <Box flex={1}>
        <Text size={1}>{language.title}</Text>
      </Box>
      <Text size={1} muted>
        {label}
      </Text>
    </Flex>
  );
}

/** A language with no translation document yet. */
function MissingRow({ language }: { language: Language }) {
  return (
    <Flex align="center" gap={3} paddingX={3} paddingY={2}>
      <Text size={1} muted>
        <CircleIcon />
      </Text>
      <Box flex={1}>
        <Text size={1} muted>
          {language.title}
        </Text>
      </Box>
      <Text size={1} muted>
        Not created
      </Text>
    </Flex>
  );
}

function toneColor(tone: "positive" | "caution" | "default") {
  if (tone === "positive") return "var(--card-badge-positive-icon-color, #43d675)";
  if (tone === "caution") return "var(--card-badge-caution-icon-color, #f5a623)";
  return undefined;
}

export function TranslationStatusButton(props: Props) {
  const { documentId, schemaType } = props;
  const baseId = documentId.replace(/^drafts\./, "");
  const { supportedLanguages, languageField } =
    useDocumentInternationalizationContext();
  const client = useClient({ apiVersion });
  const current = useEditState(baseId, schemaType);

  const [open, setOpen] = useState(false);
  const [refs, setRefs] = useState<Record<string, string>>({});
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useClickOutsideEvent(
    () => setOpen(false),
    () => [buttonRef.current, popoverRef.current],
  );

  // Map language -> translation's published id (raw _ref so draft-only resolves).
  useEffect(() => {
    let active = true;
    client
      .fetch<{ lang: string; id: string }[] | null>(REFS_QUERY, { id: baseId })
      .then((rows) => {
        if (!active) return;
        const map: Record<string, string> = {};
        for (const row of rows ?? []) {
          if (row?.lang && row?.id) map[row.lang] = row.id;
        }
        setRefs(map);
      })
      .catch(() => {
        /* leave refs as-is; rows fall back to "not created" */
      });
    return () => {
      active = false;
    };
  }, [client, baseId, open]);

  // Ensure the current doc's own language always resolves (e.g. no metadata yet).
  const currentDoc = current.draft ?? current.published;
  const currentLang =
    typeof currentDoc?.[languageField ?? "language"] === "string"
      ? (currentDoc[languageField ?? "language"] as string)
      : undefined;
  const resolved: Record<string, string> = currentLang
    ? { [currentLang]: baseId, ...refs }
    : refs;

  const languages = supportedLanguages as Language[];

  const content = (
    <Card ref={popoverRef} radius={2} overflow="auto" style={{ minWidth: 240 }}>
      <Box paddingX={3} paddingTop={3} paddingBottom={1}>
        <Text size={1} weight="semibold" muted>
          Translation status
        </Text>
      </Box>
      <Stack>
        {languages.map((language) => {
          const docId = resolved[language.id];
          return docId ? (
            <KnownRow
              key={language.id}
              language={language}
              docId={docId}
              schemaType={schemaType}
            />
          ) : (
            <MissingRow key={language.id} language={language} />
          );
        })}
      </Stack>
    </Card>
  );

  return (
    <Popover
      content={content}
      open={open}
      portal
      placement="bottom-end"
      constrainSize
    >
      <Button
        ref={buttonRef}
        mode="bleed"
        icon={TranslateIcon}
        text="Status"
        onClick={() => setOpen((v) => !v)}
        selected={open}
      />
    </Popover>
  );
}
