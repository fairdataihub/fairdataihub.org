<template>
  <div
    class="
      bg-haikeiCircleScatter bg-cover bg-no-repeat
      pt-16
      h-screen
      flex
      justify-center
      items-center
    "
  >
    <base-section class="py-8">
      <div
        class="
          container
          px-6
          py-8
          w-screen
          max-w-screen-md
          mx-auto
          shadow-lg
          bg-gray-50
          rounded-lg
        "
      >
        <form action="" class="flex flex-col py-5 px-10 text-3xl">
          <h2 class="font-inter pt-3 text-center">
            Tell us about your project
          </h2>
          <h2 class="font-inter pb-10 text-center">
            We'll get back to you soon
          </h2>
          <div class="my-3 flex flex-col">
            <input
              type="text"
              placeholder="Your Name *"
              v-model="formName"
              class="
                w-full
                my-2
                py-2
                px-4
                text-lg
                font-asap
                border border-gray-300
                focus:border-black
                rounded
                outline-none
              "
            />
            <span class="text-red-500 text-xs font-inter">
              Please complete this required field.
            </span>
          </div>
          <div class="my-3 flex flex-col">
            <input
              type="email"
              placeholder="Your Email Address *"
              v-model="formEmail"
              class="
                w-full
                my-2
                py-2
                px-4
                text-lg
                font-asap
                border border-gray-300
                focus:border-black
                rounded
                outline-none
              "
            />
            <span class="text-red-500 text-xs font-inter">
              Please complete this required field.
            </span>
          </div>
          <div class="my-3 flex flex-col">
            <textarea
              v-model="formMessage"
              placeholder="Tell us more about your project idea *"
              rows="5"
              class="
                w-full
                my-2
                py-2
                px-4
                text-lg
                font-normal font-asap
                border border-gray-300
                focus:border-black
                rounded
                outline-none
                resize-none
              "
            ></textarea>
            <span class="text-red-500 text-xs font-inter">
              Please complete this required field.
            </span>
          </div>

          <div class="w-full">
            <button class="bg-black">Send</button>
          </div>
        </form>
      </div>
    </base-section>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      formName: "",
      formEmail: "",
      formMessage: "",
    };
  },
};
</script>

<style></style>
