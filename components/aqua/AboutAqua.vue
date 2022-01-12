<template>
  <section>
    <div class="max-w-screen-lg px-6 mx-auto sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p
          class="my-2 text-4xl font-extrabold tracking-tight font-inter sm:text-4xl"
        >
          About
        </p>
        <p class="max-w-2xl text-xl text-black font-asap sm:text-xl lg:mx-auto">
          AQUA (Advanced Query Architecture for the SPARC Portal) an application
          that aims at improving the search capabilities of the SPARC Portal.
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
        >
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div
                class="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-light-vision"
              >
                <component
                  :is="feature.icon"
                  class="w-6 h-6"
                  aria-hidden="true"
                />
              </div>
              <p class="ml-16 text-xl font-medium font-inter sm:text-lg">
                {{ feature.name }}
              </p>
            </dt>
            <dd
              class="mt-2 ml-16 text-lg text-black md:mt-0 sm:text-base font-asap"
              v-html="feature.description"
            ></dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
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
    name: "What is SPARC?",
    description: `The NIH's Stimulating Peripheral Activity to Relieve Conditions (SPARC) program seeks to accelerate development of therapeutic devices that modulate electrical activity in nerves to improve organ function
    <div class="flex mt-2 md:mt-1">
      <a href="https://sparc.science" target="_blank" rel="noopener">
        <text
          class="text-url hover-underline-animation"
        >
          Learn more about SPARC
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
    name: "What are the FAIR SPARC Data Guidelines?",
    description: `All SPARC-funded researchers must curate their datasets following the SPARC Data Standards (SDS) and share them openly on the Pennsieve data platform as per their funding agreement with SPARC.
      <div class="flex mt-2 md:mt-1">
      <a href="https://doi.org/10.1101/2021.02.10.430563" target="_blank" rel="noopener">
        <text
          class="text-url hover-underline-animation"
        >
          Learn more about SDS
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
    icon: ExclamationCircleIcon,
  },
  {
    name: "What are the challenges?",
    description:
      "Currently, the search feature of the SPARC Portal is very limited. It does not recognize nearby words (typos and close-matches) or synonyms and provides limited result information.",
    icon: LightningBoltIcon,
  },
  {
    name: "What does AQUA do?",
    description:
      "AQUA makes the current SPARC Portal search engine smarter at understanding user query and improve search result display. The end goal is to improve exponentially the visibility of the SPARC datasets.",
    icon: DesktopComputerIcon,
  },
];
export default {
  name: "AboutAqua",
  setup() {
    return {
      features,
    };
  },
};
</script>

<style lang="postcss" scoped>
.arrow-animate {
  animation: bounce ease-in-out 2s 5 alternate-reverse;
}

@keyframes bounce {
  0% {
    transform: translatex(0);
  }
  50% {
    transform: translatex(4px);
  }
  100% {
    transform: translatex(0);
  }
}
</style>
