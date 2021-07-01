<template>
  <base-section class="pt-3 sm:pt-16">
    <section class="text-gray-600 body-font">
      <div class="flex w-11/12 mx-auto">
        <div class="w-1/3 bg-red-300 p-5">
          <h1 class="font-sans font-black text-black text-3xl">About Us</h1>
          <p class="font-sans text-black text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            laborum commodi corporis tempore dolores saepe quisquam ad inventore
            dignissimos, modi a enim, eaque nulla ex delectus! Dolor,
            cupiditate? Itaque, molestias.
          </p>
        </div>
        <div class="w-2/3 bg-yellow-300 p-5">
          <div class="flex">
            <div class="w-1/3 h-full">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
                class="w-full h-auto rounded-lg"
              />
            </div>
            <div class="w-2/3">Test Name</div>
          </div>
        </div>
      </div>
    </section>
  </base-section>
</template>

<script>
export default {
  name: "TheTeam",
  data() {
    return {
      teamsShown: false,
    };
  },
};
</script>

<style></style>
