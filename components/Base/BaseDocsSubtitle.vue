<template>
  <div class="flex justify-between items-center">
    <h3
      :id="id"
      class="
        font-semibold
        text-lg text-black
        dark:text-white
        mb-1
        print:dark:text-black
        level-1-heading
      "
    >
      <slot></slot>
    </h3>
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
    }
  },
};
</script>

<style></style>
