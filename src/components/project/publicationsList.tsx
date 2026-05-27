import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useState } from 'react';

type Publication = {
  title: string;
  url: string;
  citation: string;
  subtitle?: string;
  year?: number;
  type?: string;
  project?: string[];
};

interface PublicationsItemList {
  publications: Publication[];
  impactProjects: string;
}

const PublicationsList: React.FC<PublicationsItemList> = ({
  publications,
  impactProjects,
}) => {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const impactHref =
    impactProjects && impactProjects.length > 0
      ? {
          pathname: `/impact`,
          query: { project: impactProjects },
        }
      : `/impact`;

  const copyCitation = async (citation: string, url: string) => {
    try {
      await navigator.clipboard.writeText(citation);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 1200);
    } catch {
      // silently fail
    }
  };

  return (
    <section className="mx-auto max-w-screen-2xl px-5 py-10 sm:px-10">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="text-center md:text-left">
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
            Impact related to this project
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            Showing <span className="font-semibold">{publications.length}</span>
            {` `}
            {publications.length === 1 ? `publication` : `publications`}
          </p>
        </div>

        <Link
          href={impactHref}
          className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-50 md:self-auto"
          data-umami-event="Impact CTA"
          data-umami-event-projects={impactProjects}
        >
          <span>View all our impact</span>
          <span aria-hidden>↗</span>
        </Link>
      </div>

      {publications.length > 0 && (
        <div className="mt-6 rounded-2xl border border-stone-200 bg-white/70 p-2">
          <ul className="divide-y divide-stone-200">
            {publications.map((publication) => (
              <li key={publication.url} className="p-3 sm:p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener"
                      className="text-primary text-base leading-snug font-semibold underline-offset-2 hover:underline"
                      data-umami-event="Publication link"
                      data-umami-event-url={publication.url}
                    >
                      {publication.title}
                    </a>
                    {publication.subtitle ? (
                      <p className="mt-0.5 line-clamp-2 text-sm text-stone-600">
                        {publication.subtitle}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-1 flex shrink-0 items-center gap-2">
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-800 transition hover:bg-stone-50"
                      title="Open"
                    >
                      <Icon
                        icon="mdi:external-link"
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                      Open
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        copyCitation(publication.citation, publication.url)
                      }
                      className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-800 transition hover:bg-stone-50"
                      title="Copy citation"
                    >
                      {copiedUrl === publication.url ? (
                        <Icon
                          icon="mdi:check"
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                      ) : (
                        <Icon
                          icon="mdi:content-copy"
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                      )}
                      {copiedUrl === publication.url ? `Copied` : `Copy`}
                    </button>
                  </div>
                </div>

                <div className="my-2 flex flex-wrap items-center gap-2">
                  {publication.year && (
                    <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-700">
                      {publication.year}
                    </span>
                  )}
                  {publication.type && (
                    <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-800">
                      {publication.type}
                    </span>
                  )}
                </div>

                <div className="mt-2 rounded-lg border border-stone-200 bg-sky-50/70 px-3 py-2">
                  <p className="text-sm leading-relaxed text-stone-800">
                    {publication.citation}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {publications.length === 0 && (
        <p className="mt-6 text-center text-sm text-stone-500">
          Impact stories coming soon.
        </p>
      )}
    </section>
  );
};

export default PublicationsList;
