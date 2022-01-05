<template>
  <section class="max-w-screen-xl mx-auto">
    <div class="w-full flex flex-col">
      <h2
        class="font-bold text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-center py-1"
      >
        Impact on SPARC datasets
      </h2>

      <h3 class="text-lg md:text-xl lg:text-2xl text-center">
        Trusted by researchers all over the world
      </h3>
    </div>

    <div class="p-6 flex flex-col sm:flex-row justify-around">
      <div class="flex flex-col m-2 lg:m-6 items-center justify-center mb-5">
        <p
          class="my-1 font-lato font-bold text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-center hidden"
        ></p>

        <p
          class="my-1 font-lato font-bold text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
        >
          <span id="filesNum">{{ filesNum }}</span>
          <span>+</span>
        </p>

        <p
          class="text-xl font-asap sm:text-lg md:text-xl lg:text-2xl text-center text-black"
        >
          Files touched
        </p>
      </div>
      <div class="flex flex-col m-2 lg:m-6 items-center justify-center mb-5">
        <p
          class="my-1 font-lato font-bold text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-center hidden"
        ></p>

        <p
          class="my-1 font-lato font-bold text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
        >
          <span id="datasetsNum">{{ datasetsNum }}</span>
          <span>+</span>
        </p>

        <p
          class="text-xl font-asap sm:text-lg md:text-xl lg:text-2xl text-center text-black"
        >
          Datasets modified
        </p>
      </div>
      <div class="flex flex-col m-2 lg:m-6 items-center justify-center mb-5">
        <p
          class="my-1 font-lato font-bold text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-center hidden"
        ></p>

        <p
          class="my-1 font-lato font-bold text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
        >
          <span id="dataNum">{{ dataNum }}</span>
          <span>+ TB</span>
        </p>

        <p
          class="text-xl font-asap sm:text-lg md:text-xl lg:text-2xl text-center text-black"
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
        val: 60,
        duration: 1,
        scrollTrigger: filesElement,
        onUpdate: () => {
          this.filesNum = zero.val.toFixed(0);
        },
      });

      gsap.to(zero, {
        val: 16300,
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
