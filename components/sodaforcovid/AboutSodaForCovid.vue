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
          SODA (Sofware to Organize Data Automatically) for COVID-19 Research is
          a cross-platform desktop software that allows researchers to easily
          organize and share their COVID-19 related genomics, immunology, and
          other general research data according to applicable FAIR guidelines.
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
    name: "What is COVID-19?",
    description: `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
    <div class="flex mt-2 md:mt-1">
      <a href="https://www.who.int/health-topics/coronavirus#tab=tab_1" target="_blank" rel="noopener">
        <text
          class="text-accent items-center text-xl font-asap sm:text-base flex flex-row"
        >
          Learn more about COVID-19 
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
    name: "Why are FAIR data practices important?",
    description: `Given the urgency of the pandemic, it is crucial that researchers rapidly curate and share their data according to applicable FAIR guidelines to promote transparency and increase the pace of discoveries. 
      <div class="flex mt-2 md:mt-1">
      <a href="niaid.nih.gov/research/share-covid-19-research-data" target="_blank" rel="noopener">
        <text
          class="text-accent items-center text-xl font-asap sm:text-base flex flex-row"
        >
          Learn more about COVID-19 data sharing 
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
      "Support is lacking to educate and assist the researchers, manual curation is not suitable to manage the amount of data being generated, and there is a lack of standard approach across research labs.",
    icon: LightningBoltIcon,
  },
  {
    name: "What does SODA for COVID-19 Research do?",
    description:
      "Through intuitive user interfaces and automation, this software provides a standardized tool for rapidly curating and sharing COVID-19 data according to applicable FAIR guidelines.",
    icon: DesktopComputerIcon,
  },
];
export default {
  name: "AboutSodaForCovid",
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
