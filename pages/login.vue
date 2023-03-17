<template>
  <div>
    <h1>Login page</h1>
    <NuxtLink to="/register">register</NuxtLink>
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
