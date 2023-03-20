<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">

@keyframes fadeIn {
  0% {opacity: 0.001}
  100% {opacity: 1}
}

@keyframes fadeOut {
  0% {opacity: 1}
  100% {opacity: 0.001}
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 250ms;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}
.layout-enter-active {
  animation-duration: 250ms;
  animation-name: fadeIn;
  animation-timing-function: linear;
  backface-visibility: hidden;
}
.layout-leave-active {
  animation-name: fadeOut;
  animation-duration: 0.25s;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 250ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.page-enter-active {
  animation-duration: 250ms;
  animation-name: fadeIn;
  animation-timing-function: linear;
  backface-visibility: hidden;
}
.page-leave-active {
  animation-name: fadeOut;
  animation-duration: 0.25s;
}
</style>
