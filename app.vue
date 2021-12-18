<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script>
export default {
  setup() {
    useMeta({
      htmlAttrs: {
        lang: "en-US",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "FAIR Data Innovations Hub is an organization dedicated to building open source tools that help biomedical researchers understand and follow FAIR Data Principles when showcasing their findings.",
        },
        {
          name: "keywords",
          content:
            "fair data, fairhub, fairdataihub, calmi2, calmii, soda, sparc, sparclink, aqua, know more, software",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "language",
          content: "English",
        },
        {
          name: "author",
          content: "Fair Data Innovations Hub",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://fairdataihub.org",
        },
        {
          property: "og:title",
          content: "Fair Data Innovations Hub",
        },
        {
          property: "og:description",
          content:
            "Fair Data Innovations Hub is creating tools to help biomedical researchers understand and follow FAIR Data Principles.",
        },
        {
          property: "og:image",
          content: "https://i.ibb.co/svDc3xk/image.png",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:url",
          content: "https://fairdataihub.org",
        },
        {
          property: "twitter:title",
          content: "Fair Data Innovations Hub",
        },
        {
          property: "twitter:description",
          content:
            "Fair Data Innovations Hub is creating tools to help biomedical researchers understand and follow FAIR Data Principles.",
        },
        {
          property: "twitter:image",
          content: "https://i.ibb.co/svDc3xk/image.png",
        },
      ],
    });
  },
};
</script>
