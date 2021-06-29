<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="bg-gray-50 dark:bg-gray-800" v-slot="{ open }">
    <div class="max-w-screen mx-auto px-2 sm:px-4">
      <div class="relative flex items-center justify-between h-16">
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
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
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
                      text-black
                      dark:text-gray-300
                      hover:bg-gray-700 hover:text-white
                      px-3
                      py-2
                      text-sm
                      font-medium
                      w-max
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <span
                      class="w-max flex justify-center h-auto"
                      style="white-space: nowrap"
                    >
                      Our Projects
                    </span>
                    <ChevronDownIcon class="w-4 h-4"></ChevronDownIcon>
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
                  bg-white
                "
              >
                <router-link to="/sodasparc">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
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
                        'block px-4 py-2 text-sm text-gray-700',
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
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                    >
                      MyFAIRData.io
                    </a>
                  </MenuItem>
                </router-link>
              </MenuItems>
            </transition>
          </Menu>
          <div class="flex items-center justify-center pl-4 pr-1">
            <div class="w-full max-w-xs mx-auto">
              <div as="div" class="flex items-center space-x-4">
                <SunIcon class="w-4 h-4" />

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
                <MoonIcon class="w-4 h-4" :currentColor="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</a
        >
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
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/vue/outline";

const navigation = [
  { name: "Home", href: "/home", current: true },
  { name: "Meet The Team", href: "/team", current: false },
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
    ChevronDownIcon,
    MenuIcon,
    XIcon,
    SunIcon,
    MoonIcon,
  },
  setup() {
    const open = ref(false);
    let switchValue;

    if (localStorage.theme == "dark") {
      switchValue = ref(true);
    } else {
      switchValue = ref(false);
    }

    return {
      navigation,
      open,
      switchValue,
    };
  },
  data() {
    return { darkModeEnabled: false };
  },
  methods: {
    switchToDarkMode() {
      let htmlClasses = document.querySelector("html").classList;
      if (localStorage.theme == "dark") {
        htmlClasses.remove("dark");
        localStorage.removeItem("theme");
      } else {
        htmlClasses.add("dark");
        localStorage.theme = "dark";
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
