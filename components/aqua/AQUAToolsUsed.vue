<template>
  <section>
    <div class="px-5 mx-auto sm:px-10">
      <div class="flex flex-col max-w-screen-lg mx-auto">
        <h1 class="py-5 text-4xl font-black md:mr-8 md:py-0">Technology</h1>
        <dl class="py-2">
          <div class="flex flex-col justify-between sm:flex-row">
            <dd class="mb-10 sm:mb-5">
              <p class="text-lg text-black sm:text-base font-asap">
                AQUA for SPARC utilized 2 main tool groups to develop the User
                interface and the Back end. The former includes the HTML-CSS-JS
                trio using: VueJS and NuxtJS. The latter is implemented using
                Python, Docker, SciGraph, and SQLite.
              </p>
            </dd>
          </div>
          <div
            class="grid items-center justify-center grid-cols-2 gap-6 pointer-events-none sm:grid-cols-4 md:py-1"
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
