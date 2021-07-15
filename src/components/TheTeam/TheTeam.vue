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
          <p class="font-fsans text-black dark:text-white text-xl sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            laborum commodi corporis tempore dolores saepe quisquam ad inventore
            dignissimos, modi a enim, eaque nulla ex delectus! Dolor,
            cupiditate? Itaque, molestias.
          </p>
        </div>
        <div class="w-full md:w-2/3 p-2 md:p-5">
          <team-card
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
          id: "Judy-Álvarez",
          name: "Judy Álvarez",
          title: "Braindance editor",
          bio: "Judy Álvarez is a skilled braindance technician and a member of the Mox. She has her own apartment in northeastern Kabuki, Watson District.",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          borderTop: false,
          borderBottom: false,
          twitter: {
            show: true,
            link: "https://twitter.com/SVLeonard",
          },
          github: {
            show: true,
            link: "https://github.com/anaisbetts",
          },
          linkedin: {
            show: true,
            link: "https://www.linkedin.com/in/leslie-with-8039a1b7?trk=people-guest_people_search-card",
          },
        },
        {
          id: "Panam-Palmer",
          name: "Panam Palmer",
          title: "Aldecaldo leader",
          bio: "Panam Palmer is introduced as a former member of the Aldecaldos nomad clan, who, after a family dispute, decided to live a more independent life as a mercenary.",
          image:
            "https://images.unsplash.com/photo-1598630388567-9fdbfd7e928e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          borderTop: true,
          borderBottom: false,
          twitter: {
            show: false,
            link: "https://twitter.com/eleanorraybooks",
          },
          github: {
            show: true,
            link: "https://github.com/bendemboski",
          },
          linkedin: {
            show: false,
            link: "https://www.linkedin.com/in/leslie-shaw-315565a?trk=people-guest_people_search-card",
          },
        },
        {
          id: "Hanako-Arasaka",

          name: "Hanako Arasaka",
          title: "VP, User Experience",
          bio: "Hanako Arasaka is the third child and only daughter to Saburo. Hanako is a skilled netrunner and the head of the Kiji Faction of the Arasaka Corporation. She is loved by many people and often described as sweet and beautiful in the eyes of many Arasaka employees.",
          image:
            "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          borderTop: true,
          borderBottom: false,
          twitter: {
            show: false,
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
};
</script>

<style></style>
