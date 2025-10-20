import { Dialog, Transition } from '@headlessui/react';
import {
  Building2,
  Github,
  GraduationCap,
  Info,
  Linkedin,
  MapPin,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { Fragment } from 'react';

import type { Profile } from './TeamCardOverlay';

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
      className="rounded-md p-1.5 text-slate-600 transition hover:text-slate-900"
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
  onAfterClose?: () => void; // called after exit animation finishes
  profile: Profile | null;
}) {
  // Guard: while closing, we keep the last profile mounted; parent passes it
  if (!open && !profile) return null;

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-[1px]" />
        </Transition.Child>

        {/* Wrapper */}
        <div className="fixed inset-0 overflow-y-auto">
          {/* 🔴 change items-start → items-center to vertically center */}
          <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-2"
              afterLeave={onAfterClose}
            >
              {/* 🟢 add max-h + internal scrolling so it stays centered when tall */}
              <Dialog.Panel className="relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl sm:my-4">
                {/* If content taller than viewport, let the inside scroll: */}
                <div className="max-h-[85vh] overflow-y-auto">
                  {/* Close */}
                  <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-3 right-3 rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {/* Content */}
                  <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-10 md:p-8">
                    {/* LEFT: image + socials */}
                    <div className="md:col-span-4">
                      <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-xl border">
                        {profile && (
                          <Image
                            src={profile.image}
                            alt={profile.name}
                            fill
                            className="object-cover"
                            placeholder={profile.blurDataURL ? `blur` : `empty`}
                            blurDataURL={profile.blurDataURL}
                            sizes="(max-width: 768px) 45vw, 360px"
                          />
                        )}
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
                          <Linkedin className="h-5 w-5" />
                        </SocialIcon>
                        <SocialIcon
                          href={
                            profile?.github?.show
                              ? profile?.github?.link
                              : undefined
                          }
                          label="GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </SocialIcon>
                        {/* Add website if you store it */}
                        {/* <SocialIcon href={"https://..."} label="Website">
                        <Globe className="h-5 w-5" />
                      </SocialIcon> */}
                      </div>
                    </div>

                    {/* RIGHT: details */}
                    <div className="md:col-span-6">
                      <Dialog.Title className="text-2xl font-extrabold text-slate-900">
                        {profile?.name}
                      </Dialog.Title>

                      {/* Meta row */}
                      <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                        {profile?.location && (
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {profile.location}
                          </span>
                        )}
                        {profile?.organization && (
                          <span className="inline-flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            {profile.organization}
                          </span>
                        )}
                      </div>

                      <div className="my-4 h-px w-full bg-slate-200" />

                      {/* About */}
                      <h3 className="mt-2 flex items-center gap-2 text-lg font-semibold text-slate-900">
                        <Info className="h-5 w-5" /> About Me
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                        {profile?.bio}
                      </p>

                      {/* Education */}
                      {profile?.education && profile.education.length > 0 && (
                        <>
                          <h3 className="mt-6 flex items-center gap-2 text-lg font-semibold text-slate-900">
                            <GraduationCap className="h-5 w-5" /> Education
                          </h3>
                          <ul className="mt-2 list-inside list-disc space-y-1 text-[15px] text-slate-700">
                            {profile.education.map((deg, i) => {
                              const text = `${deg.degree ?? ``}${deg.institution ? `, ` + deg.institution : ``}${deg.year ? ` (` + deg.year : ``})`;
                              return (
                                <li
                                  key={
                                    deg.degree ??
                                    deg.institution ??
                                    deg.year ??
                                    i
                                  }
                                >
                                  {text}
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
