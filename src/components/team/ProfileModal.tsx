import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { Fragment } from 'react';

import type { Profile } from './TeamCardOverlay';

function Chip({
  children,
  icon,
  title,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
}) {
  return (
    <span
      title={title}
      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
    >
      {icon}
      {children}
    </span>
  );
}

function SocialIcon({
  href,
  children,
  label,
}: {
  href?: string;
  children: React.ReactNode;
  label: string;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="hover:text-primary rounded-md p-1.5 text-slate-600 transition hover:bg-slate-100"
    >
      {children}
    </a>
  );
}

export default function ProfileModal({
  open,
  onClose,
  onAfterClose,
  profile,
}: {
  open: boolean;
  onClose: () => void;
  onAfterClose?: () => void;
  profile: Profile | null;
}) {
  if (!open && !profile) return null;

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-[1px]" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 translate-y-2 scale-[0.99]"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-2 scale-[0.99]"
              afterLeave={onAfterClose}
            >
              <DialogPanel className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                <div className="sticky top-0 z-10 flex items-center justify-end bg-gradient-to-b from-white/90 to-white/60 px-3 py-2 backdrop-blur">
                  <button
                    onClick={onClose}
                    aria-label="Close"
                    className="rounded-full p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    <Icon icon="mdi:close" className="h-5 w-5" />
                  </button>
                </div>

                <div className="max-h-[85vh] overflow-y-auto px-5 pb-6 sm:px-8 sm:pb-8">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-10">
                    <div className="md:col-span-4">
                      <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-slate-200">
                        {profile && (
                          <Image
                            src={profile.image}
                            alt={`${profile.name} portrait`}
                            fill
                            className="object-cover"
                            placeholder={profile.blurDataURL ? `blur` : `empty`}
                            blurDataURL={profile.blurDataURL}
                            sizes="(max-width: 768px) 80vw, 360px"
                            priority
                          />
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent)]" />
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <SocialIcon
                          href={
                            profile?.linkedin?.show
                              ? profile?.linkedin?.link
                              : undefined
                          }
                          label="LinkedIn"
                        >
                          <Icon icon="mdi:linkedin" className="h-6 w-6" />
                        </SocialIcon>
                        <SocialIcon
                          href={
                            profile?.github?.show
                              ? profile?.github?.link
                              : undefined
                          }
                          label="GitHub"
                        >
                          <Icon icon="mdi:github" className="h-6 w-6" />
                        </SocialIcon>
                        <SocialIcon
                          href={
                            profile?.twitter?.show
                              ? profile?.twitter?.link
                              : undefined
                          }
                          label="Twitter"
                        >
                          <Icon icon="mdi:twitter" className="h-6 w-6" />
                        </SocialIcon>
                      </div>
                    </div>

                    <div className="md:col-span-6">
                      <DialogTitle className="text-2xl leading-tight font-extrabold text-slate-900 sm:text-3xl">
                        {profile?.name}
                      </DialogTitle>
                      {profile?.title && (
                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {profile.title}
                        </p>
                      )}

                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {profile?.location && (
                          <Chip
                            icon={
                              <Icon icon="mdi:map-pin" className="h-4 w-4" />
                            }
                            title="Location"
                          >
                            {profile.location}
                          </Chip>
                        )}
                        {profile?.organization && (
                          <Chip
                            icon={
                              <Icon icon="mdi:building" className="h-4 w-4" />
                            }
                            title="Organization"
                          >
                            {profile.organization}
                          </Chip>
                        )}
                      </div>

                      <div className="mt-2 mb-4 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                      {/* About */}
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                        <Icon icon="mdi:information" className="h-5 w-5" />
                        About
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                        {profile?.bio}
                      </p>

                      {/* Education */}
                      {profile?.education && profile.education.length > 0 && (
                        <>
                          <h3 className="mt-6 flex items-center gap-2 text-lg font-semibold text-slate-900">
                            <Icon
                              icon="mdi:graduation-cap"
                              className="h-5 w-5"
                            />
                            Education
                          </h3>
                          <ul className="mt-2 space-y-1.5 text-[15px] text-slate-700">
                            {profile.education.map((deg, i) => {
                              const parts = [
                                deg.degree,
                                deg.institution && ` — ${deg.institution}`,
                                deg.year && ` (${deg.year})`,
                              ]
                                .filter(Boolean)
                                .join(``);
                              return (
                                <li
                                  key={`${deg.degree}-${deg.institution}-${deg.year}-${i}`}
                                  className="list-inside list-disc marker:text-slate-300"
                                >
                                  {parts}
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
