<template>
  <nav
    class="sticky top-0 w-full py-3 md:py-4 bg-white bg-opacity-80 z-50 backdrop-blur-md border-b dark:bg-slate-900 dark:border-slate-700">
    <div class="w-[90%] max-w-7xl mx-auto flex justify-between">
      <div class="flex items-center gap-x-4">
        <nuxt-link to="/">
          <img src="../assets/images/Capacitor.svg" alt="X-lab Logo" width=40 height=40 quality=100
            class="dark:invert" />
        </nuxt-link>
        <SearchForm />
      </div>
      <div class="flex justify-end items-center gap-x-4">
        <button type="button"
          class="text-white font-bold ml-2 bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-4 py-2.5 md:py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Support
        </button>
        <div>
          <ModeSwitch />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// const darkMode = ref(false);
// const osTheme = ref('light');

// const IconName = computed(() => {

//   return darkMode.value ? 'material-symbols:dark-mode' : 'material-symbols:light-mode';
// })

// const toggleDarkMode = () => {
//   darkMode.value = !darkMode.value;
//   updateHTMLElementClass();
// }

// const getOSTheme = () => {
//   if (windows.matchMedia('(prefers-color-scheme: dark)').matches) {
//     return 'dark';
//   }
//   return 'light';
// };

// const updateHTMLElementClass = () => {
//   const htmlElement = document.documentElement;
//   if (osTheme.value === 'dark' || darkMode.value) {
//     htmlElement.classList.add('dark');
//   } else {
//     htmlElement.classList.remove('dark');
//   }
// };

// onMounted(() => {
//   osTheme.value = getOSTheme();
//   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
//     osTheme.value = getOSTheme();
//     updateHTMLElementClass();
//   });
// });

// watch([osTheme, darkMode], () => {
//   updateHTMLElementClass();
// })
</script>
