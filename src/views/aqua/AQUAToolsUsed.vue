<template>
  <section>
    <div class="sm:pt-10 px-5 sm:px-10 mx-auto">
      <div class="max-w-screen-lg mx-auto flex flex-col">
        <h1
          class="
            md:mr-8
            py-5
            md:py-0
            font-inter font-black
            dark:text-gray-50
            text-4xl
            subpixel-antialiased
            text-left
          "
        >
          Technology
        </h1>
        <dl class="w-full py-2">
          <div class="w-full flex flex-col sm:flex-row justify-between">
            <dd class="mb-10 sm:mb-5 pr-10">
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
                AQUA for SPARC utilized 2 main tool groups to develop the User
                interface and the Back end. The former includes the HTML-CSS-JS
                trio using: VueJS and NuxtJS. The latter is implemented using
                Python, Docker, SciGraph, and SQLite.
              </p>
            </dd>
          </div>
          <div
            class="
              w-full
              flex flex-col
              sm:flex-row
              justify-between
              items-center
            "
            style="margin-top: 20px"
          >
            <dd class="mb-10 sm:mb-5 pr-10">
              <img
                style="margin: 20px 10px"
                src="../../assets/aqua-tool-images/iconFrontEnd.png"
              />
            </dd>
            <dd class="mb-10 sm:mb-5 pr-10">
              <img
                style="margin: auto; height: 100%; width: 400px"
                src="../../assets/aqua-tool-images/pythonIcon.png"
              />
            </dd>
            <dd class="mb-10 sm:mb-5 pr-10">
              <img src="../../assets/aqua-tool-images/dockerIcon.png" />
            </dd>
            <dd class="mb-10 sm:mb-5 pr-10">
              <img
                style="margin: auto"
                src="../../assets/aqua-tool-images/scigraphIcon.png"
              />
            </dd>
            <dd class="mb-10 sm:mb-5 pr-10">
              <img src="../../assets/aqua-tool-images/sqliteIcon.png" />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AQUAToolsUsed",
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
