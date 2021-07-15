<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="max-w-screen-lg mx-auto px-6 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2
        class="
          text-base text-indigo-600
          font-semibold
          tracking-wide
          uppercase
          hidden
        "
      >
        some topic maybe
      </h2>
      <p
        class="
          my-2
          font-inter font-extrabold
          tracking-tight
          dark:text-gray-50
          text-4xl
          sm:text-4xl
        "
      >
        Our Vision
      </p>
      <p
        class="
          font-fsans
          max-w-2xl
          text-xl
          sm:text-xl
          text-black
          dark:text-white
          lg:mx-auto
        "
      >
        Small summary text here. Small summary text here. Small summary text
        here. Small summary text here. Small summary text here.
      </p>
    </div>

    <div class="mt-10">
      <dl
        class="
          space-y-10
          md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10
        "
      >
        <div v-for="feature in features" :key="feature.name" class="relative">
          <dt>
            <div
              class="
                absolute
                flex
                items-center
                justify-center
                h-12
                w-12
                rounded-md
                text-white
              "
              :style="'background-color: ' + visionColor + ';'"
            >
              <component
                :is="feature.icon"
                class="h-6 w-6"
                aria-hidden="true"
              />
            </div>
            <p
              class="
                font-inter
                ml-16
                text-xl
                sm:text-lg
                font-medium
                dark:text-gray-50
              "
            >
              {{ feature.name }}
            </p>
          </dt>
          <dd
            class="
              mt-2
              md:mt-0
              ml-16
              text-lg
              sm:text-base
              text-black
              dark:text-white
              font-fsans
            "
          >
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/vue/outline";

const features = [
  {
    name: "Title 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "Title 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    name: "Title 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
  {
    name: "Title 4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
  },
];

export default {
  name: "OurVision",
  props: ["visionColor"],
  setup() {
    return {
      features,
    };
  },
};
</script>
