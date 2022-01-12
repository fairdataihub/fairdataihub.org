<template>
  <base-section class="">
    <Html>
      <Head>
        <Link
          rel="canonical"
          :href="`https://fairdataihub.org${$route.path}`"
        />
        <Title>Meet the Team - Fair Data Innovations Hub</Title>
      </Head>
    </Html>

    <section
      class="flex flex-col items-center justify-between gap-4 mx-auto mb-8 text-black body-font md:flex-row md:mb-0 max-w-screen-2xl"
    >
      <div class="flex flex-col w-11/12 mx-auto lg:flex-row">
        <div class="w-full p-5 lg:w-1/3">
          <h1 class="py-2 text-4xl font-black sm:text-3xl">About Us</h1>
          <p class="text-xl text-black font-asap sm:text-lg">
            FAIR Data Innovations Hub is a division of the California Medical
            Innovations Institute (CalMI<sup>2</sup>), a non profit biomedical
            research organization located in San Diego, California. We have a
            multidisciplinary team of enthusiasts about FAIR Data practices and
            software development.
          </p>

          <a
            href="https://calmi2.org"
            target="_blank"
            rel="noopener"
            class="text-url hover-underline-animation"
          >
            <span class="font-asap"> Learn more about CALMI<sup>2</sup> </span>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2 arrow-animate"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="w-full p-2 lg:w-2/3 md:p-5">
          <TeamCard
            data-aos="fade-in"
            v-for="member in teamsList"
            :key="member.id"
            :profile="member"
          ></TeamCard>
        </div>
      </div>
    </section>
  </base-section>
</template>

<script>
import TeamCard from "~~/components/team/TeamCard.vue";

