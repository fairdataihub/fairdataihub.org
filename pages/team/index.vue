<template>
  <base-section class="">
    <section
      class="
        text-black
        body-font
        dark:bg-dark-background
        flex flex-col
        md:flex-row
        gap-4
        mx-auto
        mb-8
        md:mb-0
        justify-between
        items-center
        max-w-screen-2xl
      "
    >
      <div class="flex flex-col lg:flex-row w-11/12 mx-auto">
        <div class="w-full lg:w-1/3 p-5">
          <h1
            class="
              font-inter font-black
              dark:text-gray-50
              text-4xl
              sm:text-3xl
              py-2
            "
          >
            About Us
          </h1>
          <p class="font-asap text-black dark:text-white text-xl sm:text-lg">
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
            class="text-accent inline-flex items-center text-lg"
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
        <div class="w-full lg:w-2/3 p-2 md:p-5">
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
import BaseSection from "~~/components/Base/BaseSection.vue";

export default {
  components: { TeamCard, BaseSection },
  name: "TheTeam",
  data() {
    return {
      teamsList: [
        {
          id: "BhaveshPatel",
          name: "Bhavesh Patel (he/him)",
          title: "Founder/Lead",
          bio: "Bhavesh hails from Thiais, France. His expertise lies in modeling (mathematical) and computational simulations. He has also established significant knowledge of software development so he can accurately criticize his team's work. He is passionate about soccer and vegan croissants.",
          image: "https://i.ibb.co/D8g0cdH/Pics-Art-08-25-09-29-37.jpg",
          placeholder:
            "https://i.ibb.co/s906YLv/Pics-Art-08-25-09-29-37-min.jpg",
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
          image: "https://i.ibb.co/vjdt62f/Tram-s-Profile-pic.jpg",
          placeholder: "https://i.ibb.co/jLsyBqL/Tram-s-Profile-pic-min.jpg",
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
          image: "https://i.ibb.co/C8vSG2Y/IMG-9079.jpg",
          placeholder: "https://i.ibb.co/NnrHkTW/sanjay-min.jpg",
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
          image: "https://i.ibb.co/44xrNNw/aaron.jpg",
          placeholder: "https://i.ibb.co/PzbxbDf/aaron-min.jpg",
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
          id: "Ismail-Qaddoura",
          name: "Ismail Qaddoura (he/him)",
          title: "Information Technology (IT) Manager",
          bio: "Ismail moved from Jordan to the United States to pursue his IT education. He joined the team in 2020 after running a successful IT company for 25 years. In his free time, he loves to spend time with his family and watch soccer.",
          image: "https://i.ibb.co/0XDxPF9/ismail2.jpg",
          placeholder: "https://i.ibb.co/q0ccLZN/ismail-min.jpg",
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
  mounted() {
    const hash = this.$route.hash;
    if (hash != "") {
      const id = hash.substring(1);
      const el = document.getElementById(id);
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
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
