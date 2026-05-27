// components/project/teamMembers.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface TeamMember {
  name: string;
  href: string;
  external: boolean;
  image: string;
}

interface TeamMembersProps {
  teamMembers?: TeamMember[];
}

const TeamMembers: React.FC<TeamMembersProps> = ({ teamMembers }) => {
  if (!teamMembers || teamMembers.length === 0) return null;

  return (
    <section className="mx-auto max-w-screen-2xl px-4 pt-6 pb-14 sm:px-6 lg:px-10">
      <div className="mb-4 flex items-center justify-between gap-2">
        <div>
          <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
            Team
          </p>
          <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
            Members
          </h2>
          <p className="mt-1 text-sm text-stone-600">
            Researchers, engineers, and collaborators behind this project.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {teamMembers.map((member) => {
          const content = (
            <div className="group flex flex-col items-center rounded-2xl border border-stone-200 bg-white/80 p-3 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_20px_60px_rgba(203,67,142,0.16)]">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300/35 via-fuchsia-300/20 to-transparent opacity-0 blur-md transition group-hover:opacity-100" />
                <Image
                  src={member.image}
                  alt={`${member.name} profile picture`}
                  width={96}
                  height={96}
                  className="relative z-10 rounded-full border border-white/80 object-cover"
                />
              </div>
              <p className="font-asap mt-3 text-sm font-medium text-stone-900">
                {member.name}
              </p>
            </div>
          );

          return (
            <div key={member.name}>
              {member.external ? (
                <a href={member.href} target="_blank" rel="noopener">
                  {content}
                </a>
              ) : (
                <Link href={member.href}>{content}</Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamMembers;
