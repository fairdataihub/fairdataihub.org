<template>
  <section>
    <div class="pb-4 sm:pt-10 px-6 mx-auto">
      <div class="max-w-screen-lg mx-auto flex flex-col md:flex-row">
        <h1
          class="
            md:mr-8 md:w-1/3
            py-5
            md:py-0
            font-sans font-black
            text-black
            dark:text-white
            text-4xl
            sm:text-4xl
            md:text-5xl
            lg:text-5xl
            subpixel-antialiased
            text-left
          "
        >
          About SODA
        </h1>
        <dl class="w-full md:w-2/3">
          <div>
            <dt class="mb-2">
              <h3
                class="
                  text-2xl
                  sm:text-xl
                  font-sans font-bold
                  text-black
                  dark:text-white
                "
              >
                What is SODA?
              </h3>
            </dt>
            <dd class="mb-10 sm:mb-5 w-full">
              <p
                class="
                  w-full
                  text-lg
                  sm:text-base
                  font-sans
                  text-black
                  dark:text-white
                "
              >
                SODA (Software to Organize Data Automatically) for SPARC is a
                desktop software intended to facilitate the data organization
                and submission process for SPARC investigators and thus promote
                the FAIR Data Principles. The idea for a computer software that
                assists researchers in curating and sharing their data
                originated during the SPARC Hackathon in December 2018, where it
                won the Public's Choice Award, before receiving support from the
                National Institutes of Health (NIH) for further development.
                SODA for SPARC is designed such that users can accomplish all
                the requirements to submit a SPARC dataset rapidly through a
                single interface. Moreover, requirements have been broken down
                into easy-to-perform steps and automation has been integrated to
                reduce users' effort to a bare minimum during each step, often
                to just a few clicks.
              </p>
            </dd>
          </div>
          <div>
            <dt class="mb-2">
              <h3
                class="
                  text-2xl
                  sm:text-xl
                  font-sans font-bold
                  text-black
                  dark:text-white
                "
              >
                What is SPARC?
              </h3>
            </dt>
            <dd class="mb-10 sm:mb-5 w-full">
              <p
                class="
                  w-full
                  text-lg
                  sm:text-base
                  font-sans
                  text-black
                  dark:text-white
                "
              >
                The SPARC program is supported by the NIH Common Fund to
                accelerate development of therapeutic devices and identification
                of neural targets for bioelectronic medicine—modulating
                electrical activity in nerves to help treat diseases and
                conditions, such as hypertension and gastrointestinal disorders,
                by precisely adjusting organ function.
              </p>
              <div class="flex mt-2 md:mt-1">
                <a
                  href="https://sparc.science"
                  target="_blank"
                  class="
                    text-indigo-600
                    dark:text-indigo-400
                    inline-flex
                    items-center
                    text-lg
                    sm:text-base
                  "
                >
                  Learn more about the SPARC program
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSparc",
};
</script>

<style></style>