export default {
  components: { TeamCard },
  layout: "default",
  scrollToTop: true,
  // setup() {

  //   useMeta({
  //     link: [{ rel: "canonical", href: "https://fairdataihub.org" }],
  //   });
  // },
  data() {
    return {
      teamsList: [
        {
          id: "BhaveshPatel",
          name: "Bhavesh Patel (he/him)",
          title: "Founder/Lead",
          bio: "Bhavesh hails from Thiais, France. His expertise lies in modeling (mathematical) and computational simulations. He has also established significant knowledge of software development so he can accurately criticize his team's work. He is passionate about soccer and vegan croissants.",
          image: "2d49fd62-474b-4187-91be-28f72fb8d850",
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
            link: "https://twitter.com/bvhpatel",
          },
          github: {
            show: true,
            link: "https://github.com/bvhpatel",
          },
          linkedin: {
            show: true,
            link: "https://www.linkedin.com/in/bvhpatel",
          },
        },
        {
          id: "TramNgo",
          name: "Tram Ngo (she/her)",
          title: "Software Developer",
          bio: "Tram's professional interests include solving problems either through pure mathematics topics such as number theory and real analysis or programming. In her free time, she enjoys reading, cooking, doing pilates and yoga.",
          image: "ced02144-f4cc-447e-978e-00f81f5dcd86",
          borderTop: true,
          borderBottom: false,
          education: [
            `B.Sc. Economics and Mathematics (University of California, San Diego, 2018)`,
          ],
          twitter: {
            show: true,
            link: "https://twitter.com/tramngo41410636",
          },
          github: {
            show: true,
            link: "https://github.com/tramngo1603",
          },
          linkedin: {
            show: true,
            link: "https://www.linkedin.com/in/tramngo1603",
          },
        },
        {
          id: "SanjaySoundarajan",
          name: "Sanjay Soundarajan (he/him)",
          title: "Software Developer",
          bio: "Sanjay moved from Sri Lanka to pursue higher education. His published works lie in the application of parallelization in Bioinformatics algorithms, development of Human Computer Interaction devices for accessibility and Big Data analysis. He loves exploring new places and trying out new cuisines.",
          image: "e72e3875-5ebd-4bbf-808b-fabdb91588d8",
          borderTop: true,
          borderBottom: false,
          education: [
            `M.Sc. in Computer Science (California State University, Fresno, 2020)`,
            `B.Sc. in Computer Science (California State University, Fresno, 2018)`,
          ],
          twitter: {
            show: true,
            link: "https://twitter.com/megasanjay",
          },
          github: {
            show: true,
            link: "https://github.com/megasanjay",
          },
          linkedin: {
            show: true,
            link: "https://www.linkedin.com/in/sanjay-soundarajan",
          },
        },

        {
          id: "ChristopherMarroquin",
          name: "Christopher Marroquin (he/him)",
          title: "Software Developer",
          bio: "Christopher is a Central Valley native that has experience in desktop development and a focus on systems design and general web development. His hobbies include playing guitar, reading, and going to concerts.",
          image: "d5a58951-acc1-4ac5-aa5c-48a5fa93fb9a",
          borderTop: true,
          borderBottom: false,
          education: [
            `B.Sc. in Computer Science (California State University, Fresno, 2019)`,
          ],
          twitter: {
            show: false,
            link: "https://twitter.com",
          },
          github: {
            show: true,
            link: "https://github.com/aaronm-2112",
          },
          linkedin: {
            show: true,
            link: "https://www.linkedin.com/in/christopher-marroquin/",
          },
        },
        {
          id: "JacobClark",
          name: "Jacob Clark (he/him)",
          title: "Software Developer",
          bio: "Jacob is a full-stack developer out of Fresno, CA that strives to create applications that are performant, easy to use, and create value for users. In his free time, Jacob enjoys reading, rock climbing, and playing basketball.",
          image: "91a4654b-f218-4027-8a04-91a7535313d4",
          borderTop: true,
          borderBottom: false,
          education: [
            `B.Sc. in Computer Science (Western Governors University, Salt Lake City, 2021)`,
          ],
          twitter: {
            show: false,
            link: "https://twitter.com",
          },
          github: {
            show: true,
            link: "https://github.com/JacobiClark",
          },
          linkedin: {
            show: true,
            link: "https://www.linkedin.com/in/jacob-clarksd/",
          },
        },
        {
          id: "TaijiYang",
          name: "Taiji Yang (he/him)",
          title: "Software Developer",
          bio: "Taiji Yang is a full stack software developer who's interested in web development, data analysis and visualization. In his free time, he enjoys reading and playing video games.",
          image: "12fea441-c679-4471-923f-dbdcd5bece51",
          borderTop: true,
          borderBottom: false,
          education: [
            `B.Sc. in Computer Science (University of Minnesota, 2021)`,
          ],
          twitter: {
            show: false,
            link: "https://twitter.com/",
          },
          github: {
            show: false,
            link: "https://github.com/",
          },
          linkedin: {
            show: true,
            link: "https://www.linkedin.com/in/taiji-yang-1b4b8620b/",
          },
        },
        {
          id: "DorianPortillo",
          name: "Dorian Portillo (they/them)",
          title: "Volunteer Developer",
          bio: "Dorian is a frontend web developer with a focus on design and performance. They are non-binary and interested in seeing technology further progress society. During their free time they like spending time with family, playing video games and drinking matcha.",
          image: "961c98cd-1dd6-4a05-9425-8d8f74a1410d",
          borderTop: true,
          borderBottom: false,
          education: [
            `B.Sc in Computer Science (Cal State University, San Bernardino, 2020)`,
          ],
          twitter: {
            show: false,
            link: "https://twitter.com/",
          },
          github: {
            show: true,
            link: "https://github.com/slugb0t",
          },
          linkedin: {
            show: true,
            link: "https://www.linkedin.com/in/dorian-portillo-4733b61b5/",
          },
        },
        {
          id: "Ismail-Qaddoura",
          name: "Ismail Qaddoura (he/him)",
          title: "Information Technology (IT) Manager",
          bio: "Ismail moved from Jordan to the United States to pursue his IT education. He joined the team in 2020 after running a successful IT company for 25 years. In his free time, he loves to spend time with his family and watch soccer.",
          image: "b2ba911f-e54c-4bd6-a82f-308ffa7ddeb8",
          borderTop: true,
          borderBottom: false,
          education: [
            `M.Sc. in Information Technology (Coleman University, San Diego, 1995)`,
            `B.Sc. in Information Technology (Coleman University, San Diego, 1993)`,
          ],
          twitter: {
            show: false,
            link: "https://twitter.com",
          },
          github: {
            show: false,
            link: "https://github.com",
          },
          linkedin: {
            show: true,
            link: "https://www.linkedin.com/in/ismail-qaddoura-76664754",
          },
        },
      ],
    };
  },
  methods: {
    checkIfElementExists(id) {
      if (document) {
        const el = document.getElementById(id);
        if (el) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
  },
  mounted() {
    const hash = this.$route.hash;
    if (hash != "") {
      window.scrollTo(0, 0);

      const id = hash.substring(1);
      setTimeout(() => {
        if (this.checkIfElementExists(id)) {
          const el = document.getElementById(id);

          el.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        } else {
          setTimeout(() => {
            this.checkIfElementExists(id);
          }, 100);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  },
};
</script>

<style lang="postcss" scoped>
.arrow-animate {
  animation: bounce ease-in-out 2s 5 alternate-reverse;
}

@keyframes bounce {
  0% {
    transform: translatex(0);
  }
  50% {
    transform: translatex(4px);
  }
  100% {
    transform: translatex(0);
  }
}
</style>
