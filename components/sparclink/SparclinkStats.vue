<template>
  <section class="max-w-screen-xl mx-auto">
    <div class="flex flex-col w-full">
      <h2
        class="py-1 text-2xl font-bold text-center font-inter sm:text-2xl md:text-3xl lg:text-5xl"
      >
        Impact on SPARC datasets
      </h2>

      <h3 class="text-lg text-center font-inter md:text-xl lg:text-2xl">
        Trusted by researchers all over the world
      </h3>
    </div>

    <div class="flex flex-col justify-around p-6 sm:flex-row">
      <div
        class="flex flex-col items-center justify-center m-2 mb-5 lg:m-6"
        v-for="item in statsList"
        :key="item.name"
      >
        <p
          class="my-1 text-5xl font-bold text-center font-lato sm:text-4xl md:text-5xl lg:text-6xl"
          :data-inviewport="item.class"
        ></p>

        <p
          class="text-xl text-center text-black font-asap sm:text-lg md:text-xl lg:text-2xl"
        >
          {{ item.name }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SparclinkStats",
  data() {
    return {
      statsList: [
        {
          name: "Files touched",
          class: "files",
        },
        {
          name: "Datasets modified",
          class: "datasets",
        },
        {
          name: "Data uploaded",
          class: "data",
        },
      ],
    };
  },
  mounted() {
    // run when entering or leaving viewport
    const inViewport = (entries, observer) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
        if (entry.isIntersecting) {
          // if in viewport
          document
            .querySelector(`[data-inviewport="data"]`)
            .style.setProperty("--percent", 3.55); // Needed for the decimal animation
          observer.unobserve(entry.target);
        }
      });
    };

    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {};

    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll("[data-inviewport]");
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL, obsOptions);
    });
  },
};
</script>

<style lang="postcss" scoped>
@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

@property --percent {
  syntax: "<number>";
  initial-value: 0;
  inherits: false;
}
@property --temp {
  syntax: "<number>";
  initial-value: 0;
  inherits: false;
}
@property --v1 {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}
@property --v2 {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

[data-inviewport="files"].is-inViewport {
  transition: --num 1s;
  counter-reset: num var(--num);
  --num: 16300;
}
[data-inviewport="files"]::after {
  content: counter(num) "+";
}

[data-inviewport="datasets"].is-inViewport {
  transition: --num 1s;
  counter-reset: num var(--num);
  --num: 60;
}
[data-inviewport="datasets"]::after {
  content: counter(num) "+";
}

[data-inviewport="data"].is-inViewport {
  transition: --percent 1s;
  --temp: var(--percent);
  --v1: max(var(--temp) - 0.5, 0);
  --v2: max((var(--temp) - var(--v1)) * 100 - 0.5, 0);
  counter-reset: v1 var(--v1) v2 var(--v2);
}

[data-inviewport="data"]::before {
  content: counter(v1) "." counter(v2, decimal-leading-zero) "+ TB";
}
</style>
