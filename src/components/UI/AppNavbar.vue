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
          z-30
          px-2
          sm:px-6
          transition
        "
        id="navbar"
      >
        <div class="absolute inset-y-0 right-2 flex items-center sm:hidden">
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
            ref="mobileMenuButton"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon
              v-if="!open"
              class="block h-6 w-6 pointer-events-none"
              aria-hidden="true"
            />
            <XIcon
              v-else
              class="block h-6 w-6 pointer-events-none"
              aria-hidden="true"
            />
          </DisclosureButton>
        </div>
        <div
          class="
            flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
            relative
          "
        >
          <div
            class="
              flex-shrink-0 flex
              items-center
              justify-center
              px-4
              sm:w-auto
            "
          >
            <router-link to="/">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                class="block md:hidden h-6 w-auto"
                viewBox="0 0 451.84 61.44"
              >
                <path
                  d="M475.44,366.35v1.21h8.22v7.54h-8.22v32.36H463.67V375.1h-4.29v-7.54h4.29V366.5c0-1.28,0-3.17.08-4.53.6-7.09,5.2-11.38,16.07-11.38a21.39,21.39,0,0,1,4.52.52v8c-4.9-.91-8.37.45-8.75,3.92A24.6,24.6,0,0,0,475.44,366.35Z"
                  transform="translate(-459.38 -350.59)"
                />
                <path
                  d="M511.79,401.57l-1.81,4.3a18.36,18.36,0,0,1-10,2.64c-6.79,0-12.9-4.15-12.9-11.76,0-8.75,7.77-13.88,21.95-13.88h2.56v-.68a29.27,29.27,0,0,0-.15-3.47c-.22-2.41-2-4.38-5.58-4.38s-5.73,2.27-6,6.26H488.56c.23-9.2,8-14.4,17.8-14.4,11.92,0,16.22,5.2,16.82,12.37.15,1.88.23,4.15.23,6.48v12.22a69.8,69.8,0,0,0,.75,10.19H512.62Zm-.15-8.75v-2.94c-7.31-.6-12.37,1.21-12.37,5.88,0,3,2.19,4.61,5.43,4.61C508.25,400.37,511.64,397.8,511.64,392.82Z"
                  transform="translate(-459.38 -350.59)"
                />
                <path
                  d="M544.6,357.68c0,3.69-2.56,6-6.33,6s-6.26-2.34-6.26-6,2.49-6,6.26-6S544.6,354.06,544.6,357.68Zm-12.22,49.78V367.25h11.85v40.21Z"
                  transform="translate(-459.38 -350.59)"
                />
                <path
                  d="M578.39,366.5v9.58c-9.35-.6-13.35,3.17-13.35,14.56v16.82H553.2V367.25H565V375l3-5.58a10.61,10.61,0,0,1,7.31-3.17A16.24,16.24,0,0,1,578.39,366.5Z"
                  transform="translate(-459.38 -350.59)"
                />
                <path
                  d="M623.49,407.46H611.65v-6l-3,4.45c-2.27,1.74-6.26,2.64-10.34,2.64-11.09,0-17.8-8.45-17.8-20.36,0-14.41,8.83-21.95,19.16-21.95,3.32,0,7.32.83,9.35,2.11l2.64,4.22V352h11.84Zm-11.84-19.61V386c0-8.6-4.75-11.62-9.2-11.62-5.73,0-9.8,4.38-9.8,13.13,0,7.92,3.84,12.9,9.42,12.9C607.43,400.37,611.65,397.05,611.65,387.85Z"
                  transform="translate(-459.38 -350.59)"
                  fill="#CB128D"
                />
                <path
                  d="M655.09,401.57l-1.8,4.3a18.42,18.42,0,0,1-10,2.64c-6.79,0-12.9-4.15-12.9-11.76,0-8.75,7.77-13.88,22-13.88h2.56v-.68a29.27,29.27,0,0,0-.15-3.47c-.22-2.41-2-4.38-5.58-4.38s-5.73,2.27-6,6.26H631.86c.23-9.2,8-14.4,17.8-14.4,11.92,0,16.22,5.2,16.82,12.37.15,1.88.23,4.15.23,6.48v12.22a69.8,69.8,0,0,0,.75,10.19H655.92Zm-.15-8.75v-2.94c-7.31-.6-12.37,1.21-12.37,5.88,0,3,2.19,4.61,5.43,4.61C651.55,400.37,654.94,397.8,654.94,392.82Z"
                  transform="translate(-459.38 -350.59)"
                  fill="#CB128D"
                />
                <path
                  d="M689.86,392c0,1.36,0,2.72.08,3.77.3,4,1.66,4.91,7.69,4.53v7.54a45.92,45.92,0,0,1-7.31.61c-8.83,0-11.69-2.87-12.15-8.75-.15-2-.15-3.85-.15-6.11V375.1h-6.11v-7.54H678V357.45h11.84v10.11h8.53v7.54h-8.53Z"
                  transform="translate(-459.38 -350.59)"
                  fill="#CB128D"
                />
                <path
                  d="M726.82,401.57l-1.81,4.3a18.39,18.39,0,0,1-10,2.64c-6.78,0-12.89-4.15-12.89-11.76,0-8.75,7.77-13.88,22-13.88h2.56v-.68a29.27,29.27,0,0,0-.15-3.47c-.23-2.41-2-4.38-5.58-4.38-3.7,0-5.73,2.27-6,6.26H703.59c.23-9.2,8-14.4,17.8-14.4,11.92,0,16.22,5.2,16.82,12.37.15,1.88.23,4.15.23,6.48v12.22a69.8,69.8,0,0,0,.75,10.19H727.65Zm-.15-8.75v-2.94c-7.32-.6-12.37,1.21-12.37,5.88,0,3,2.19,4.61,5.43,4.61C723.28,400.37,726.67,397.8,726.67,392.82Z"
                  transform="translate(-459.38 -350.59)"
                  fill="#CB128D"
                />
                <path
                  d="M759.63,357.68c0,3.69-2.57,6-6.34,6s-6.26-2.34-6.26-6,2.49-6,6.26-6S759.63,354.06,759.63,357.68Zm-12.22,49.78V367.25h11.84v40.21Z"
                  transform="translate(-459.38 -350.59)"
                  fill="#000"
                />
                <path
                  d="M807.37,384.75v22.71H795.53v-20.9c0-1.51,0-3.54-.15-5.58-.3-4.07-2.57-6.64-7.17-6.64s-8.14,4.23-8.14,14.49v18.63H768.23V351.64h11.84v21.95l3.32-4.83a15.82,15.82,0,0,1,9.35-2.56c8.45,0,13.35,4.07,14.25,11.09A50.83,50.83,0,0,1,807.37,384.75Z"
                  transform="translate(-459.38 -350.59)"
                />
                <path
                  d="M854.21,407.46H842.44v-6.87L839.05,406a15.85,15.85,0,0,1-9.36,2.56c-8.29,0-13.27-4.67-14.18-10.18a51.19,51.19,0,0,1-.37-7.47V367.25H826.9V388.3a53.42,53.42,0,0,0,.31,5.5c.52,4.08,2.63,6.49,7.24,6.49,4.82,0,8-4.15,8-11.54v-21.5h11.77Z"
                  transform="translate(-459.38 -350.59)"
                />
                <path
                  d="M906.17,386.49c0,14.48-8.82,22-19.15,22-3.32,0-7.32-.83-9.36-2.11L875,402.18v5.28H863.18V352H875v21.27l3-4.45c2.26-1.74,6.26-2.64,10.33-2.64C899.46,366.2,906.17,374.65,906.17,386.49Zm-12.14.75c0-7.92-3.85-12.9-9.43-12.9S875,377.66,875,386.87v1.8c0,8.68,4.68,11.7,9.2,11.7C890,400.37,894,396,894,387.24Z"
                  transform="translate(-459.38 -350.59)"
                />
              </svg>
            </router-link>
            <router-link to="/">
              <div class="hidden md:block">
                <!-- White text logo -->
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hidden dark:block md:h-6 lg:h-7 w-auto"
                  viewBox="0 0 451.84 61.44"
                >
                  <path
                    d="M507.44,363.88v1.28h8.72v8h-8.72v34.32H495V373.16H490.4v-8H495V364c0-1.36,0-3.36.08-4.8.64-7.52,5.52-12.08,17-12.08a22.56,22.56,0,0,1,4.8.56v8.48c-5.2-1-8.88.48-9.28,4.16A25.92,25.92,0,0,0,507.44,363.88Z"
                    transform="translate(-490.4 -347.16)"
                    fill="#fff"
                  />
                  <path
                    d="M546,401.24l-1.92,4.56a19.49,19.49,0,0,1-10.56,2.8c-7.2,0-13.68-4.4-13.68-12.48,0-9.28,8.24-14.72,23.28-14.72h2.72v-.72a30.88,30.88,0,0,0-.16-3.68c-.24-2.56-2.16-4.64-5.92-4.64-3.92,0-6.08,2.4-6.4,6.64h-12c.24-9.76,8.48-15.28,18.88-15.28,12.64,0,17.2,5.52,17.84,13.12.16,2,.24,4.4.24,6.88v13a73.56,73.56,0,0,0,.8,10.8H546.88Zm-.16-9.28v-3.12c-7.76-.64-13.12,1.28-13.12,6.24,0,3.2,2.32,4.88,5.76,4.88C542.24,400,545.84,397.24,545.84,392Z"
                    transform="translate(-490.4 -347.16)"
                    fill="#fff"
                  />
                  <path
                    d="M580.8,354.68c0,3.92-2.72,6.4-6.72,6.4s-6.64-2.48-6.64-6.4,2.64-6.32,6.64-6.32S580.8,350.84,580.8,354.68Zm-13,52.8V364.84H580.4v42.64Z"
                    transform="translate(-490.4 -347.16)"
                    fill="#fff"
                  />
                  <path
                    d="M616.64,364V374.2c-9.92-.64-14.16,3.36-14.16,15.44v17.84H589.92V364.84h12.56V373l3.2-5.92a11.3,11.3,0,0,1,7.76-3.36A17.22,17.22,0,0,1,616.64,364Z"
                    transform="translate(-490.4 -347.16)"
                    fill="#fff"
                  />
                  <path
                    d="M664.48,407.48H651.92v-6.4l-3.2,4.72c-2.4,1.84-6.64,2.8-11,2.8-11.76,0-18.88-9-18.88-21.6,0-15.28,9.36-23.28,20.32-23.28,3.52,0,7.76.88,9.92,2.24l2.8,4.48V348.68h12.56Zm-12.56-20.8v-2c0-9.12-5-12.32-9.76-12.32-6.08,0-10.4,4.64-10.4,13.92,0,8.4,4.08,13.68,10,13.68C647.44,400,651.92,396.44,651.92,386.68Z"
                    transform="translate(-490.4 -347.16)"
                    fill="#CB128D"
                  />
                  <path
                    d="M698,401.24l-1.92,4.56a19.49,19.49,0,0,1-10.56,2.8c-7.2,0-13.68-4.4-13.68-12.48,0-9.28,8.24-14.72,23.28-14.72h2.72v-.72a30.88,30.88,0,0,0-.16-3.68c-.24-2.56-2.16-4.64-5.92-4.64-3.92,0-6.08,2.4-6.4,6.64h-12c.24-9.76,8.48-15.28,18.88-15.28,12.64,0,17.2,5.52,17.84,13.12.16,2,.24,4.4.24,6.88v13a73.56,73.56,0,0,0,.8,10.8H698.88Zm-.16-9.28v-3.12c-7.76-.64-13.12,1.28-13.12,6.24,0,3.2,2.32,4.88,5.76,4.88C694.24,400,697.84,397.24,697.84,392Z"
                    transform="translate(-490.4 -347.16)"
                    fill="#CB128D"
                  />
                  <path
                    d="M734.88,391.08c0,1.44,0,2.88.08,4,.32,4.24,1.76,5.2,8.16,4.8v8a49.15,49.15,0,0,1-7.76.64c-9.36,0-12.4-3-12.88-9.28-.16-2.16-.16-4.08-.16-6.48v-19.6h-6.48v-8h6.48V354.44h12.56v10.72h9v8h-9Z"
                    transform="translate(-490.4 -347.16)"
                    fill="#CB128D"
                  />
                  <path
                    d="M774.08,401.24l-1.92,4.56a19.49,19.49,0,0,1-10.56,2.8c-7.2,0-13.68-4.4-13.68-12.48,0-9.28,8.24-14.72,23.28-14.72h2.72v-.72a30.88,30.88,0,0,0-.16-3.68c-.24-2.56-2.16-4.64-5.92-4.64-3.92,0-6.08,2.4-6.4,6.64h-12c.24-9.76,8.48-15.28,18.88-15.28,12.64,0,17.2,5.52,17.84,13.12.16,2,.24,4.4.24,6.88v13a73.56,73.56,0,0,0,.8,10.8H775Zm-.16-9.28v-3.12c-7.76-.64-13.12,1.28-13.12,6.24,0,3.2,2.32,4.88,5.76,4.88C770.32,400,773.92,397.24,773.92,392Z"
                    transform="translate(-490.4 -347.16)"
                    fill="#CB128D"
                  />
                  <path
                    d="M837.44,383.4v24.08H824.88V385.32c0-1.6,0-3.76-.16-5.92-.32-4.32-2.72-7-7.6-7s-8.64,4.48-8.64,15.36v19.76H795.92v-59.2h12.56v23.28l3.52-5.12a16.8,16.8,0,0,1,9.92-2.72c9,0,14.16,4.32,15.12,11.76A53.86,53.86,0,0,1,837.44,383.4Z"
                    transform="translate(-490.4 -347.16)"
                    fill="#fff"
                  />
                  <path
                    d="M887.12,407.48H874.64V400.2l-3.6,5.68a16.8,16.8,0,0,1-9.92,2.72c-8.8,0-14.08-5-15-10.8a53.86,53.86,0,0,1-.4-7.92v-25h12.48v22.32a57.62,57.62,0,0,0,.32,5.84c.56,4.32,2.8,6.88,7.68,6.88,5.12,0,8.48-4.4,8.48-12.24v-22.8h12.48Z"
                    transform="translate(-490.4 -347.16)"
                    fill="#fff"
                  />
                  <path
                    d="M942.24,385.24c0,15.36-9.36,23.36-20.32,23.36-3.52,0-7.76-.88-9.92-2.24l-2.8-4.48v5.6H896.64v-58.8H909.2v22.56l3.2-4.72c2.4-1.84,6.64-2.8,11-2.8C935.12,363.72,942.24,372.68,942.24,385.24Zm-12.88.8c0-8.4-4.08-13.68-10-13.68-5.76,0-10.16,3.52-10.16,13.28v1.92c0,9.2,5,12.4,9.76,12.4C925,400,929.36,395.32,929.36,386Z"
                    transform="translate(-490.4 -347.16)"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div class="hidden md:block">
                <!-- Black text logo -->
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  class="block dark:hidden md:h-6 lg:h-7 w-auto"
                  viewBox="0 0 446.8 57.93"
                >
                  <path
                    d="M475.44,366.35v1.21h8.22v7.54h-8.22v32.36H463.67V375.1h-4.29v-7.54h4.29V366.5c0-1.28,0-3.17.08-4.53.6-7.09,5.2-11.38,16.07-11.38a21.39,21.39,0,0,1,4.52.52v8c-4.9-.91-8.37.45-8.75,3.92A24.6,24.6,0,0,0,475.44,366.35Z"
                    transform="translate(-459.38 -350.59)"
                  />
                  <path
                    d="M511.79,401.57l-1.81,4.3a18.36,18.36,0,0,1-10,2.64c-6.79,0-12.9-4.15-12.9-11.76,0-8.75,7.77-13.88,21.95-13.88h2.56v-.68a29.27,29.27,0,0,0-.15-3.47c-.22-2.41-2-4.38-5.58-4.38s-5.73,2.27-6,6.26H488.56c.23-9.2,8-14.4,17.8-14.4,11.92,0,16.22,5.2,16.82,12.37.15,1.88.23,4.15.23,6.48v12.22a69.8,69.8,0,0,0,.75,10.19H512.62Zm-.15-8.75v-2.94c-7.31-.6-12.37,1.21-12.37,5.88,0,3,2.19,4.61,5.43,4.61C508.25,400.37,511.64,397.8,511.64,392.82Z"
                    transform="translate(-459.38 -350.59)"
                  />
                  <path
                    d="M544.6,357.68c0,3.69-2.56,6-6.33,6s-6.26-2.34-6.26-6,2.49-6,6.26-6S544.6,354.06,544.6,357.68Zm-12.22,49.78V367.25h11.85v40.21Z"
                    transform="translate(-459.38 -350.59)"
                  />
                  <path
                    d="M578.39,366.5v9.58c-9.35-.6-13.35,3.17-13.35,14.56v16.82H553.2V367.25H565V375l3-5.58a10.61,10.61,0,0,1,7.31-3.17A16.24,16.24,0,0,1,578.39,366.5Z"
                    transform="translate(-459.38 -350.59)"
                  />
                  <path
                    d="M623.49,407.46H611.65v-6l-3,4.45c-2.27,1.74-6.26,2.64-10.34,2.64-11.09,0-17.8-8.45-17.8-20.36,0-14.41,8.83-21.95,19.16-21.95,3.32,0,7.32.83,9.35,2.11l2.64,4.22V352h11.84Zm-11.84-19.61V386c0-8.6-4.75-11.62-9.2-11.62-5.73,0-9.8,4.38-9.8,13.13,0,7.92,3.84,12.9,9.42,12.9C607.43,400.37,611.65,397.05,611.65,387.85Z"
                    transform="translate(-459.38 -350.59)"
                    fill="#CB128D"
                  />
                  <path
                    d="M655.09,401.57l-1.8,4.3a18.42,18.42,0,0,1-10,2.64c-6.79,0-12.9-4.15-12.9-11.76,0-8.75,7.77-13.88,22-13.88h2.56v-.68a29.27,29.27,0,0,0-.15-3.47c-.22-2.41-2-4.38-5.58-4.38s-5.73,2.27-6,6.26H631.86c.23-9.2,8-14.4,17.8-14.4,11.92,0,16.22,5.2,16.82,12.37.15,1.88.23,4.15.23,6.48v12.22a69.8,69.8,0,0,0,.75,10.19H655.92Zm-.15-8.75v-2.94c-7.31-.6-12.37,1.21-12.37,5.88,0,3,2.19,4.61,5.43,4.61C651.55,400.37,654.94,397.8,654.94,392.82Z"
                    transform="translate(-459.38 -350.59)"
                    fill="#CB128D"
                  />
                  <path
                    d="M689.86,392c0,1.36,0,2.72.08,3.77.3,4,1.66,4.91,7.69,4.53v7.54a45.92,45.92,0,0,1-7.31.61c-8.83,0-11.69-2.87-12.15-8.75-.15-2-.15-3.85-.15-6.11V375.1h-6.11v-7.54H678V357.45h11.84v10.11h8.53v7.54h-8.53Z"
                    transform="translate(-459.38 -350.59)"
                    fill="#CB128D"
                  />
                  <path
                    d="M726.82,401.57l-1.81,4.3a18.39,18.39,0,0,1-10,2.64c-6.78,0-12.89-4.15-12.89-11.76,0-8.75,7.77-13.88,22-13.88h2.56v-.68a29.27,29.27,0,0,0-.15-3.47c-.23-2.41-2-4.38-5.58-4.38-3.7,0-5.73,2.27-6,6.26H703.59c.23-9.2,8-14.4,17.8-14.4,11.92,0,16.22,5.2,16.82,12.37.15,1.88.23,4.15.23,6.48v12.22a69.8,69.8,0,0,0,.75,10.19H727.65Zm-.15-8.75v-2.94c-7.32-.6-12.37,1.21-12.37,5.88,0,3,2.19,4.61,5.43,4.61C723.28,400.37,726.67,397.8,726.67,392.82Z"
                    transform="translate(-459.38 -350.59)"
                    fill="#CB128D"
                  />
                  <path
                    d="M759.63,357.68c0,3.69-2.57,6-6.34,6s-6.26-2.34-6.26-6,2.49-6,6.26-6S759.63,354.06,759.63,357.68Zm-12.22,49.78V367.25h11.84v40.21Z"
                    transform="translate(-459.38 -350.59)"
                    fill="#000"
                  />
                  <path
                    d="M807.37,384.75v22.71H795.53v-20.9c0-1.51,0-3.54-.15-5.58-.3-4.07-2.57-6.64-7.17-6.64s-8.14,4.23-8.14,14.49v18.63H768.23V351.64h11.84v21.95l3.32-4.83a15.82,15.82,0,0,1,9.35-2.56c8.45,0,13.35,4.07,14.25,11.09A50.83,50.83,0,0,1,807.37,384.75Z"
                    transform="translate(-459.38 -350.59)"
                  />
                  <path
                    d="M854.21,407.46H842.44v-6.87L839.05,406a15.85,15.85,0,0,1-9.36,2.56c-8.29,0-13.27-4.67-14.18-10.18a51.19,51.19,0,0,1-.37-7.47V367.25H826.9V388.3a53.42,53.42,0,0,0,.31,5.5c.52,4.08,2.63,6.49,7.24,6.49,4.82,0,8-4.15,8-11.54v-21.5h11.77Z"
                    transform="translate(-459.38 -350.59)"
                  />
                  <path
                    d="M906.17,386.49c0,14.48-8.82,22-19.15,22-3.32,0-7.32-.83-9.36-2.11L875,402.18v5.28H863.18V352H875v21.27l3-4.45c2.26-1.74,6.26-2.64,10.33-2.64C899.46,366.2,906.17,374.65,906.17,386.49Zm-12.14.75c0-7.92-3.85-12.9-9.43-12.9S875,377.66,875,386.87v1.8c0,8.68,4.68,11.7,9.2,11.7C890,400.37,894,396,894,387.24Z"
                    transform="translate(-459.38 -350.59)"
                  />
                </svg>
              </div>
            </router-link>
          </div>
        </div>
        <div class="sm:flex sm:justify-center sm:items-center">
          <div
            class="
              hidden
              sm:flex
              items-center
              justify-center
              sm:items-stretch sm:justify-end
            "
          >
            <div class="hidden sm:block sm:ml-6">
              <div class="flex">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  :id="item.id"
                  :class="[
                    `text-black dark:text-white sm:px-1 lg:px-3 mx-1 py-2 sm:text-xs lg:text-sm font-inter font-medium `,
                    isSodaSparc(item.id),
                    item.showOnDesktop ? '' : 'hidden',
                  ]"
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
              sm:static sm:inset-auto sm:ml-3 sm:pr-0
            "
          >
            <!-- Projects dropdown -->
            <Menu as="div" class="relative w-max hidden sm:block">
              <div>
                <MenuButton
                  class="flex text-sm justify-center items-center w-max"
                >
                  <div class="w-max flex justify-center items-center">
                    <span class="sr-only">Open user menu</span>
                    <div
                      class="
                        pr-2
                        py-2
                        w-max
                        flex
                        nav-bar-item
                        justify-center
                        items-center
                      "
                    >
                      <span
                        class="
                          flex
                          text-black
                          justify-center
                          dark:text-white
                          sm:px-1
                          lg:pr-3
                          sm:text-xs
                          lg:text-sm
                          font-inter font-medium
                        "
                        aria-hidden="true"
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
                          transition-colors
                          duration-200
                        "
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
                  <router-link to="/sodaforsparc">
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
                  <router-link to="/sodaforcovid">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-200',
                        ]"
                      >
                        SODA for Covid
                      </a>
                    </MenuItem>
                  </router-link>
                  <router-link to="/knowmore">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-200',
                        ]"
                      >
                        KnowMore
                      </a>
                    </MenuItem>
                  </router-link>
                  <router-link to="/sparclink">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-200',
                        ]"
                      >
                        SPARClink
                      </a>
                    </MenuItem>
                  </router-link>
                  <router-link to="/aqua">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-200',
                        ]"
                      >
                        AQUA
                      </a>
                    </MenuItem>
                  </router-link>
                </MenuItems>
              </transition>
            </Menu>

            <!-- dark mode toggle - hidden for now -->
            <div class="hidden items-center justify-center pl-4 pr-1">
              <div class="w-full max-w-xs mx-auto">
                <div as="div" class="flex items-center space-x-4">
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
                    v-slot="{ checked }"
                    @click="switchToDarkMode"
                    aria-label="Toggle dark mode"
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
                        rounded-full
                        relative
                      "
                      :class="{
                        'translate-x-1': checked,
                        'translate-x-0': !checked,
                      }"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="
                          w-5
                          h-5
                          text-lg text-gray-800
                          dark:text-white
                          transition-colors
                          duration-200
                          absolute
                        "
                        v-if="!switchValue"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="
                          w-5
                          h-5
                          text-lg text-gray-800
                          dark:text-white
                          transition-colors
                          duration-200
                        "
                        v-else
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        ></path>
                      </svg>
                    </span>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              hidden
              sm:flex
              items-center
              justify-center
              sm:items-stretch sm:justify-end
            "
          >
            <div class="hidden sm:block">
              <div class="flex">
                <router-link
                  to="/contactus"
                  class="
                    text-black
                    dark:text-white
                    sm:px-1
                    lg:px-3
                    mx-1
                    py-2
                    sm:text-xs
                    lg:text-sm
                    font-inter font-medium
                    nav-bar-item
                  "
                >
                  Contact Us
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu panel -->
    <div>
      <transition name="slidedown" appear>
        <DisclosurePanel
          v-show="open"
          static
          class="sm:hidden pt-16 fixed w-screen bg-white z-20 shadow-sm"
        >
          <div class="px-2 pt-2 pb-3 space-y-1 z-20">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="
                text-black
                font-inter
                block
                px-3
                py-2
                rounded-md
                text-base text-center
                font-medium
                z-20
                transition-all
                mobile-menu
                hover:bg-light-accent hover:text-white
              "
              @click="clickMenu"
            >
              {{ item.name }}
            </router-link>
          </div>
        </DisclosurePanel>
      </transition>
    </div>
  </Disclosure>
