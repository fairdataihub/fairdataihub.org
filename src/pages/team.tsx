// pages/team.tsx
import { motion } from 'framer-motion';
import { InferGetStaticPropsType } from 'next';
import { useState } from 'react';

import Seo from '@/components/seo/seo';
import ProfileModal from '@/components/team/ProfileModal';
import TeamCardOverlay, {
  type Profile as CardProfile,
} from '@/components/team/TeamCardOverlay';

import INTERNS_JSON from '@/public/team/interns.json';
import SUPPORT_JSON from '@/public/team/support.json';
import TEAM_JSON from '@/public/team/team.json';
import { safeLqip, safeProbe } from '@/utils/imageFetch';

export default function TeamPage({
  TeamMembers,
  currentInterns,
  pastInterns,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selected, setSelected] = useState<CardProfile | null>(null);
  const [open, setOpen] = useState(false);

  const openProfile = (p: CardProfile) => {
    setSelected(p);
    setOpen(true);
  };
  const closeProfile = () => setOpen(false);
  const clearSelected = () => setSelected(null);

  return (
    <>
      <Seo
        templateTitle="Meet the Team"
        templateDescription="Meet the multidisciplinary team of FAIR Data enthusiasts and Software Developers at the FAIR Data Innovations Hub"
        templateImage="https://fairdataihub.org/thumbnails/team.png"
        templateUrl="https://fairdataihub.org/team"
      />

      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[720px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(211,75,171,0.30),rgba(211,75,171,0.12)_40%,transparent_75%)] blur-3xl" />
      </div>

      <section className="mx-auto max-w-screen-xl px-4 pt-30 pb-10">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: `easeOut` }}
          className="flex flex-col items-start gap-2 sm:mb-10 sm:justify-between"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-black tracking-tight text-pretty text-stone-900 sm:text-5xl dark:text-stone-100">
              <span>About Us</span>
            </h1>
            <p className="font-asap text-lg text-stone-700 dark:text-stone-300">
              FAIR Data Innovations Hub is a division of the California Medical
              Innovations Institute (CalMI2), a non profit biomedical research
              organization located in San Diego, California. We have a
              multidisciplinary team of enthusiasts about FAIR Data practices
              and software development.
            </p>
          </div>
        </motion.header>

        {/* Team grid */}
        <div className="my-12 w-full">
          <div className="flex items-center">
            <div className="from-primary/10 via-primary/50 to-primary h-px flex-1 rounded-lg bg-gradient-to-r" />

            <span className="mx-6 text-4xl font-extrabold tracking-tight text-gray-900 select-none sm:text-5xl">
              Team
            </span>

            <div className="from-primary/10 via-primary/50 to-primary h-px flex-1 rounded-lg bg-gradient-to-l" />
          </div>
        </div>
        <motion.div
          layout
          className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TeamMembers.map((p) => (
            <TeamCardOverlay key={p.id} profile={p} onOpen={openProfile} />
          ))}
        </motion.div>

        {/* Support grid */}
        {SUPPORT_JSON.length > 0 && (
          <>
            <div className="my-12 w-full">
              <div className="flex items-center">
                <div className="from-primary/10 via-primary/50 to-primary h-px flex-1 rounded-lg bg-gradient-to-r" />

                <span className="mx-6 text-4xl font-extrabold tracking-tight text-gray-900 select-none sm:text-5xl">
                  Support
                </span>

                <div className="from-primary/10 via-primary/50 to-primary h-px flex-1 rounded-lg bg-gradient-to-l" />
              </div>
            </div>
            <motion.div
              layout
              className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {SUPPORT_JSON.map((p) => (
                <TeamCardOverlay key={p.id} profile={p} onOpen={openProfile} />
              ))}
            </motion.div>
          </>
        )}

        {/* Current Interns grid */}
        {currentInterns.length > 0 && (
          <>
            <div className="my-12 flex items-center">
              <div className="from-primary/10 via-primary/50 to-primary h-px flex-1 rounded-lg bg-gradient-to-r" />

              <span className="mx-6 text-4xl font-extrabold tracking-tight text-gray-900 select-none sm:text-5xl">
                Current Interns
              </span>

              <div className="from-primary/10 via-primary/50 to-primary h-px flex-1 rounded-lg bg-gradient-to-l" />
            </div>
            <motion.div
              layout
              className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {currentInterns.map((p) => (
                <TeamCardOverlay key={p.id} profile={p} onOpen={openProfile} />
              ))}
            </motion.div>
          </>
        )}

        {/* Past Interns grid */}
        {pastInterns.length > 0 && (
          <>
            <div className="my-12 flex items-center">
              <div className="from-primary/10 via-primary/50 to-primary h-px flex-1 rounded-lg bg-gradient-to-r" />

              <span className="mx-6 text-4xl font-extrabold tracking-tight text-gray-900 select-none sm:text-5xl">
                Past Interns
              </span>

              <div className="from-primary/10 via-primary/50 to-primary h-px flex-1 rounded-lg bg-gradient-to-l" />
            </div>
            <motion.div
              layout
              className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {pastInterns.map((p) => (
                <TeamCardOverlay key={p.id} profile={p} onOpen={openProfile} />
              ))}
            </motion.div>
          </>
        )}
      </section>

      <ProfileModal
        open={open}
        onClose={closeProfile}
        onAfterClose={clearSelected}
        profile={selected}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const TeamMembers = await Promise.all(
    TEAM_JSON.map(async (member: any) => {
      let imageUrl = `https://fairdataihub.org${member.image}`;
      if (process.env.NODE_ENV === `development`) {
        imageUrl = `http://localhost:${process.env.PORT}${member.image}`;
      }
      const { width, height } = await safeProbe(imageUrl);
      const blurDataURL = await safeLqip(imageUrl);

      return { ...member, width, height, blurDataURL: blurDataURL };
    }),
  );

  const currentInterns = await Promise.all(
    INTERNS_JSON.filter((intern) => intern.current === true).map(
      async (member: any) => {
        let imageUrl = `https://fairdataihub.org${member.image}`;
        if (process.env.NODE_ENV === `development`) {
          imageUrl = `http://localhost:3000${member.image}`;
        }
        const { width, height } = await safeProbe(imageUrl);
        const blurDataURL = await safeLqip(imageUrl);

        return { ...member, width, height, blurDataURL };
      },
    ),
  );

  const pastInterns = await Promise.all(
    INTERNS_JSON.filter((intern) => intern.current === false).map(
      async (member: any) => {
        let imageUrl = `https://fairdataihub.org${member.image}`;
        if (process.env.NODE_ENV === `development`) {
          imageUrl = `http://localhost:3000${member.image}`;
        }
        const { width, height } = await safeProbe(imageUrl);
        const blurDataURL = await safeLqip(imageUrl);

        return { ...member, width, height, blurDataURL };
      },
    ),
  );

  return { props: { TeamMembers, pastInterns, currentInterns } };
};
