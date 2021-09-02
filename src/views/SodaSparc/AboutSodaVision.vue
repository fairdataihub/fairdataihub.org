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
          About SODA for SPARC
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
          SODA (Sofware for Organizing Data Automatically) for SPARC is a
          cross-platform desktop software that allows SPARC-funded researchers
          to easily comply with the FAIR SPARC Data curation and sharing guidelines.
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
  </section>
</template>

<script>
import {
  DesktopComputerIcon,
  LightningBoltIcon,
  ScaleIcon,
  ExclamationCircleIcon
} from "@heroicons/vue/outline";

const features = [
  {
    name: "What is SPARC?",
    description:
      "The NIH's Stimulating Peripheral Activity to Relieve Conditions (SPARC) program seeks to accelerate development of therapeutic devices that modulate electrical activity in nerves to improve organ function",
    icon: ScaleIcon
  },
  {
    name: "What are the FAIR SPARC Data Guidelines?",
    description: "All SPARC-funded researchers must curate their datasets following the SPARC Data Standards (SDS) and share them openly on the Pennsieve data platform as per their funding agreement with SPARC.",
    icon: ExclamationCircleIcon
  },
  {
    name: "What are the challenges?",
    description:
      "The guidelines are very exaustive to maximize FAIRness of SPARC dataset but are challenging and time-consuming to implement for the researchers.",
    icon: LightningBoltIcon
  },
  {
    name: "What does SODA for SPARC do?",
    description:
      "SODA for SPARC combines intuitive user interfaces and automation such that researchers can efficiently and accurately curate their SPARC datasets.",
    icon: DesktopComputerIcon
  }
];
export default {
  name: "AboutSodaVision",
  setup() {
    return {
      features
    };
  }
};
</script>

<style></style>