</template>

<script>
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

window.addEventListener("scroll", () => {
  const nav = document.querySelector("#navbar");
  if (window.pageYOffset > 0) {
    nav.classList.add("shadow-lg");
  } else {
    nav.classList.remove("shadow-lg");
  }
});

export default {
  name: "AppNavbar",
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
  watch: {
    $route() {
      if (this.$route.path.includes("sodaforsparc/docs")) {
        const nav = document.querySelector("#navbar");
        nav.classList.add("sm:shadow-sm");
      } else {
        const nav = document.querySelector("#navbar");
        nav.classList.remove("sm:shadow-sm");
      }
    },
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
    return {
      switchValue: false,
      checked: false,
      open: false,
      navigation: [
        { name: "Home", href: "/", id: "nav-home", showOnDesktop: true },
        {
          name: "Meet The Team",
          href: "/team",
          id: "nav-team",
          showOnDesktop: true,
        },
        {
          name: "SODA for SPARC",
          href: "/sodaforsparc",
          id: "nav-sodaforsparc",
          showOnDesktop: false,
        },
        {
          name: "KnowMore",
          href: "/knowmore",
          id: "nav-knowmore",
          showOnDesktop: false,
        },
        {
          name: "SPARClink",
          href: "/sparclink",
          id: "nav-sparclink",
          showOnDesktop: false,
        },
        { name: "AQUA", href: "/aqua", id: "nav-aqua", showOnDesktop: false },
        {
          name: "Contact Us",
          href: "/contactus",
          id: "nav-contactus",
          showOnDesktop: false,
        },
      ],
    };
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
    isSodaSparc: function (element) {
      if (
        this.$route.path.search("sodaforsparc") != -1 &&
        element === "nav-sodaforsparc"
      ) {
        return "border-b-2 border-light-accent  !important;";
      }
      return "nav-bar-item";
    },
    clickMenu: function () {
      this.open = false;
      document.querySelector("#headlessui-disclosure-button-1").click();
    },
  },
};
</script>

<style lang="postcss" scoped>
.nav-bar-item {
  @apply border-b-2 border-transparent hover:border-gray-400 dark:hover:border-gray-300 transition-all;
}

.slidedown-enter-active,
.slidedown-leave-active {
  transition: all 0.5s ease-out;
}

.slidedown-enter-to,
.slidedown-leave-from {
  transform: translateY(0px);
  opacity: 1;
}

.slidedown-enter-from,
.slidedown-leave-to {
  transform: translateY(-50vh);
  opacity: 0.8;
}
</style>
