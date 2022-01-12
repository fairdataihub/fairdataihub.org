<template>
  <nav class="z-0 px-6 mt-4">
    <select
      id="docs-title"
      @change="onChange()"
      class="z-0 w-full text-base"
      v-model="docsLink"
    >
      <optgroup
        v-for="item in sidebarList"
        :key="item.title"
        :label="item.title"
      >
        <option
          :value="subsection.href"
          v-for="subsection in item.subsections"
          :key="subsection.subtitle"
        >
          {{ subsection.subtitle }}
        </option>
      </optgroup>
    </select>
  </nav>
</template>

<script>
export default {
  name: "MobileSodaForSparcSidebar",
  props: {
    sidebarList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      docsLink: "/sodaforsparc/docs/user-interface",
    };
  },
  methods: {
    onChange() {
      this.$router.push({ path: this.docsLink });
    },
  },
};
</script>

<style lang="postcss" scoped></style>
