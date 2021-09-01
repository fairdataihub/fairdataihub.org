<template>
  <section>
    <div class="sm:pt-10 px-5 sm:px-10 mx-auto">
      <div class="max-w-screen-lg mx-auto flex flex-col md:flex-row">
        <h1
          class="
            md:mr-8 md:w-2/5
            py-5
            md:py-0
            font-inter font-black
            dark:text-gray-50
            text-4xl
            sm:text-4xl
            md:text-5xl
            lg:text-5xl
            subpixel-antialiased
            text-left
          "
        >
          Funding
        </h1>
        <dl class="w-full md:w-3/5 p-2">
          <div>
            <dd class="mb-10 sm:mb-5 w-full">
              <p
                class="
                  w-full
                  text-lg
                  sm:text-base
                  font-asap
                  text-black
                  dark:text-white
                "
              >
                SODA for SPARC has been funded by the NIH SPARC program.
              </p>
              <div class="flex mt-2 md:mt-1">
                <a
                  href="https://reporter.nih.gov/search/ZGaCL05IVE6SWFIbPlZFrg/project-details/10175565"
                  target="_blank"
                  class="
                    text-accent
                    inline-flex
                    items-center
                    text-lg
                    sm:text-base
                  "
                >
                  <span class="font-lato">
                    Explore the award on NIH Reporter
                  </span>
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
  <section>
    <div class="sm:pt-10 px-5 sm:px-10 mx-auto">
      <div class="max-w-screen-lg mx-auto flex flex-col md:flex-row">
        <h1
          class="
            md:mr-8 md:w-2/5
            py-5
            md:py-0
            font-inter font-black
            dark:text-gray-50
            text-4xl
            sm:text-4xl
            md:text-5xl
            lg:text-5xl
            subpixel-antialiased
            text-left
          "
        >
          Team Members
        </h1>
        <dl class="w-full md:w-3/5">
          <div>
            <dd class="mb-10 sm:mb-5 w-full">
              <div class="flex flex-col md:flex-row py-0 md:py-1">
                <router-link to="/team/#BhaveshPatel">
                  <div
                    class="
                      flex flex-row
                      items-center
                      p-2
                      md:mr-32
                      rounded-lg
                      hover:bg-gray-100
                      dark:hover:bg-gray-700
                    "
                  >
                    <img
                      src="https://www.tailwind-kit.com/images/person/4.jpg"
                      alt="Bhavesh Patel profile picture"
                      class="
                        w-10
                        h-10
                        border
                        rounded-full
                        dark:border-coolGray-700
                      "
                    />
                    <p
                      class="
                        ml-2
                        font-asap font-normal
                        text-lg
                        dark:text-gray-50
                      "
                    >
                      Bhavesh Patel
                    </p>
                  </div>
                </router-link>
                <router-link to="/team/#TramNgo">
                  <div
                    class="
                      flex flex-row
                      items-center
                      p-2
                      rounded-lg
                      hover:bg-gray-100
                      dark:hover:bg-gray-700
                    "
                  >
                    <img
                      src="https://www.tailwind-kit.com/images/person/9.jpg"
                      alt="Tram Ngo profile picture"
                      class="
                        w-10
                        h-10
                        border
                        rounded-full
                        dark:border-coolGray-700
                      "
                    />
                    <p
                      class="
                        ml-2
                        font-asap font-normal
                        text-lg text-base
                        dark:text-gray-50
                      "
                    >
                      Tram Ngo
                    </p>
                  </div>
                </router-link>
              </div>
              <div class="flex flex-col md:flex-row py-0 md:py-1">
                <router-link to="/team/#SanjaySoundarajan">
                  <div
                    class="
                      flex flex-row
                      items-center
                      p-2
                      md:mr-32
                      rounded-lg
                      hover:bg-gray-100
                      dark:hover:bg-gray-700
                    "
                  >
                    <img
                      src="https://www.tailwind-kit.com/images/person/10.jpg"
                      alt="Sanjay Soundarajan profile picture"
                      class="
                        w-10
                        h-10
                        border
                        rounded-full
                        dark:border-coolGray-700
                      "
                    />
                    <p
                      class="
                        ml-2
                        font-asap font-normal
                        text-lg
                        dark:text-gray-50
                      "
                    >
                      Sanjay Soundarajan
                    </p>
                  </div>
                </router-link>
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
  name: "FundingTeam",
};
</script>

<style></style>
