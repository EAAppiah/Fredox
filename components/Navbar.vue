<template>
  <nav class="sticky top-0 w-full py-4 bg-white bg-opacity-80 z-50 backdrop-blur-md border-b">
    <div class="w-[90%] max-w-7xl mx-auto flex justify-between">
      <div class="flex items-center gap-x-4">
        <nuxt-link to="/">
          <img src="../assets/images/Capacitor.svg" alt="X-lab Logo" width=40 height=40 quality=100 />
        </nuxt-link>
        <SearchForm />
      </div>
      <div class="flex justify-end items-center gap-x-4">
        <button type="button"
          class="text-white text-md font-bold bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-4 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Support
        </button>
        <div>
          <Theme />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>


</script>
