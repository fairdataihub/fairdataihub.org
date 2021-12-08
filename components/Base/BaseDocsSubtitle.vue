<template>
  <div class="flex justify-between items-center">
    <div class="flex justify-start items-center relative anchorDiv">
      <h2
        :id="subtitleID"
        class="font-semibold text-lg text-black dark:text-white mb-1 print:dark:text-black level-1-heading"
        ref="slotWrapper"
      >
        <slot></slot>
      </h2>
      <a
        class="absolute opacity-0 hover:opacity-100 left-[-1.5em] anchor"
        aria-hidden="true"
        tabindex="-1"
        :href="`#${subtitleID}`"
      >
        <svg class="w-5 h-5" viewBox="0 0 17 17" tabindex="-1">
          <path
            fill-rule="evenodd"
            d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
          ></path>
        </svg>
      </a>
    </div>
    <slot name="actionArea"></slot>
  </div>
  <div class="w-full border-b border-grey-500 mb-2"></div>
</template>

<script>
export default {
  name: "BaseDocsSubtitle",
  props: {
    id: {
      required: false,
      type: String,
      default: Math.random().toString(36).substring(2),
    },
  },
  data() {
    return {
      subtitleID: "",
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

    this.subtitleID = this.$refs.slotWrapper.textContent
      .trim()
      .replace(/\s+/g, "-");

    if (hash != "") {
      const id = hash.substring(1);
      setTimeout(() => {
        if (this.checkIfElementExists(id)) {
          const el = document.getElementById(id);
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        } else {
          setTimeout(() => {
            this.checkIfElementExists(id);
          }, 100);
        }
      }, 100);
    }
  },
};
</script>

<style lang="postcss" scoped>
.anchorDiv:hover .anchor {
  @apply opacity-60;
}
</style>
>
