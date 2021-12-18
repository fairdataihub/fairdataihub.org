<template>
  <div>
    <Html>
      <Head>
        <Title>
          Issues regarding hidden files or folders - SODA for SPARC
        </Title>
      </Head>
    </Html>

    <base-docs-title :title="`Issues regarding hidden files or folders`">
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          There are some issues related to hidden files and folders that SODA
          users have experienced. If you get any errors caused by hidden file(s)
          or folder(s) and do not know how to find them, it is very likely that
          such file(s) or folder(s) are hidden on your computer.
        </p>
      </div>

      <base-docs-subtitle> Solution </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          To learn about how to show hidden files and folders, please visit the
          link below for your Operating system:
        </p>
      </div>

      <ul class="docs-ul list-outside list-disc">
        <li>
          <a
            href="https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-10-97fbc472-c603-9d90-91d0-1166d1d9f4b5#:~:text=Open%20File%20Explorer%20from%20the,folders%2C%20and%20drives%20and%20OK."
            target="_blank"
            rel="noopener"
            class="hover:underline text-blue-600"
          >
            Windows users
          </a>
        </li>
        <li>
          <a
            href="https://www.ionos.com/digitalguide/server/configuration/showing-hidden-files-on-a-mac/#:~:text=Keyboard%20shortcuts%20are%20probably%20the,keys%20at%20the%20same%20time."
            target="_blank"
            rel="noopener"
            class="hover:underline text-blue-600"
          >
            macOS users
          </a>
        </li>
        <li>
          <a
            href="https://help.ubuntu.com/stable/ubuntu-help/files-hidden.html.en#:~:text=If%20you%20want%20to%20see,files%20that%20are%20not%20hidden."
            target="_blank"
            rel="noopener"
            class="hover:underline text-blue-600"
          >
            Ubuntu users
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: "docs",
  scrollToTop: true,
};
</script>
