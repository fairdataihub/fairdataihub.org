<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="max-w-screen-lg mx-auto px-6 sm:px-6 lg:px-8">
    <div class="lg:text-center">
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
          font-asap
          max-w-2xl
          text-xl
          sm:text-xl
          text-black
          dark:text-white
          lg:mx-auto
        "
      >
        Only with tools that support and assist researchers we will achieve a widespread adoption of FAIR Data practices.
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
                bg-light-vision
                dark:bg-dark-vision
              "
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
              font-asap
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
  DesktopComputerIcon,
  LightningBoltIcon,
  ScaleIcon,
  ExclamationCircleIcon,
} from "@heroicons/vue/outline";

const features = [
  {
    name: "What is FAIR?",
    description:
      "The FAIR Data Principles are a set of guidelines for curating and sharing research data such that they are reusable by human and machines.",
    icon: ScaleIcon,
  },
  {
    name: "Why is it important?",
    description:
      "FAIR Data practices are crucial for ensuring reproducibility of scientific findings and enabling AI/ML-driven analysis to increase the peace of discoveries.",
    icon: ExclamationCircleIcon,
  },
  {
    name: "What are the challenges?",
    description:
      "Despite effort from funding agencies, industry, and researchers, FAIR Data practices are not widely adopted due to their complex and time consuming nature.",
    icon: LightningBoltIcon,
  },
  {
    name: "What do we do?",
    description:
      "We develop open source tools that enhance FAIR data practices for biomedical researchers through automation and intuitive user interfaces.",
    icon: DesktopComputerIcon,
  },
];

export default {
  name: "OurVision",
  setup() {
    return {
      features,
    };
  },
};
</script>
