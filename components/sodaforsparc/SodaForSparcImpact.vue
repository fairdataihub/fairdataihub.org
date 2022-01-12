<template>
  <section class="max-w-screen-xl mx-auto">
    <div class="flex flex-col w-full">
      <h2
        class="py-1 text-2xl font-bold text-center sm:text-2xl md:text-3xl lg:text-5xl"
      >
        Impact on SPARC datasets
      </h2>

      <h3 class="text-lg text-center md:text-xl lg:text-2xl">
        Trusted by researchers all over the world
      </h3>
    </div>

    <div class="flex flex-col justify-around p-6 sm:flex-row">
      <div class="flex flex-col items-center justify-center m-2 mb-5 lg:m-6">
        <p
          class="hidden my-1 text-5xl font-bold text-center font-lato sm:text-4xl md:text-5xl lg:text-6xl"
        ></p>

        <p
          class="my-1 text-5xl font-bold text-center font-lato sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span id="filesNum">{{ filesNum }}</span>
          <span>+</span>
        </p>

        <p
          class="text-xl text-center text-black font-asap sm:text-lg md:text-xl lg:text-2xl"
        >
          Files touched
        </p>
      </div>
      <div class="flex flex-col items-center justify-center m-2 mb-5 lg:m-6">
        <p
          class="hidden my-1 text-5xl font-bold text-center font-lato sm:text-4xl md:text-5xl lg:text-6xl"
        ></p>

        <p
          class="my-1 text-5xl font-bold text-center font-lato sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span id="datasetsNum">{{ datasetsNum }}</span>
          <span>+</span>
        </p>

        <p
          class="text-xl text-center text-black font-asap sm:text-lg md:text-xl lg:text-2xl"
        >
          Datasets modified
        </p>
      </div>
      <div class="flex flex-col items-center justify-center m-2 mb-5 lg:m-6">
        <p
          class="hidden my-1 text-5xl font-bold text-center font-lato sm:text-4xl md:text-5xl lg:text-6xl"
        ></p>

        <p
          class="my-1 text-5xl font-bold text-center font-lato sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span id="dataNum">{{ dataNum }}</span>
          <span>+ TB</span>
        </p>

        <p
          class="text-xl text-center text-black font-asap sm:text-lg md:text-xl lg:text-2xl"
        >
          Data uploaded
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "SodaForSparcImpact",
  data() {
    return {
      filesNum: 0,
      datasetsNum: 0,
      dataNum: 0,
    };
  },
  methods: {
    animateNumbers() {
      const zero = { val: 0 };

      const filesElement = document.getElementById("filesNum");
      const datasetsElement = document.getElementById("datasetsNum");
      const dataElement = document.getElementById("dataNum");

      gsap.to(zero, {
        val: 16300,
        duration: 1,
        scrollTrigger: filesElement,
        onUpdate: () => {
          this.filesNum = zero.val.toFixed(0);
        },
      });

      gsap.to(zero, {
        val: 60,
        duration: 2,
        scrollTrigger: datasetsElement,
        onUpdate: () => {
          this.datasetsNum = zero.val.toFixed(0);
        },
      });

      gsap.to(zero, {
        val: 3.5,
        duration: 1.5,
        scrollTrigger: dataElement,
        onUpdate: () => {
          this.dataNum = zero.val.toFixed(1);
        },
      });

      return false;
    },
  },
  mounted() {
    let interval = setInterval(() => {
      const el1 = document.getElementById("filesNum");
      const el2 = document.getElementById("datasetsNum");
      const el3 = document.getElementById("dataNum");

      if (el1 !== null && el2 !== null && el3 !== null) {
        clearInterval(interval);
        this.animateNumbers();
      }
    }, 100);
  },
};
</script>
