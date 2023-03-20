<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
.layout-enter-active,
.layout-leave-active,
.page-enter-active,
.page-leave-active {
  transition: opacity 250ms;
}
.layout-enter-from,
.layout-leave-to,
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
