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
          <div
            class="grid grid-cols-2 sm:grid-cols-4 gap-6 md:py-1 justify-center items-center pointer-events-none"
          >
            <img
              src="https://ucarecdn.com/3d7de35c-3e69-4bdb-a524-8b84b5f766ed/"
              alt="python logo"
            />
            <img
              src="https://ucarecdn.com/014bfbd3-a502-4005-858c-c004a6ba0d33/"
              alt="docker logo"
            />
            <img
              src="https://ucarecdn.com/34a55129-dc6c-40e8-bc0d-5ad0ee58d618/"
              alt="scigraph logo"
            />
            <img
              src="https://ucarecdn.com/3de89a65-49e5-4a0b-a353-e3ffcf22deaf/"
              alt="sqlite logo"
            />
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
