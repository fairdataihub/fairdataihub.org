<template>
  <base-section class="pt-16">
    <section class="text-gray-600 body-font dark:bg-gray-700">
      <div class="flex flex-col md:flex-row w-11/12 mx-auto">
        <div class="w-full md:w-1/3 p-5">
          <h1
            class="
              font-sans font-black
              text-black
              dark:text-white
              text-4xl
              sm:text-3xl
              py-2
            "
          >
            About Us
          </h1>
          <p class="font-sans text-black dark:text-white text-xl sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            laborum commodi corporis tempore dolores saepe quisquam ad inventore
            dignissimos, modi a enim, eaque nulla ex delectus! Dolor,
            cupiditate? Itaque, molestias.
          </p>
        </div>
        <div class="w-full md:w-2/3 p-5">
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
          name: "Leslie Alexander",
          title: "Co-Founder / CTO",
          bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laborum commodi corporis tempore dolores saepe quisquam ad inventore dignissimos.",
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
          name: "Emily Selman",
          title: "VP, User Experience",
          bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, laborum commodi corporis tempore dolores saepe quisquam ad inventore dignissimos.",
          image:
            "https://images.unsplash.com/photo-1598630388567-9fdbfd7e928e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
            show: false,
            link: "https://www.linkedin.com/in/leslie-shaw-315565a?trk=people-guest_people_search-card",
          },
        },
      ],
    };
  },
};
</script>

<style></style>
