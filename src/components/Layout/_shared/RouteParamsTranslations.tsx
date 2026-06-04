"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Locale } from "@/i18n/routing";

/**
 * Per-locale dynamic-param overrides for the current route, used by the
 * `LanguageSwitcher` on routes whose slug is translated per locale (e.g.
 * `/multicultural-weddings/[culture]`: en `indian-weddings`, es `bodas-indias`).
 *
 * The switcher lives in the Navbar/Footer — above the page in the tree — so
 * a page can't pass its slug map down as a prop. Instead the layout mounts
 * this provider around everything, and the page renders the render-nothing
 * `<SetRouteParamsTranslations map={…} />` setter, which publishes its map
 * upward through this context.
 *
 * On routes without translated params the map stays empty and the switcher
 * behaves exactly as before.
 */
export type RouteParamsTranslationsMap = Partial<
  Record<Locale, Record<string, string>>
>;

type ContextValue = {
  map: RouteParamsTranslationsMap;
  set: (map: RouteParamsTranslationsMap) => void;
};

const RouteParamsTranslationsContext = createContext<ContextValue>({
  map: {},
  set: () => {},
});

export function RouteParamsTranslationsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [map, setMap] = useState<RouteParamsTranslationsMap>({});
  const set = useCallback((next: RouteParamsTranslationsMap) => {
    setMap(next);
  }, []);
  return (
    <RouteParamsTranslationsContext.Provider value={{ map, set }}>
      {children}
    </RouteParamsTranslationsContext.Provider>
  );
}

export function useRouteParamsTranslations() {
  return useContext(RouteParamsTranslationsContext);
}

/**
 * Render-nothing setter a page mounts to publish its per-locale param map.
 * Clears the map on unmount so stale slugs never leak to the next route.
 */
export function SetRouteParamsTranslations({
  map,
}: {
  map: RouteParamsTranslationsMap;
}) {
  const { set } = useRouteParamsTranslations();
  // Serialize for the dependency so a structurally-equal map doesn't loop.
  const serialized = JSON.stringify(map);

  useEffect(() => {
    set(JSON.parse(serialized) as RouteParamsTranslationsMap);
    return () => set({});
  }, [serialized, set]);

  return null;
}
