<template>
  <div
    class="
      absolute
      mr-2
      p-2
      w-2/3
      sm:w-1/2 sm:mr-4
      md:mr-6
      lg:mr-10
      sm:p-4
      md:p-6
      lg:p-10
      backdrop-filter backdrop-blur-sm
    "
  >
    <h1
      :class="[
        textAlign,
        `md:py-3
        w-full
        font-sans font-black
        text-gray-900 text-xl
        sm:text-3xl
        md:text-4xl
        lg:text-5xl
        subpixel-antialiased`,
      ]"
    >
      <slot name="title"></slot>
    </h1>
    <p
      :class="[
        textAlign,
        `w-full
        font-sans
        text-sm
        sm:text-base
        md:text-lg
        lg:text-xl
        text-gray-900`,
      ]"
    >
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "CardContent",
  props: ["textAlign"],
};
</script>

<style></style>
