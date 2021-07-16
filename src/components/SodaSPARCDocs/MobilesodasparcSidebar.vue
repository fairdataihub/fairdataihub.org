<template>
  <nav class="mt-4 px-6 z-0">
    <select
      id="docs-title"
      @change="onChange()"
      class="text-base w-full z-0"
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
  name: "MobilesodasparcSidebar",
  props: {
    sidebarList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      docsLink: "/sodasparc/docs/user-interface",
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
