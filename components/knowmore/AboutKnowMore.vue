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
            max-w-2xl
            text-xl
            sm:text-xl
            text-black
            dark:text-white
            lg:mx-auto
          "
        >
          KnowMore is a tool readily integrable into the SPARC Portal that
          allows to find potential relation, difference, and similarities
          between multiple SPARC datasets in just a few clicks, which can lead
          to a new discovery, new hypothesis, or simply guide the user to the
          next logical step in their discovery process.
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
  DesktopComputerIcon,
  LightningBoltIcon,
  ScaleIcon,
  ExclamationCircleIcon,
} from "@heroicons/vue/outline";

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
            class="w-4 h-4 ml-2 
            arrow-animate" 
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
      "The process of comparing and analyzing multiple SPARC datasets is currently tedious because it requires investigating each dataset individually and downloading all of them to conduct cross-analyses.",
    icon: LightningBoltIcon,
  },
  {
    name: "What does KnowMore do?",
    description:
      "KnowMore uses several SPARC resources, data science methods, and knowledge of the SDS to generate various visualizations to help the user identify potential relations across datasets of interests.",
    icon: DesktopComputerIcon,
  },
];
export default {
  name: "AboutKnowMore",
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
