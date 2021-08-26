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
      <div class="flex flex-col md:flex-row w-11/12 mx-auto">
        <div class="w-full md:w-1/3 p-5">
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
          Institute, a non profit biomedical research organization located in San Diego, CA. We have a multidisciplinary team of enthusiasts about FAIR Data practices and software development.
          </p>
        </div>
        <div class="w-full md:w-2/3 p-2 md:p-5">
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
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          borderTop: false,
          borderBottom: false,
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
          name: "Tram Ngo",
          title: "Aldecaldo leader",
          bio: "Panam Palmer is introduced as a former member of the Aldecaldos nomad clan, who, after a family dispute, decided to live a more independent life as a mercenary.",
          image:
            "https://images.unsplash.com/photo-1598630388567-9fdbfd7e928e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          borderTop: true,
          borderBottom: false,
          twitter: {
            show: false,
            link: "",
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
          name: "Sanjay Soundarajan",
          title: "VP, User Experience",
          bio: "Hanako Arasaka is the third child and only daughter to Saburo. Hanako is a skilled netrunner and the head of the Kiji Faction of the Arasaka Corporation. She is loved by many people and often described as sweet and beautiful in the eyes of many Arasaka employees.",
          image:
            "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          borderTop: true,
          borderBottom: false,
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
          id: "Rogue-Amendiares",
          name: "Rogue Amendiares",
          title: "Queen of fixers",
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

<style></style>
