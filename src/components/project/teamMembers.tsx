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
  if (!teamMembers || teamMembers.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="mx-auto flex max-w-screen-lg flex-col">
        <h1 className="pb-5 text-left text-4xl font-black subpixel-antialiased md:mr-8">
          Team Members
        </h1>
        <div className="w-full">
          <div>
            <div className="mb-10 w-full sm:mb-5">
              <div className="grid grid-cols-2 py-0 md:grid-cols-2 md:gap-3 md:py-1 lg:grid-cols-4 lg:gap-4">
                {teamMembers.map((member) => {
                  const memberContent = (
                    <div className="flex flex-col items-center rounded-lg p-2 transition-all hover:bg-gray-200">
                      <Image
                        src={member.image}
                        alt={member.name + ` profile picture`}
                        width={112}
                        height={112}
                        className="rounded-full"
                        style={{
                          maxWidth: `112px`,
                          maxHeight: `112px`,
                        }}
                      />

                      <p className="font-asap ml-2 pt-2 text-center text-lg font-normal">
                        {member.name}
                      </p>
                    </div>
                  );

                  return (
                    <div key={member.name} className="cursor-pointer">
                      {!member.external ? (
                        <Link href={member.href} passHref>
                          {memberContent}
                        </Link>
                      ) : (
                        <a href={member.href} target="_blank" rel="noopener">
                          {memberContent}
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
