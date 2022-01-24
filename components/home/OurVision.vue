<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="mx-auto max-w-screen-lg px-6 sm:px-6 lg:px-8">
    <div class="text-center">
      <p class="my-2 text-4xl font-extrabold tracking-tight sm:text-4xl">
        Our Vision
      </p>
      <p class="font-asap max-w-2xl text-xl text-black sm:text-xl lg:mx-auto">
        Only with tools that support and assist researchers we will achieve a
        widespread adoption of FAIR Data practices.
      </p>
    </div>

    <div class="mt-10">
      <dl
        class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0"
      >
        <div v-for="feature in features" :key="feature.name" class="relative">
          <dt>
            <div
              class="bg-light-vision absolute flex h-12 w-12 items-center justify-center rounded-md text-white"
            >
              <component
                :is="feature.icon"
                class="h-6 w-6"
                aria-hidden="true"
              />
            </div>
            <p class="ml-16 text-xl font-medium sm:text-lg">
              {{ feature.name }}
            </p>
          </dt>
          <dd
            class="font-asap mt-2 ml-16 text-lg text-black sm:text-base md:mt-0"
            v-html="feature.description"
          ></dd>
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
} from "@heroicons/vue/outline/index.js";

const features = [
  {
    name: "What is FAIR?",
    description: `The FAIR Data Principles are a set of guidelines for curating and sharing research data such that they are reusable by both human and machines. <div class="flex mt-2 md:mt-1">
      <a href="https://doi.org/10.1038/sdata.2016.18" target="_blank" rel="noopener">
        <text
          class="text-url hover-underline-animation"
        >
          Learn more about FAIR 
          <svg 
            fill="none" 
            stroke="currentColor" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            class="w-4 h-4 ml-2 arrow-animate" 
            viewBox="0 0 24 24" data-v-6a723fb6="">
              <path d="M5 12h14M12 5l7 7-7 7" data-v-6a723fb6=""></path>
          </svg>
        </text>
      </a>
    </div>`,
    icon: ScaleIcon,
  },
  {
    name: "Why is it important?",
    description:
      "FAIR data practices are crucial for ensuring reproducibility of scientific findings and enabling AI/ML-driven analysis to increase the pace of new discoveries.",
    icon: ExclamationCircleIcon,
  },
  {
    name: "What are the challenges?",
    description:
      "Despite effort from funding agencies, industry, and researchers, FAIR data practices are not widely adopted due to their complex nature and lack of support.",
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
