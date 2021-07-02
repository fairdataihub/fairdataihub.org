<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure
    as="nav"
    class="bg-gray-50 dark:bg-gray-800 relative"
    v-slot="{ open }"
  >
    <div class="min-w-screen mx-auto bg-gray-50 dark:bg-gray-800">
      <div
        class="
          fixed
          flex
          items-center
          justify-between
          h-16
          w-screen
          bg-gray-50
          dark:bg-gray-800
          z-10
          px-2
          sm:px-6
        "
      >
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/home">
              <img
                class="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </router-link>
            <router-link to="/home">
              <img
                class="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </router-link>
          </div>
        </div>
        <div
          class="
            hidden
            sm:flex-1 sm:flex
            items-center
            justify-center
            sm:items-stretch sm:justify-end
          "
        >
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="
                  text-black
                  dark:text-gray-300
                  hover:bg-gray-700 hover:text-white
                  px-3
                  py-2
                  text-sm
                  font-medium
                  nav-bar-item
                "
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-3 sm:pr-0
          "
        >
          <!-- Projects dropdown -->
          <Menu as="div" class="relative w-max">
            <div>
              <MenuButton
                class="flex text-sm justify-center items-center w-max"
              >
                <div class="w-max flex justify-center items-center">
                  <span class="sr-only">Open user menu</span>
                  <div
                    class="
                      hover:bg-gray-700 hover:text-white
                      px-3
                      py-2
                      w-max
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <span
                      class="
                        w-max
                        text-sm
                        font-medium
                        flex
                        justify-center
                        text-black
                        hover:text-white
                        dark:text-white
                        h-auto
                        pr-2
                        whitespace-nowrap
                      "
                    >
                      Our Projects
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="
                        w-4
                        h-4
                        text-lg text-gray-800
                        dark:text-white
                        hover:text-white
                        transition-colors
                        duration-200
                      "
                      data-v-12379316=""
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="
                  origin-top-right
                  absolute
                  right-0
                  mt-2
                  w-48
                  rounded-md
                  shadow-lg
                  py-1
                  bg-gray-800
                  dark:bg-gray-50
                  text-sm text-white
                  dark:text-black
                "
              >
                <router-link to="/sodasparc">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-200',
                      ]"
                    >
                      SODA for SPARC
                    </a>
                  </MenuItem>
                </router-link>
                <router-link to="/sodacovid19">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-200',
                      ]"
                    >
                      SODA for COVID-19
                    </a>
                  </MenuItem>
                </router-link>
                <router-link to="/myfairdataio">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-200',
                      ]"
                    >
                      MyFAIRData.io
                    </a>
                  </MenuItem>
                </router-link>
              </MenuItems>
            </transition>
          </Menu>
          <div class="hidden sm:flex items-center justify-center pl-4 pr-1">
            <div class="w-full max-w-xs mx-auto">
              <div as="div" class="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="
                    w-4
                    h-4
                    text-lg text-gray-800
                    dark:text-white
                    transition-colors
                    duration-200
                  "
                  data-v-12379316=""
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>

                <Switch
                  as="button"
                  v-model="switchValue"
                  class="
                    relative
                    inline-flex
                    flex-shrink-0
                    h-6
                    transition-colors
                    duration-200
                    ease-in-out
                    border-2 border-transparent
                    rounded-full
                    cursor-pointer
                    w-11
                    focus:outline-none focus:shadow-outline
                  "
                  :class="switchValue ? 'bg-green-600' : 'bg-gray-200'"
                  v-slot="{ checked }"
                  @click="switchToDarkMode"
                >
                  <span
                    class="
                      inline-block
                      w-5
                      h-5
                      transition
                      duration-200
                      ease-in-out
                      transform
                      bg-white
                      rounded-full
                    "
                    :class="{
                      'translate-x-5': checked,
                      'translate-x-0': !checked,
                    }"
                  />
                </Switch>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="
                    w-4
                    h-4
                    text-lg text-gray-800
                    dark:text-white
                    transition-colors
                    duration-200
                  "
                  data-v-12379316=""
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu panel -->
    <DisclosurePanel class="sm:hidden pt-16 fixed w-screen bg-gray-500">
      <div class="px-2 pt-2 pb-3 space-y-1 z-10">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="
            text-gray-300
            bg-gray-700
            hover:bg-gray-700 hover:text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
            z-10
          "
        >
          {{ item.name }}
        </router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Switch,
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

const navigation = [
  { name: "Home", href: "/home" },
  { name: "Meet The Team", href: "/team" },
];

export default {
  name: "TheNavbar",
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Switch,
    MenuIcon,
    XIcon,
  },
  setup() {
    const open = ref(false);

    return {
      navigation,
      open,
    };
  },
  mounted() {
    if (!("theme" in localStorage)) {
      this.switchValue = false;
      this.checked = false;
    } else if (localStorage.theme == "dark") {
      this.switchValue = true;
      this.checked = true;
    }
  },
  data() {
    return { switchValue: false, checked: false };
  },
  methods: {
    switchToDarkMode() {
      let htmlClasses = document.querySelector("html").classList;
      if ("theme" in localStorage) {
        if (localStorage.theme == "dark") {
          htmlClasses.remove("dark");
          localStorage.removeItem("theme");
          this.switchValue = false;
          this.checked = false;
        } else {
          htmlClasses.add("dark");
          localStorage.theme = "dark";
          this.switchValue = true;
          this.checked = true;
        }
      } else {
        if (this.switchValue) {
          htmlClasses.add("dark");
          localStorage.theme = "dark";
          this.checked = true;
        } else {
          htmlClasses.remove("dark");
          localStorage.removeItem("theme");
          this.switchValue = false;
          this.checked = false;
        }
      }
    },
  },
};
</script>

<style scoped lang="postcss">
.nav-bar-item {
  @apply border-0 transition-all hover:border-gray-500 hover:text-white;
}
</style>
