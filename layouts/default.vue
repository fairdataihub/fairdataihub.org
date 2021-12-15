<template>
  <div>
    <Html>
      <Head>
        <Link
          rel="canonical"
          :href="`https://fairdataihub.org${$route.path}`"
        />
      </Head>
    </Html>
    <AppHeader />
    <main>
      <slot />
    </main>

    <AppFooter />
    <AppFooter2 />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
