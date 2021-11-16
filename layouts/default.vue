<template>
  <div>
    <Head>
      <Link rel="canonical" :href="`https://fairdataihub.org${$route.path}`" />
    </Head>
    <AppHeader />
    <main>
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
