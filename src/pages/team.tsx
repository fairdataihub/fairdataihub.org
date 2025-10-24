import { imageSize } from 'image-size';
import { InferGetStaticPropsType } from 'next';
import { getPlaiceholder } from 'plaiceholder';

import Seo from '@/components/seo/seo';

import TeamCard from '../components/team/teamCard';

const TEAM_JSON = [
  {
    id: `Bhavesh-Patel`,
    name: `Bhavesh Patel (he/him)`,
    title: `Founder/Lead`,
    bio: `Bhavesh hails from Thiais, France. His expertise lies in modeling (mathematical) and computational simulations. He has also established significant knowledge of software development so he can accurately criticize his team's work. He is passionate about soccer and vegan croissants.`,
    image: `/images/people/bhavesh-full.jpg`,
    borderTop: false,
    borderBottom: false,
    education: [
      `Ph.D. in Mechanical Engineering (UC Berkeley, 2015)`,
      `M.A. in Mathematics (UC Berkeley, 2014)`,
      `M.Sc. In Mechanical Engineering (UC Berkeley, 2013)`,
      `Diplôme d'Ingénieur, Arts et Métiers ParisTech (2013)`,
    ],
    twitter: {
      show: true,
      link: `https://twitter.com/bvhpatel`,
    },
    github: {
      show: true,
      link: `https://github.com/bvhpatel`,
    },
    linkedin: {
      show: true,
      link: `https://www.linkedin.com/in/bvhpatel`,
    },
  },
  {
    id: `Sanjay-Soundarajan`,
    name: `Sanjay Soundarajan (he/him)`,
    title: `Software Developer`,
    bio: `Sanjay moved from Sri Lanka to pursue higher education. His published works lie in the application of parallelization in Bioinformatics algorithms, development of Human Computer Interaction devices for accessibility and Big Data analysis. He loves exploring new places and trying out new cuisines.`,
    image: `/images/people/sanjay-full.jpg`,
    borderTop: true,
    borderBottom: false,
    education: [
      `M.Sc. in Computer Science (California State University, Fresno, 2020)`,
      `B.Sc. in Computer Science (California State University, Fresno, 2018)`,
    ],
    twitter: {
      show: true,
      link: `https://twitter.com/megasanjay`,
    },
    github: {
      show: true,
      link: `https://github.com/megasanjay`,
    },
    linkedin: {
      show: true,
      link: `https://www.linkedin.com/in/sanjay-soundarajan`,
    },
  },
  {
    id: `Christopher-Marroquin`,
    name: `Christopher Marroquin (he/him)`,
    title: `Software Developer`,
    bio: `Christopher is a Central Valley native that has experience in desktop development and a focus on systems design and general web development. His hobbies include playing guitar, reading, and going to concerts.`,
    image: `/images/people/aaron-full.jpg`,
    borderTop: true,
    borderBottom: false,
    education: [
      `B.Sc. in Computer Science (California State University, Fresno, 2019)`,
    ],
    twitter: {
      show: false,
      link: `https://twitter.com`,
    },
    github: {
      show: true,
      link: `https://github.com/aaronm-2112`,
    },
    linkedin: {
      show: true,
      link: `https://www.linkedin.com/in/christopher-marroquin/`,
    },
  },
  {
    id: `Jacob-Clark`,
    name: `Jacob Clark (he/him)`,
    title: `Software Developer`,
    bio: `Jacob is a full-stack developer out of Fresno, CA that strives to create applications that are performant, easy to use, and create value for users. In his free time, Jacob enjoys reading, rock climbing, and playing basketball.`,
    image: `/images/people/jacob-full.jpg`,
    borderTop: true,
    borderBottom: false,
    education: [
      `B.Sc. in Computer Science (Western Governors University, Salt Lake City, 2021)`,
    ],
    twitter: {
      show: false,
      link: `https://twitter.com`,
    },
    github: {
      show: true,
      link: `https://github.com/JacobiClark`,
    },
    linkedin: {
      show: true,
      link: `https://www.linkedin.com/in/jacob-clarksd/`,
    },
  },
  {
    id: `Dorian-Portillo`,
    name: `Dorian Portillo (they/them)`,
    title: `Software Developer`,
    bio: `Dorian is a Guatemalan and Salvadoran frontend web developer with a focus on design and performance. They are non-binary and interested in seeing technology further progress society. During their free time they like spending time with family, playing video games and drinking matcha.`,
    image: `/images/people/dorian-full.jpg`,
    borderTop: true,
    borderBottom: false,
    education: [
      `B.Sc in Computer Science (Cal State University, San Bernardino, 2020)`,
    ],
    twitter: {
      show: false,
      link: `https://twitter.com/`,
    },
    github: {
      show: true,
      link: `https://github.com/slugb0t`,
    },
    linkedin: {
      show: true,
      link: `https://www.linkedin.com/in/dorian-portillo-4733b61b5/`,
    },
  },
  {
    id: `Aydan-Gasimova`,
    name: `Aydan Gasimova (she/her)`,
    title: `Software Developer`,
    bio: `Aydan is from Azerbaijan and pursued her M.S degree in Computer Science. She has experience in web development with a focus on building scalable dynamic front-end web applications. She enjoys bike riding, sightseeing, and exploring new places.
    `,
    image: `/images/people/aydan-full.jpg`,
    borderTop: true,
    borderBottom: false,
    education: [
      `M.S. in Computer Science (University of North Dakota, 2022)`,
      `B.S in Information technologies and system engineering (Azerbaijan State Economic University, 2017)`,
    ],
    twitter: {
      show: false,
      link: `https://twitter.com/`,
    },
    github: {
      show: true,
      link: `https://github.com/Aydawka`,
    },
    linkedin: {
      show: true,
      link: `https://www.linkedin.com/in/aydan-gasimova-a98b7521b/`,
    },
  },
  {
    id: `Xuebin-Dong`,
    name: `Xuebin Dong (he/him)`,
    title: `Software Developer`,
    bio: `Xuebin Dong is a passionate software developer with a strong background in full-stack development, data pipelines, and DevOps. He holds a Master's degree in Computer Science and enjoys solving complex technical problems. In his free time, He loves working out, playing video games, and exploring new technologies.
    `,
    image: `/images/people/xuebin-full.jpg`,
    borderTop: true,
    borderBottom: false,
    education: [
      `M.S. in Computer Science (University of Alabama at Birmingham, GPA: 4.0, 2021)`,
      `B.S. in Computer Network Engineering (Yunnan University, 2019)`,
    ],
    twitter: {
      show: false,
      link: `https://twitter.com/`,
    },
    github: {
      show: true,
      link: `https://github.com/dxb2306`,
    },
    linkedin: {
      show: true,
      link: `https://www.linkedin.com/in/dxb2306`,
    },
  },
  {
    id: `Nahid-Zeinali`,
    name: `Nahid Zeinali (she/her)`,
    title: `AI Research Scientist`,
    bio: `Nahid Zeinali is an AI Research Scientist from Isfahan, Iran. She specializes in AI, NLP, and deep learning in healthcare and focuses on developing AI-driven healthcare solutions. She enjoys yoga, hiking, tennis, road trips, and Persian poetry in her free time.`,
    image: `/images/people/nahid-full.jpg`,
    borderTop: true,
    borderBottom: false,
    education: [
      `Ph.D. in Informatics (University of Iowa, 2025)`,
      `M.Sc. in Informatics (University of Iowa, 2023)`,
      `M.Sc. in Informatics (Tarbiat Modares University,Iran, 2016)`,
      `B.S. in Software Engineering (University of Azad Najafabad Isfahan, Iran,2010)`,
    ],
    twitter: {
      show: false,
      link: `https://x.com/ZeinaliNahid`,
    },
    github: {
      show: true,
      link: `https://github.com/Nahidzeinali-web`,
    },
    linkedin: {
      show: true,
      link: `https://www.linkedin.com/in/nahid-zeinali-ph-d-15440910b/6`,
    },
  },
  {
    id: `James-ONeill`,
    name: `James ONeill (he/they)`,
    title: `AI Research Scientist`,
    bio: `James completed his PhD in Bioengineering through the SDSU-UCSD Joint Doctoral Program, focusing on AI-driven approaches for biomedical literature analysis. He developed large-scale AI-based frameworks including CarD-T and PubVerse for analyzing scientific literature and mapping research landscapes. In his free time, he enjoys cars, cats, cooking, and coding.`,
    image: `/images/people/james-full.jpg`,
    borderTop: true,
    borderBottom: false,
    education: [
      `Ph.D. in Bioengineering (SDSU-UCSD Joint Doctoral Program, 2025)`,
      `M.S. in Biological & Medical Informatics (San Diego State University, 2020)`,
      `B.S. in Biochemistry & Molecular Biology (University of California Davis, 2016)`,
      `A.A. in English (Pasadena City College)`,
    ],
    twitter: {
      show: false,
      link: `https://twitter.com/`,
    },
    github: {
      show: true,
      link: `https://github.com/jimnoneill`,
    },
    linkedin: {
      show: true,
      link: `https://www.linkedin.com/in/jimnoneill/`,
    },
  },
];

const TeamPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  TeamMembers,
}) => (
  <>
    <Seo
      templateTitle="Meet the Team"
      templateDescription="Meet the multidisciplinary team of FAIR Data enthusiasts and Software Developers at the FAIR Data Innovations Hub"
      templateImage="https://fairdataihub.org/thumbnails/team.png"
      templateUrl="https://fairdataihub.org/team"
    />

    <section className="mx-auto mb-8 flex max-w-screen-2xl flex-col items-center justify-between gap-4 text-black md:mb-0 md:flex-row">
      <div className="flex w-full flex-col divide-y divide-gray-200 p-2 md:p-10">
        {TeamMembers.map((team) => (
          <TeamCard profile={team} key={team.id} />
        ))}
      </div>
    </section>
  </>
);

export const getStaticProps = async () => {
  const TeamMembers = await Promise.all(
    TEAM_JSON.map(async (member) => {
      let imageUrl = `https://fairdataihub.org${member.image}`;
      if (process.env.NODE_ENV === `development`) {
        imageUrl = `http://localhost:3000${member.image}`;
      }

      const buffer = await fetch(imageUrl).then(async (res) =>
        Buffer.from(await res.arrayBuffer()),
      );

      const { width, height } = imageSize(new Uint8Array(buffer));

      const { base64 } = await getPlaiceholder(buffer);

      return {
        ...member,
        width,
        height,
        blurDataURL: base64,
      };
    }),
  ).then((values) => values);

  return {
    props: {
      TeamMembers,
    },
  };
};

export default TeamPage;
