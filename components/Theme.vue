<template>
  <div>
    <Icon :name="IconName" size=1.5em class="text-blue-500 cursor-pointer" @click="toggleDarkMode" />
  </div>
</template>


<script setup>

const darkMode = ref(false);

const IconName = computed(() => {

  return darkMode.value ? 'material-symbols:dark-mode' : 'material-symbols:light-mode';
})

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
}
</script>
