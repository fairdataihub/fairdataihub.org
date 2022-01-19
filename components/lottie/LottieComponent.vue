<template>
  <ClientOnly>
    <div
      ref="LottieAnimationContainer"
      class="lottie-animation-container"
      :style="getCurrentStyle"
    ></div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, computed } from "vue";
import Lottie from "lottie-web";

const props = defineProps({
  animationData: { type: Object, required: true },
  loop: { type: [Boolean, Number], default: true },
  autoPlay: { type: Boolean, default: true },
  width: { type: [Number, String], default: "100%" },
  height: { type: [Number, String], default: "100%" },
  backgroundColor: { type: String, default: "transparent" },
});

const LottieAnimationContainer = ref<HTMLElement | null>(null);
// let lottieAnimation = ref<any>(null);

const checkIfContainerExists = () => {
  if (LottieAnimationContainer.value !== null) {
    return true;
  } else {
    return false;
  }
};

const loadLottie = async () => {
  let autoPlay = props.autoPlay;

  if (LottieAnimationContainer.value) {
    const animationDataCopy = JSON.parse(JSON.stringify(props.animationData));

    let loop = props.loop;

    if (typeof loop === "number") {
      if (loop > 0) {
        loop = loop - 1;
      }
    }

    Lottie.loadAnimation({
      container: LottieAnimationContainer.value,
      renderer: "svg",
      loop: loop,
      autoplay: autoPlay,
      animationData: animationDataCopy,
    });
  }
};

const getCurrentStyle: any = computed(() => {
  let width = props.width;
  let height = props.height;

  if (typeof props.width === "number") {
    width = `${props.width}px`;
  }
  if (typeof props.height === "number") {
    height = `${props.height}px`;
  }

  let cssVariables = {
    "--lottie-animation-container-width": width,
    "--lottie-animation-container-height": height,
    "--lottie-animation-container-background-color": props.backgroundColor,
  };

  return cssVariables;
});

const setupLottie = () => {
  // loadLottie();
  const interval = setInterval(() => {
    if (checkIfContainerExists()) {
      clearInterval(interval);
      loadLottie();
    }
  }, 1);
};

onMounted(async () => {
  setupLottie();
});
</script>

<style scoped>
.lottie-animation-container {
  width: var(--lottie-animation-container-width);
  height: var(--lottie-animation-container-height);
  background-color: var(--lottie-animation-container-background-color);
}
</style>
