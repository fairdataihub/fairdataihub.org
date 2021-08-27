<template>
  <base-section class="pt-16 dark:bg-dark-background">
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
            FAIR Data Hub is part of the California Medical Innovations
            Institute, a non profit biomedical research organization located in
            San Diego, CA. We have a multidisciplinary team of enthusiasts about
            FAIR Data practices and software development.
          </p>

          <a
            href="https://calmi2.org"
            target="_blank"
            class="text-accent inline-flex items-center text-lg"
          >
            <span class="font-asap"> Learn more about CALMII </span>
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
          <team-card
            data-aos="fade-in"
            v-for="member in teamsList"
            :key="member.image"
            :profile="member"
          >
          </team-card>
        </div>
      </div>
    </section>
  </base-section>
</template>

<script>
import TeamCard from "./TeamCard.vue";
export default {
  components: { TeamCard },
  name: "TheTeam",
  data() {
    return {
      teamsList: [
        {
          id: "BhaveshPatel",
          name: "Bhavesh Patel (he/him)",
          title: "Founder/Lead",
          bio: "Bhavesh hails from Thiais, France. His expertize lies in modeling (mathematical) and computational simulations. He has also established significant knowledge of software development so he can accurately criticize his team's work. He is passionate about soccer and vegan croissants.",
          image: "https://i.ibb.co/D8g0cdH/Pics-Art-08-25-09-29-37.jpg",
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
          bio: "My professional interests include solving problems either through pure mathematics topics such as number theory and real analysis or programming. In my free time, I enjoy reading, cooking, doing pilates and yoga.",
          image: "https://i.ibb.co/vjdt62f/Tram-s-Profile-pic.jpg",
          borderTop: true,
          borderBottom: false,
          education: [`B. Sc. Economics and Mathematics (UC San Diego, 2018)`],
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
          bio: "Hanako Arasaka is the third child and only daughter to Saburo. Hanako is a skilled netrunner and the head of the Kiji Faction of the Arasaka Corporation. She is loved by many people and often described as sweet and beautiful in the eyes of many Arasaka employees.",
          image:
            "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          borderTop: true,
          borderBottom: false,
          education: [
            `M. Sc. in Computer Science (California State University, Fresno, 2020)`,
            `B. Sc. in Computer Science (California State University, Fresno, 2018)`,
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
          id: "Ismail-Qaddoura",
          name: "Ismail Qaddoura (he/him)",
          title: "Information Technology (IT) Manager",
          bio: "Rogue Amendiares used to be a solo who went on to become the best fixer in Night City by 2077. She is the owner of the famous Afterlife nightclub.",
          image:
            "https://images.unsplash.com/photo-1596813362035-3edcff0c2487?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          borderTop: true,
          borderBottom: false,
          twitter: {
            show: true,
            link: "https://twitter.com/eleanorraybooks",
          },
          github: {
            show: true,
            link: "https://github.com/bendemboski",
          },
          linkedin: {
            show: true,
            link: "https://www.linkedin.com/in/leslie-shaw-315565a?trk=people-guest_people_search-card",
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
