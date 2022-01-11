<template>
  <div
    class="bg-transparent bg-cover bg-no-repeat sm:h-screen flex justify-center items-center relative"
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

    <div class="area absolute z-0 bottom-0">
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

    <base-section class="py-8 z-10">
      <div
        class="container px-6 py-8 w-screen max-w-screen-md mx-auto shadow-lg bg-gray-50 rounded-lg"
      >
        <form class="flex flex-col py-5 px-5 sm:px-10 text-3xl" @submit.prevent>
          <h2 class="pt-3 text-center text-4xl">
            Let us know if you have any feedback or want to collaborate
          </h2>
          <h2 class="pb-10 text-center">We'll get back to you soon</h2>

          <div class="sm:my-3 flex flex-col">
            <input
              type="text"
              required
              placeholder="Your Name *"
              v-model="formName"
              class="w-full my-2 py-2 px-4 text-base sm:text-lg font-asap border border-gray-300 focus:border-black rounded outline-none"
            />
            <span v-if="formNameRequired" class="text-red-500 text-xs">
              Please complete this required field.
            </span>
          </div>

          <div class="sm:my-3 flex flex-col">
            <input
              type="text"
              required
              placeholder="Your Company or Institution *"
              v-model="formInstitute"
              class="w-full my-2 py-2 px-4 text-base sm:text-lg font-asap border border-gray-300 focus:border-black rounded outline-none"
            />
            <span v-if="formInstituteRequired" class="text-red-500 text-xs">
              Please complete this required field.
            </span>
          </div>

          <div class="sm:my-3 flex flex-col">
            <input
              type="email"
              required
              placeholder="Your Email Address *"
              v-model="formEmail"
              class="w-full my-2 py-2 px-4 text-base sm:text-lg font-asap border border-gray-300 focus:border-black rounded outline-none"
            />
            <span v-if="formEmailRequired" class="text-red-500 text-xs">
              Please complete this required field.
            </span>
          </div>

          <div class="sm:my-3 flex flex-col">
            <textarea
              v-model="formMessage"
              required
              placeholder="Tell us more about what you have in mind*"
              rows="5"
              class="w-full my-2 py-2 px-4 text-base sm:text-lg font-normal font-asap border border-gray-300 focus:border-black rounded outline-none resize-none"
            ></textarea>
            <span v-if="formMessageRequired" class="text-red-500 text-xs">
              Please complete this required field.
            </span>
          </div>

          <div class="w-full flex flex-col justify-center items-center">
            <!-- <span v-if="formValid" class="text-red-500 text-xs ">
              Please complete all the required fields.
            </span> -->
            <button
              @click="sendEmail"
              class="cursor-pointer bg-pink-600 text-white px-4 py-2 rounded-lg shadow-lg focus:bg-pink-500 hover:bg-pink-500 transition-all my-2"
            >
              Send
            </button>
            <span v-if="formValid" class="text-red-500 text-xs">
              Please complete all the required fields.
            </span>
          </div>
        </form>
      </div>
    </base-section>
    <!-- <Notifications position="bottom right" /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const config = useRuntimeConfig();

let formName = ref("");
let formNameRequired = ref(false);
let formInstitute = ref("");
let formInstituteRequired = ref(false);
let formEmail = ref("");
let formEmailRequired = ref(false);
let formMessage = ref("");
let formMessageRequired = ref(false);

function validateInput() {
  if (
    formName.value.trim() == "" ||
    formInstitute.value.trim() == "" ||
    formEmail.value.trim() == "" ||
    formMessage.value.trim() == ""
  ) {
    return false;
  } else {
    return true;
  }
}

function sendEmail() {
  const formValid = validateInput();
  if (formValid) {
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
        console.log("sent");
        console.log(response);

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status

          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        console.log("SUCCESS!", response.status, response.text);

        // Reset form field
        formName = "";
        formEmail = "";
        formMessage = "";
        formInstitute = "";
      })
      .catch((error) => {
        console.error("There was an error!");
        console.log(error);
      });

    //       that.$notify({
    //         title: "Nice to meet you!",
    //         text: "We will be in touch with you soon.",
    //         type: "success",
    //         duration: 10000,
    //         speed: 1000,
    //       });
  }
}
</script>

<script>
export default {
  layout: "default",
  scrollToTop: true,
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
