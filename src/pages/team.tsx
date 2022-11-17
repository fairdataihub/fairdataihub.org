import Head from 'next/head';

import TeamCard from '../components/team/teamCard';

export default function Team() {
  const teamsList = [
    {
      id: `Bhavesh-Patel`,
      name: `Bhavesh Patel (he/him)`,
      title: `Founder/Lead`,
      bio: `Bhavesh hails from Thiais, France. His expertise lies in modeling (mathematical) and computational simulations. He has also established significant knowledge of software development so he can accurately criticize his team's work. He is passionate about soccer and vegan croissants.`,
      image: `/images/people/bhavesh-full.jpg`,
      width: 340,
      height: 453,
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
      width: 3024,
      height: 4032,
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
      width: 3024,
      height: 4032,
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
      width: 340,
      height: 453,
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
      width: 3024,
      height: 4032,
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
      id: `Krista-Scrivner`,
      name: `Krista Scrivner (she/her)`,
      title: `Contract and Grant Manager`,
      bio: `Krista hails from North, South, East and West in the United States. She has been with Calmi2 for 8 years and assists the FAIR Data Innovations Hub with grant preparation, submission, and management. In her free time, she loves experimenting in the kitchen.`,
      image: `/images/people/krista-full.jpg`,
      width: 340,
      height: 453,
      borderTop: true,
      borderBottom: false,
      education: [`B.A. in Sociology (UC Davis, 2006)`],
      twitter: {
        show: false,
        link: `https://twitter.com/`,
      },
      github: {
        show: false,
        link: `https://github.com/`,
      },
      linkedin: {
        show: false,
        link: `https://www.linkedin.com/`,
      },
    },
    {
      id: `Martha-Llona`,
      name: `Martha Llona (she/her)`,
      title: `Human Resources Coordinator`,
      bio: `Martha is a native of San Diego. She has been with Calmi2 for 5 years and assisting the FAIR Data Innovations Hub with all administrative needs since the beginning. Her hobbies are cooking, watching movies, reading and exploring new restaurants in San Diego.`,
      image: `/images/people/martha-full.jpeg`,
      width: 3024,
      height: 4032,
      borderTop: true,
      borderBottom: false,
      education: [],
      twitter: {
        show: false,
        link: `https://twitter.com/`,
      },
      github: {
        show: false,
        link: `https://github.com/`,
      },
      linkedin: {
        show: false,
        link: `https://www.linkedin.com/`,
      },
    },
    {
      id: `Ismail-Qaddoura`,
      name: `Ismail Qaddoura (he/him)`,
      title: `Information Technology (IT) Manager`,
      bio: `Ismail moved from Jordan to the United States to pursue his IT education. He joined the team in 2020 after running a successful IT company for 25 years. In his free time, he loves to spend time with his family and watch soccer.`,
      image: `/images/people/ismail-full.jpg`,
      width: 3024,
      height: 4032,
      borderTop: true,
      borderBottom: false,
      education: [
        `M.Sc. in Information Technology (Coleman University, San Diego, 1995)`,
        `B.Sc. in Information Technology (Coleman University, San Diego, 1993)`,
      ],
      twitter: {
        show: false,
        link: `https://twitter.com`,
      },
      github: {
        show: false,
        link: `https://github.com`,
      },
      linkedin: {
        show: true,
        link: `https://www.linkedin.com/in/ismail-qaddoura-76664754`,
      },
    },
  ];

  return (
    <div>
      <Head>
        <title>Meet the Team - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="Meet the Team - Fair Data Innovations Hub"
        />
        <meta
          name="twitter:title"
          content="Meet the Team - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/team" />
        <meta property="og:url" content="https://fairdataihub.org/team" />
        <meta name="twitter:url" content="https://fairdataihub.org/team" />

        <meta
          name="description"
          content="Meet the multidisciplinary team of FAIR Data enthusiasts and Software Developers at the Fair Data Innovations Hub"
        />
        <meta
          property="og:description"
          content="Meet the multidisciplinary team of FAIR Data enthusiasts and Software Developers at the Fair Data Innovations Hub"
        />
        <meta
          name="twitter:description"
          content="Meet the multidisciplinary team of FAIR Data enthusiasts and Software Developers at the Fair Data Innovations Hub"
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/team.png"
        />
        <meta
          name="twitter:image"
          content="https://fairdataihub.org/thumbnails/team.png"
        />
      </Head>

      <main className=" mx-auto mb-8 flex max-w-screen-2xl flex-col items-center justify-between gap-4 text-black md:mb-0 md:flex-row">
        <div className="mx-auto flex w-11/12 flex-col lg:flex-row">
          <div className="w-full p-5 lg:w-1/3">
            <h1 className="py-2 text-4xl font-black sm:text-3xl">About Us</h1>
            <p className="font-asap text-xl text-black sm:text-lg">
              FAIR Data Innovations Hub is a division of the California Medical
              Innovations Institute (CalMI<sup>2</sup>), a non profit biomedical
              research organization located in San Diego, California. We have a
              multidisciplinary team of enthusiasts about FAIR Data practices
              and software development.
            </p>

            <a
              href="https://calmi2.org"
              target="_blank"
              rel="noreferrer"
              className={
                `text-url hover-underline-animation ` +
                `umami--click--calmii-link`
              }
            >
              <span className="font-asap">
                Learn more about CALMI<sup>2</sup>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="arrow-animate ml-2 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="flex w-full flex-col divide-y divide-gray-200 p-2 md:p-5 lg:w-2/3">
            {teamsList.map((team) => (
              <TeamCard profile={team} key={team.id} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
