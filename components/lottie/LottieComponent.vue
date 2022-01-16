<template>
  <div ref="LottieComponent"></div>
</template>

<script>
import lottie from "lottie-web";

export default {
  props: {
    lottieAnimationData: {
      type: Object,
      required: true,
    },
  },
  methods: {},
  mounted() {
    let interval = setInterval(() => {
      const element = this.$refs.LottieComponent;

      if (element !== null) {
        clearInterval(interval);

        lottie.loadAnimation({
          container: element,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: this.lottieAnimationData,
        });
      }
    }, 100);
  },
};
</script>

<style></style>
