<template>
  <div style="color: #ff0000;">{{ `<login>` }}
   <NuxtLink to="/register">register</NuxtLink>{{ `<login>` }}
  </div>
</template>

<script>
definePageMeta({
  layout: "auth",
});
</script>