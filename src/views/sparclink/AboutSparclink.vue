<template>
  <section>
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
          About
        </p>
        <p
          class="
            font-asap
            max-w-3xl
            text-xl
            sm:text-xl
            text-black
            dark:text-white
            lg:mx-auto
          "
        >
          SPARClink provides a system that queries all external publications
          using open source tools and platforms to create interactable
          visualizations that showcases the impact that SPARC has on the overall
          scientific research community.
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
  CodeIcon,
  ChartPieIcon,
  InformationCircleIcon,
  DatabaseIcon,
} from "@heroicons/vue/outline";

const features = [
  {
    name: "What is SPARC?",
    description: `The NIH's Stimulating Peripheral Activity to Relieve Conditions (SPARC) program seeks to accelerate development of therapeutic devices that modulate electrical activity in nerves to improve organ function. 
    <div class="flex mt-2 md:mt-1">
      <a href="https://sparc.science" target="_blank" rel="noopener">
        <text
          class="text-accent items-center text-xl font-asap sm:text-base flex flex-row"
        >
          Learn more about SPARC 
          <svg 
            fill="none" 
            stroke="currentColor" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            class="w-4 h-4 ml-2 
            arrow-animate" 
            viewBox="0 0 24 24" data-v-6a723fb6="">
            <path d="M5 12h14M12 5l7 7-7 7" data-v-6a723fb6=""></path>
          </svg>
        </text>
      </a>
    </div>`,
    icon: InformationCircleIcon,
  },
  {
    name: "What are the FAIR SPARC Data Guidelines?",
    description: `All SPARC-funded researchers must curate their datasets following the SPARC Data Standards (SDS) and share them openly on the Pennsieve data platform as per their funding agreement with SPARC.
      <div class="flex mt-2 md:mt-1">
      <a href="https://doi.org/10.1101/2021.02.10.430563" target="_blank" rel="noopener">
        <text
          class="text-accent items-center text-xl font-asap sm:text-base flex flex-row"
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
    icon: DatabaseIcon,
  },
  {
    name: "What does Impact mean?",
    description:
      "The SPARC program provides datasets, maps and computational studies that follow FAIR principles and is used by researchers all around the world. The usage of SPARC resouces by platforms and programs ouside SPARC is what we view as the meaning of the term 'Impact'.",
    icon: ChartPieIcon,
  },
  {
    name: "What does SPARClink do?",
    description:
      "SPARClink uses data from existing SPARC publications, datasets and protocols to create an interactive visualization that you can use to view the impact of SPARC.",
    icon: CodeIcon,
  },
];
export default {
  name: "AboutSparclink",
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
