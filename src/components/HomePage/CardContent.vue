<template>
  <div
    :class="[
      parentClasses,
      `absolute 
      mr-2 sm:mr-4 md:mr-6 lg:mr-10 
      p-2 sm:p-4 md:p-6 lg:p-10 
      w-2/3 sm:w-1/2 
      backdrop-filter backdrop-blur-sm`,
    ]"
  >
    <h1
      class="
        md:py-2
        font-sans
        w-full
        text-xl
        sm:text-3xl
        md:text-4xl
        lg:text-5xl
        text-gray-900
        font-black
        subpixel-antialiased
      "
    >
      <slot name="title"></slot>
    </h1>
    <p
      class="
        w-full
        font-sans
        text-sm
        sm:text-base
        md:text-lg
        lg:text-xl
        text-gray-900
      "
    >
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "CardContent",
  props: ["parentClasses"],
  computed: {
    getparentClasses() {
      let returnedClasses = "";
      this.parentClasses.array.forEach((element) => {
        returnedClasses += ` ${element}`;
      });
      return returnedClasses;
    },
  },
};
</script>

<style></style>
