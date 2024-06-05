<template>
  <Navbar />
  <Sidebar class="hidden lg:flex" />
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'Fredox',
  meta: [
    { name: 'description', content: 'Free documentation for my application' }
  ],
})
</script>