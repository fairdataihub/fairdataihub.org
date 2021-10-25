<template>
  <section>
    <div class="px-5 sm:px-10 mx-auto">
      <div class="max-w-screen-lg mx-auto flex flex-col">
        <h1 class="md:mr-8 py-5 md:py-0 font-black text-4xl">Technology</h1>
        <dl class="py-2">
          <div class="flex flex-col sm:flex-row justify-between">
            <dd class="mb-10 sm:mb-5">
              <p class="text-lg sm:text-base font-asap text-black">
                AQUA for SPARC utilized 2 main tool groups to develop the User
                interface and the Back end. The former includes the HTML-CSS-JS
                trio using: VueJS and NuxtJS. The latter is implemented using
                Python, Docker, SciGraph, and SQLite.
              </p>
            </dd>
          </div>
          <div class="flex flex-col sm:flex-row justify-between items-center">
            <dd>
              <img src="~/assets/aqua-tool-images/iconFrontEnd.png" />
            </dd>
            <dd>
              <img src="~/assets/aqua-tool-images/pythonIcon.png" />
            </dd>
            <dd>
              <img src="~/assets/aqua-tool-images/dockerIcon.png" />
            </dd>
            <dd>
              <img src="~/assets/aqua-tool-images/scigraphIcon.png" />
            </dd>
            <dd>
              <img src="~/assets/aqua-tool-images/sqliteIcon.png" />
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
