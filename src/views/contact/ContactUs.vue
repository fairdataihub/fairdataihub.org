<template>
  <div
    class="
      bg-haikeiCircleScatter bg-cover bg-no-repeat
      pt-16
      sm:h-screen
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
        <form
          @submit.prevent="sendEmail"
          class="flex flex-col py-5 px-5 sm:px-10 text-3xl"
        >
          <h2 class="font-inter pt-3 text-center text-4xl">
            Let us know if you have any feedback or want to collaborate
          </h2>
          <h2 class="font-inter pb-10 text-center">
            We'll get back to you soon
          </h2>

          <div class="sm:my-3 flex flex-col">
            <input
              type="text"
              required
              placeholder="Your Name *"
              v-model="formName"
              class="
                w-full
                my-2
                py-2
                px-4
                text-base
                sm:text-lg
                font-asap
                border border-gray-300
                focus:border-black
                rounded
                outline-none
              "
            />
            <span
              v-if="formNameRequired"
              class="text-red-500 text-xs font-inter"
            >
              Please complete this required field.
            </span>
          </div>

          <div class="sm:my-3 flex flex-col">
            <input
              type="text"
              required
              placeholder="Your Company or Institution *"
              v-model="formInstitute"
              class="
                w-full
                my-2
                py-2
                px-4
                text-base
                sm:text-lg
                font-asap
                border border-gray-300
                focus:border-black
                rounded
                outline-none
              "
            />
            <span
              v-if="formInstituteRequired"
              class="text-red-500 text-xs font-inter"
            >
              Please complete this required field.
            </span>
          </div>

          <div class="sm:my-3 flex flex-col">
            <input
              type="email"
              required
              placeholder="Your Email Address *"
              v-model="formEmail"
              class="
                w-full
                my-2
                py-2
                px-4
                text-base
                sm:text-lg
                font-asap
                border border-gray-300
                focus:border-black
                rounded
                outline-none
              "
            />
            <span
              v-if="formEmailRequired"
              class="text-red-500 text-xs font-inter"
            >
              Please complete this required field.
            </span>
          </div>

          <div class="sm:my-3 flex flex-col">
            <textarea
              v-model="formMessage"
              required
              placeholder="Tell us more about what you have in mind*"
              rows="5"
              class="
                w-full
                my-2
                py-2
                px-4
                text-base
                sm:text-lg
                font-normal font-asap
                border border-gray-300
                focus:border-black
                rounded
                outline-none
                resize-none
              "
            ></textarea>
            <span
              v-if="formMessageRequired"
              class="text-red-500 text-xs font-inter"
            >
              Please complete this required field.
            </span>
          </div>

          <div class="w-full flex flex-col justify-center items-center">
            <!-- <span v-if="formValid" class="text-red-500 text-xs font-inter">
              Please complete all the required fields.
            </span> -->
            <input
              type="submit"
              value="Send"
              class="
                cursor-pointer
                bg-pink-600
                text-white
                px-4
                py-2
                rounded-lg
                shadow-lg
                focus:bg-pink-500
                hover:bg-pink-500
                transition-all
                my-2
              "
            />
            <span v-if="formValid" class="text-red-500 text-xs font-inter">
              Please complete all the required fields.
            </span>
          </div>
        </form>
      </div>
    </base-section>
    <notifications position="bottom right" />
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactUs",
  data() {
    return {
      formName: "",
      formNameRequired: false,
      formInstitute: "",
      formInstituteRequired: false,
      formEmail: "",
      formEmailRequired: false,
      formMessage: "",
      formMessageRequired: false,
      formValid: false,
    };
  },
  watch: {
    formName: function (val) {
      if (val.trim() != "") {
        this.formNameRequired = false;
      } else {
        this.formNameRequired = true;
      }
    },
    formInstitute: function (val) {
      if (val.trim() != "") {
        this.formInstituteRequired = false;
      } else {
        this.formInstituteRequired = true;
      }
    },
    formEmail: function (val) {
      if (val.trim() != "") {
        this.formEmailRequired = false;
      } else {
        this.formEmailRequired = true;
      }
    },
    formMessage: function (val) {
      if (val.trim() != "") {
        this.formMessageRequired = false;
      } else {
        this.formMessageRequired = true;
      }
    },
  },
  methods: {
    validateInput() {
      if (
        this.formName.trim() == "" ||
        this.formInstitute.trim() == "" ||
        this.formEmail.trim() == "" ||
        this.formMessage.trim() == ""
      ) {
        this.formValid = true;
        return false;
      } else {
        this.formValid = false;
        return true;
      }
    },
    sendEmail() {
      const formValid = this.validateInput();
      let that = this;
      if (formValid) {
        emailjs
          .send(
            process.env.VUE_APP_SERVICE_ID,
            process.env.VUE_APP_TEMPLATE_ID,
            {
              name: this.formName.trim(),
              email: this.formEmail.trim(),
              message: this.formMessage.trim(),
              institute: this.formInstitute.trim(),
            },
            process.env.VUE_APP_USER_ID
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);

              that.$notify({
                title: "Nice to meet you!",
                text: "We will be in touch with you soon.",
                type: "success",
                duration: 10000,
                speed: 1000,
              });

              // Reset form field
              // that.name = "";
              // that.email = "";
              // that.message = "";
              // that.formInstitute = "";
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
      }
    },
  },
};
</script>

<style lang="postcss" scoped></style>
