<template>
  <div>
    <pre>default layout</pre>
    <slot />
  </div>
</template>

<style>
.layout-left-enter-active,
.layout-right-enter-active,
.layout-left-leave-active,
.layout-right-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 500ms linear;
}

.layout-left-enter-from, .layout-right-leave-to {
  transform: translateX(100%);
}

.layout-left-leave-to, .layout-right-enter-from {
  transform: translateX(-100%);
}

.layout-left-enter-to, .layout-right-enter-to {
  transform: translateX(0);
}
</style>