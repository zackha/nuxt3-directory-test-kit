<template>
  <div>
    <h1>Register page</h1>
    <NuxtLink to="/">index</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  layoutTransition: {
    name: 'slide-in'
  }
})
</script>
