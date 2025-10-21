import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

import Seo from '@/components/seo/seo';

import PublicationsJSON from '@/assets/data/publications.json';

type Pub = {
  project: string[];
  title: string;
  url: string;
  citation: string;
  type: string;
  year: number;
  subtitle?: string;
};

const sortingOrder = [
  `Journal Articles`,
  `Preprints`,
  `Software`,
  `Datasets`,
  `Conference Presentations`,
  `Posters`,
  `Webinars/Lectures`,
  `Reports`,
  `Web Articles`,
] as const;

// --- utils ---
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, `-`)
    .replace(/(^-|-$)/g, ``);

export default function Impact() {
  // ---------- data ----------
  const all: Pub[] = useMemo(
    () =>
      (PublicationsJSON as Pub[]).filter(
        (p) => p.title && p.url && p.type && p.year,
      ),
    [],
  );

  // projects + years universe
  const projectCounts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const p of all)
      for (const tag of p.project ?? []) c[tag] = (c[tag] ?? 0) + 1;
    return c;
  }, [all]);

  const projects = useMemo(
    () =>
      Object.keys(projectCounts).sort((a, b) =>
        projectCounts[b] !== projectCounts[a]
          ? projectCounts[b] - projectCounts[a]
          : a.localeCompare(b),
      ),
    [projectCounts],
  );

  const allYears = useMemo(
    () => Array.from(new Set(all.map((p) => p.year))).sort((a, b) => b - a),
    [all],
  );

  const [query, setQuery] = useState(``);
  const [selectedProjects, setSelectedProjects] = useState<Set<string>>(
    new Set(),
  );
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [selectedYears, setSelectedYears] = useState<Set<number>>(new Set());
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  // click-outside for dropdown
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!filtersOpen) return;
      const t = e.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(t)) {
        setFiltersOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === `Escape`) setFiltersOpen(false);
    };
    document.addEventListener(`mousedown`, onDocClick);
    document.addEventListener(`keydown`, onEsc);
    return () => {
      document.removeEventListener(`mousedown`, onDocClick);
      document.removeEventListener(`keydown`, onEsc);
    };
  }, [filtersOpen]);

  // copy state toast timeout
  useEffect(() => {
    if (!copiedUrl) return;
    const t = setTimeout(() => setCopiedUrl(null), 1200);
    return () => clearTimeout(t);
  }, [copiedUrl]);

  // toggles
  const toggleSet = <T,>(s: Set<T>, v: T) => {
    const next = new Set(s);
    next.has(v) ? next.delete(v) : next.add(v);
    return next;
  };
  const toggleProject = (p: string) =>
    setSelectedProjects((s) => toggleSet(s, p));
  const toggleType = (t: string) => setSelectedTypes((s) => toggleSet(s, t));
  const toggleYear = (y: number) => setSelectedYears((s) => toggleSet(s, y));

  const clearProjects = () => setSelectedProjects(new Set());
  const clearTypes = () => setSelectedTypes(new Set());
  const clearYears = () => setSelectedYears(new Set());
  const clearAllFilters = () => {
    clearProjects();
    clearTypes();
    clearYears();
  };

  const activeFiltersCount =
    selectedProjects.size + selectedTypes.size + selectedYears.size;

  const copyCitation = async (citation: string, url: string) => {
    try {
      await navigator.clipboard.writeText(citation);
      setCopiedUrl(url);
    } catch {}
  };

  // filtering
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = all;

    if (selectedProjects.size) {
      list = list.filter(
        (p) =>
          p.project &&
          [...selectedProjects].every((s) => p.project.includes(s)),
      );
    }

    if (selectedTypes.size) {
      list = list.filter((p) => selectedTypes.has(p.type));
    }

    if (selectedYears.size) {
      list = list.filter((p) => selectedYears.has(p.year));
    }

    if (q) {
      list = list.filter((p) => {
        const hay = [
          p.title,
          p.subtitle ?? ``,
          p.citation,
          p.type,
          p.project?.join(` `) ?? ``,
          String(p.year),
        ]
          .join(` `)
          .toLowerCase();
        return hay.includes(q);
      });
    }

    return list;
  }, [all, selectedProjects, selectedTypes, selectedYears, query]);

  // group by sortingOrder
  const grouped = useMemo(() => {
    const byType: Record<string, Pub[]> = {};
    for (const t of sortingOrder) byType[t] = [];
    for (const p of filtered) if (byType[p.type]) byType[p.type].push(p);
    for (const t of sortingOrder) {
      byType[t].sort(
        (a, b) => b.year - a.year || a.title.localeCompare(b.title),
      );
    }
    return byType as Record<(typeof sortingOrder)[number], Pub[]>;
  }, [filtered]);

  const totalResults = filtered.length;

  return (
    <section className="relative mx-auto flex h-full min-h-[80vh] w-full max-w-screen-xl flex-col overflow-hidden px-5 pt-0 sm:px-10 sm:py-20">
      <Seo
        templateTitle="Impact"
        templateDescription="Resources created by the FAIR Data Innovations"
        templateUrl="https://fairdataihub.org/impact"
        templateImage="https://kalai.fairdataihub.org/api/generate?title=Impact&description=Resources%20created%20by%20the%20FAIR%20Data%20Innovations&app=fairdataihub&org=fairdataihub"
      />

      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[560px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(205,50,159,0.16),rgba(205,50,159,0.07)_45%,transparent_70%)] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-8 mb-8 flex flex-col items-start gap-2 sm:mb-2 sm:justify-between"
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-black tracking-tight text-pretty text-stone-900 sm:text-5xl dark:text-stone-100">
            Impact
          </h1>
          <p className="font-asap max-w-2xl text-lg text-stone-700 dark:text-stone-300">
            Resources generated by the FAIR Data Innovations Hub team
          </p>
        </div>
        <div className="via-primary/60 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
      </motion.div>

      <div className="mt-4 grid gap-3 px-2 md:grid-cols-12 md:px-7">
        <div className="md:col-span-8">
          <label className="sr-only" htmlFor="impact-search">
            Search Impact
          </label>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <Icon
              icon="mdi:magnify"
              className="h-5 w-5 opacity-70"
              aria-hidden
            />
            <input
              id="impact-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title, citation, project, type, year…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              type="text"
            />
          </div>
        </div>

        <div className="relative md:col-span-4" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            className={[
              `flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium`,
              filtersOpen ? `ring-primary/30 ring-2` : ``,
            ].join(` `)}
            aria-expanded={filtersOpen}
            aria-haspopup="dialog"
          >
            <Icon icon="mdi:filter" className="h-4 w-4" />
            Filters{` `}
            {activeFiltersCount > 0 && (
              <span className="ml-1 inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700">
                {activeFiltersCount}
              </span>
            )}
            {filtersOpen ? (
              <Icon icon="mdi:chevron-up" className="h-4 w-4" />
            ) : (
              <Icon icon="mdi:chevron-down" className="h-4 w-4" />
            )}
          </button>

          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                role="dialog"
                aria-label="Filters"
                initial={{ opacity: 0, y: 6, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.99 }}
                transition={{ duration: 0.18 }}
                className="absolute right-0 z-20 mt-2 w-[min(92vw,720px)] rounded-xl border border-slate-200 bg-white p-3 shadow-lg"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    Filters
                  </span>
                  <div className="flex items-center gap-2">
                    {activeFiltersCount > 0 && (
                      <button
                        type="button"
                        onClick={clearAllFilters}
                        className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-800 hover:bg-slate-50"
                        title="Clear all"
                      >
                        <Icon icon="mdi:clear" className="h-3.5 w-3.5" /> Clear
                        all
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setFiltersOpen(false)}
                      className="inline-flex items-center gap-1 rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white hover:bg-slate-800"
                    >
                      Done
                    </button>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {/* Types */}
                  <div className="flex min-h-[240px] flex-col rounded-lg border border-slate-200 p-2">
                    <p className="mb-1 text-xs font-semibold tracking-wide text-slate-600 uppercase">
                      Types
                    </p>

                    <div className="flex-1 overflow-auto pr-1">
                      <div className="flex flex-wrap gap-1.5">
                        {sortingOrder.map((t) => {
                          const active = selectedTypes.has(t);
                          return (
                            <button
                              key={t}
                              type="button"
                              onClick={() => toggleType(t)}
                              className={[
                                `rounded-full px-3 py-1 text-xs transition`,
                                active
                                  ? `bg-primary text-white`
                                  : `bg-slate-100 text-slate-800 hover:bg-slate-200`,
                              ].join(` `)}
                              aria-pressed={active}
                            >
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {selectedTypes.size > 0 && (
                      <div className="mt-auto flex justify-center pt-2">
                        <button
                          type="button"
                          onClick={clearTypes}
                          className="my-2 inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-800 hover:bg-slate-50"
                        >
                          Clear types
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Projects */}
                  <div className="flex min-h-[240px] flex-col rounded-lg border border-slate-200 p-2">
                    <p className="mb-1 text-xs font-semibold tracking-wide text-slate-600 uppercase">
                      Projects
                    </p>

                    <div className="flex-1 overflow-auto pr-1">
                      <div className="flex flex-wrap gap-1.5">
                        {projects.map((p) => {
                          const active = selectedProjects.has(p);
                          return (
                            <button
                              key={p}
                              type="button"
                              onClick={() => toggleProject(p)}
                              className={[
                                `rounded-full px-3 py-1 text-xs transition`,
                                active
                                  ? `bg-slate-900 text-white`
                                  : `bg-slate-100 text-slate-800 hover:bg-slate-200`,
                              ].join(` `)}
                              aria-pressed={active}
                              title={p}
                            >
                              {p}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {selectedProjects.size > 0 && (
                      <div className="mt-auto flex justify-center pt-2">
                        <button
                          type="button"
                          onClick={clearProjects}
                          className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-800 hover:bg-slate-50"
                        >
                          Clear projects
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Years */}
                  <div className="flex min-h-[240px] flex-col rounded-lg border border-slate-200 p-2">
                    <p className="mb-1 text-xs font-semibold tracking-wide text-slate-600 uppercase">
                      Years
                    </p>

                    <div className="flex-1 overflow-auto pr-1">
                      <div className="flex flex-wrap gap-1.5">
                        {allYears.map((y) => {
                          const active = selectedYears.has(y);
                          return (
                            <button
                              key={y}
                              type="button"
                              onClick={() => toggleYear(y)}
                              className={[
                                `rounded-full px-3 py-1 text-xs transition`,
                                active
                                  ? `bg-sky-700 text-white`
                                  : `bg-slate-100 text-slate-800 hover:bg-slate-200`,
                              ].join(` `)}
                              aria-pressed={active}
                            >
                              {y}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {selectedYears.size > 0 && (
                      <div className="mt-auto flex justify-center pt-2">
                        <button
                          type="button"
                          onClick={clearYears}
                          className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-800 hover:bg-slate-50"
                        >
                          Clear years
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* filter results */}
      <div className="px-2 pt-4 md:px-7">
        <p className="text-sm text-slate-600">
          Showing <span className="font-semibold">{totalResults}</span>
          {` `}
          {totalResults === 1 ? `result` : `results`}
          {selectedProjects.size > 0 && (
            <>
              {` `}
              for{` `}
              <span className="font-semibold">
                {[...selectedProjects].join(`, `)}
              </span>
            </>
          )}
          {selectedTypes.size > 0 && (
            <>
              {` `}
              in{` `}
              <span className="font-semibold">
                {[...selectedTypes].join(`, `)}
              </span>
            </>
          )}
          {selectedYears.size > 0 && (
            <>
              {` `}
              from{` `}
              <span className="font-semibold">
                {[...Array.from(selectedYears).sort((a, b) => b - a)].join(
                  `, `,
                )}
              </span>
            </>
          )}
          {query && (
            <>
              {` `}
              matching <span className="font-semibold">“{query}”</span>
            </>
          )}
        </p>
      </div>

      <AnimatePresence mode="popLayout" initial={false}>
        <div className="mt-8">
          {(selectedTypes.size
            ? sortingOrder.filter((t) => selectedTypes.has(t))
            : sortingOrder
          ).map((t) => {
            const items = grouped[t] || [];
            if (!items.length) return null;

            const sectionId = slugify(t);

            return (
              <motion.section
                key={t}
                id={sectionId}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{
                  duration: 0.2,
                  layout: {
                    type: `spring`,
                    stiffness: 420,
                    damping: 36,
                    mass: 0.22,
                  },
                }}
                className="my-4 scroll-mt-24 px-2 md:px-7"
              >
                <div className="mb-3 flex items-end justify-between gap-3">
                  <div>
                    <h2 className="text-left text-2xl font-bold">{t}</h2>
                    <p className="text-sm text-slate-600">
                      {items.length} {items.length === 1 ? `entry` : `entries`}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/70 p-2">
                  <ul className="divide-y divide-slate-200">
                    <AnimatePresence initial={false}>
                      {items.map((item) => (
                        <motion.li
                          key={item.url}
                          layout
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{
                            duration: 0.18,
                            layout: {
                              type: `spring`,
                              stiffness: 500,
                              damping: 35,
                              mass: 0.2,
                            },
                          }}
                          className="p-3 sm:p-4"
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div className="min-w-0">
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener"
                                className="text-primary text-base leading-snug font-semibold underline-offset-2 hover:underline"
                                data-umami-event="Publication link"
                                data-umami-event-url={item.url}
                              >
                                {item.title}
                              </a>
                              {item.subtitle ? (
                                <p className="mt-0.5 line-clamp-2 text-sm text-slate-600">
                                  {item.subtitle}
                                </p>
                              ) : null}
                            </div>

                            <div className="mt-1 flex shrink-0 items-center gap-2">
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 transition hover:bg-slate-50"
                                title="Open"
                              >
                                <Icon
                                  icon="mdi:external-link"
                                  className="h-3.5 w-3.5"
                                />
                                Open
                              </a>
                              <button
                                type="button"
                                onClick={() =>
                                  copyCitation(item.citation, item.url)
                                }
                                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 transition hover:bg-slate-50"
                                title="Copy citation"
                              >
                                {copiedUrl === item.url ? (
                                  <Icon
                                    icon="mdi:check"
                                    className="h-3.5 w-3.5"
                                  />
                                ) : (
                                  <Icon
                                    icon="mdi:content-copy"
                                    className="h-3.5 w-3.5"
                                  />
                                )}
                                {copiedUrl === item.url ? `Copied` : `Copy`}
                              </button>
                            </div>
                          </div>

                          <div className="my-2 flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                              {item.year}
                            </span>
                            {item.project?.map((p) => (
                              <span
                                key={p}
                                className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800"
                              >
                                {p}
                              </span>
                            ))}
                          </div>

                          <div className="mt-2 rounded-lg border border-slate-200 bg-sky-50/70 px-3 py-2">
                            <p className="text-sm leading-relaxed text-slate-800">
                              {item.citation}
                            </p>
                          </div>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </div>
              </motion.section>
            );
          })}
        </div>
      </AnimatePresence>
    </section>
  );
}
