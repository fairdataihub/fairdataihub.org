<template>
  <div
    class="relative flex items-center justify-center bg-transparent bg-no-repeat bg-cover sm:h-screen"
  >
    <Html>
      <Head>
        <Link
          rel="canonical"
          :href="`https://fairdataihub.org${$route.path}`"
        />
        <Title>Contact Us - Fair Data Innovations Hub</Title>
      </Head>
    </Html>

    <div class="absolute bottom-0 z-0 area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <base-section class="z-10 py-8">
      <div
        class="container w-screen max-w-screen-md px-6 py-8 mx-auto rounded-lg shadow-lg bg-gray-50"
      >
        <form class="flex flex-col px-5 py-5 text-3xl sm:px-10" @submit.prevent>
          <h2 class="pt-3 text-4xl text-center">
            Let us know if you have any feedback or want to collaborate
          </h2>
          <h2 class="pb-10 text-center">We'll get back to you soon</h2>

          <div class="flex flex-col sm:my-3">
            <input
              type="text"
              required
              placeholder="Your Name *"
              v-model="formName"
              class="w-full px-4 py-2 my-2 text-base border border-gray-300 rounded outline-none sm:text-lg font-asap focus:border-black"
            />
            <span v-if="formNameRequired" class="text-xs text-red-500">
              Please complete this required field.
            </span>
          </div>

          <div class="flex flex-col sm:my-3">
            <input
              type="text"
              required
              placeholder="Your Company or Institution *"
              v-model="formInstitute"
              class="w-full px-4 py-2 my-2 text-base border border-gray-300 rounded outline-none sm:text-lg font-asap focus:border-black"
            />
            <span v-if="formInstituteRequired" class="text-xs text-red-500">
              Please complete this required field.
            </span>
          </div>

          <div class="flex flex-col sm:my-3">
            <input
              type="email"
              required
              placeholder="Your Email Address *"
              v-model="formEmail"
              class="w-full px-4 py-2 my-2 text-base border border-gray-300 rounded outline-none sm:text-lg font-asap focus:border-black"
            />
            <span v-if="formEmailRequired" class="text-xs text-red-500">
              Please complete this required field.
            </span>
          </div>

          <div class="flex flex-col sm:my-3">
            <textarea
              v-model="formMessage"
              required
              placeholder="Tell us more about what you have in mind*"
              rows="5"
              class="w-full px-4 py-2 my-2 text-base font-normal border border-gray-300 rounded outline-none resize-none sm:text-lg font-asap focus:border-black"
            ></textarea>
            <span v-if="formMessageRequired" class="text-xs text-red-500">
              Please complete this required field.
            </span>
          </div>

          <div class="flex flex-col items-center justify-center w-full">
            <ClientOnly>
              <LottieComponentVue
                v-if="showLoading"
                :animationData="LoadingData"
                :width="200"
                :height="200"
              />
            </ClientOnly>

            <ClientOnly>
              <LottieComponentVue
                v-if="showSuccess"
                :animationData="EmailSuccessData"
                :width="100"
                :height="100"
                :loop="1"
              />
            </ClientOnly>

            <ClientOnly>
              <LottieComponentVue
                v-if="showError"
                :animationData="EmailErrorData"
                :width="100"
                :height="100"
                :loop="1"
              />
            </ClientOnly>
            <button
              v-if="!hideButton"
              @click="sendEmail"
              class="px-4 py-2 my-2 text-white transition-all bg-pink-600 rounded-lg shadow-lg cursor-pointer focus:bg-pink-500 hover:bg-pink-500"
            >
              Send
            </button>
            <span v-if="formErrorMessage" class="text-xs text-red-500">
              Please complete all the required fields.
            </span>
            <span v-if="emailStatus" class="my-2 text-lg">{{
              emailStatusMessage
            }}</span>
          </div>
        </form>
      </div>
    </base-section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const config = useRuntimeConfig();

let formName = ref("");
let formInstitute = ref("");
let formEmail = ref("");
let formMessage = ref("");
let formErrorMessage = ref(false);

let showLoading = ref(false);
let showSuccess = ref(false);
let showError = ref(false);
let hideButton = ref(false);

let emailStatus = ref(false);
let emailStatusMessage = ref("");

function validateInput() {
  if (
    formName.value.trim() == "" ||
    formInstitute.value.trim() == "" ||
    formEmail.value.trim() == "" ||
    formMessage.value.trim() == ""
  ) {
    formErrorMessage.value = true;
    return false;
  } else {
    formErrorMessage.value = false;
    return true;
  }
}

function sendEmail() {
  showLoading.value = true;

  const formValid = validateInput();
  if (formValid) {
    hideButton.value = true;

    const data = {
      service_id: config.SERVICE_ID,
      template_id: config.TEMPLATE_ID,
      user_id: config.USER_ID,
      accessToken: config.ACCESS_TOKEN,
      template_params: {
        name: formName.value.trim(),
        email: formEmail.value.trim(),
        message: formMessage.value.trim(),
        institute: formInstitute.value.trim(),
      },
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("https://api.emailjs.com/api/v1.0/email/send", requestOptions)
      .then(async (response) => {
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        // console.log("SUCCESS!", response.status, response.text);

        showLoading.value = false;
        showSuccess.value = true;
        emailStatus.value = true;
        emailStatusMessage.value =
          "Message sent successfully! We will get back to you soon.";
      })
      .catch((error) => {
        showLoading.value = false;
        showError.value = true;
        emailStatus.value = true;
        emailStatusMessage.value =
          "Something went wrong. Please try again later.";

        console.error("There was an error!");
        console.log(error);
      });
  } else {
    showLoading.value = false;
  }
}
</script>

<script>
import LottieComponentVue from "~~/components/lottie/LottieComponent.vue";

import LoadingData from "../../assets/lotties/loading.json";
import EmailSuccessData from "../../assets/lotties/emailSuccess.json";
import EmailErrorData from "../../assets/lotties/emailError.json";

export default {
  layout: "default",
  scrollToTop: true,
  components: {
    LottieComponentVue,
  },
  data() {
    return {
      LoadingData,
      EmailSuccessData,
      EmailErrorData,
      formNameRequired: false,
      formInstituteRequired: false,
      formEmailRequired: false,
      formMessageRequired: false,
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
};
</script>

<style lang="postcss" scoped>
.area {
  background: #4e54c8;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
  height: 100vh;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 160px;
  height: 160px;
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  background: #fda4af;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 120px;
  height: 120px;
  background: #e11d48;
  animation-delay: 2s;
  animation-duration: 20s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
  background: #f43f5e;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
  background: #fce7f3;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
  background: #fda4af;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
  background: #e11d48;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
  background: #cd329f;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 120px;
  height: 120px;
  animation-delay: 15s;
  animation-duration: 45s;
  background: #e11d48;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 80px;
  height: 80px;
  animation-delay: 2s;
  animation-duration: 35s;
  background: #ffe4e6;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
  background: #fff1f2;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-100vh) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
