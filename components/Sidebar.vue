<script setup>

const showDocs = ref(false);
const showGuides = ref(false);
const showAltScheme = ref(false);
const showEcomm = ref(false);

const toggleDocumentation = () => {
  showDocs.value = !showDocs.value;
};

const toggleGuides = () => {
  showGuides.value = !showGuides.value;
};

const toggleAltScheme = () => {
  showAltScheme.value = !showAltScheme.value;
};

const toggleE_commerce = () => {
  showEcomm.value = !showEcomm.value;
};

const isParentActive = (route) => {
  const currentRoute = useRoute().fullPath;
  return currentRoute === route || currentRoute.startsWith(route + '/');
};
</script>

<template>
  <nav
    class="hidden md:flex fixed top-10 bottom-0 py-2 px-4 bg-slate-50 dark:bg-slate-900 transition duration-500 z-40 w-[315px] xl:w-[475px] left-0 border-r dark:border-slate-700">
    <div class="overflow-y-auto h-full w-full">
    <div class="xl:mr-10">
      <ul class="mt-10 font-semibold text-neutral-600 text-base dark-text-white">
        <li :class="{ 'active-parent': isParentActive('/') }">
          <div class="flex items-center gap-x-2" @click="toggleDocumentation">
            <img src="/assets/images/Documentation.svg" alt="Documentation icon" />
            <nuxt-link to="/" class="cursor-pointer dark:text-white">Documentation</nuxt-link>
          </div>
          <ul
            class="ml-3.5 mt-2 text-base border-l pl-5 border-neutral-300 duration-500 ease-in-out dark:text-white dark:border-slate-700"
            v-show="!showDocs">
            <li class="mt-4">
              <nuxt-link to="/" exact-active-class="text-blue-500">Fundamentals</nuxt-link>
            </li>
            <li class=" mt-2">
              <nuxt-link to="#">Methods and Parameters</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link to="#">Merge Fields</nuxt-link>
              <ul class="mt-2">
                <li class="mt-2 cursor-pointer">
                  <Icon :name="showAltScheme ? 'ic:baseline-keyboard-arrow-down' : 'ic:baseline-keyboard-arrow-right'"
                    class="mr-2 text-gray-500" />
                  <span @click="toggleAltScheme">Alternative Scheme</span>
                  <ul
                    class="ml-2 mt-2 font-normal text-sm border-l border-neutral-300 duration-500 ease-in-out dark:border-slate-700"
                    v-show="showAltScheme">
                    <li class="mt-2 ml-6">
                      <nuxt-link to="#">File System</nuxt-link>
                    </li>
                    <li class="mt-2 ml-6">
                      <nuxt-link to="#">Describing
                        Responses</nuxt-link>
                    </li>
                  </ul>
                </li>
                <li class="mt-2 cursor-pointer">
                  <Icon :name="showEcomm ? 'ic:baseline-keyboard-arrow-down' : 'ic:baseline-keyboard-arrow-right'"
                    class="mr-2 text-gray-500" />
                  <span @click="toggleE_commerce">E-commerce</span>
                  <ul
                    class="ml-2 mt-3 font-normal text-sm border-l border-neutral-300 duration-500 ease-in-out dark:border-slate-700"
                    v-show="showEcomm">
                    <li class="mt-2 ml-6">
                      <nuxt-link to="#">Path Parameters</nuxt-link>
                    </li>
                    <li class="mt-2 ml-6">
                      <nuxt-link to="#">Query String
                        Parameters</nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="mt-2">
              <nuxt-link to="#">Account Exports</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link to="#">Integrations</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link to="#">Add a Contact</nuxt-link>
            </li>
          </ul>
        </li>
        <li :class="{ 'active-parent': isParentActive('/guides') }" class="mt-3">
          <div class="flex items-center gap-x-3" @click="toggleGuides">
            <img src="/assets/images/Guides.svg" alt="Documentation icon" />
            <nuxt-link to="/guides" class="cursor-pointer dark:text-white">Guides/Tutorials</nuxt-link>
          </div>
          <ul
            class="ml-3.5 mt-2 text-base border-l border-neutral-300 pl-5 duration-500 ease-in-out dark:border-slate-700 dark:text-white"
            v-show="showGuides">
            <li class="mt-4">
              <nuxt-link to="/guides" exact-active-class="text-blue-500">Marketing API Quick Start</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link to="#">Create an Account</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link to="#">Generate your API Key</nuxt-link>
            </li>
          </ul>
        </li>
        <li :class="{ 'active-parent': isParentActive('/support') }" class="mt-3">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-x-3 dark:text-white">
              <img src="/assets/images/Documentation.svg" alt="Documentation icon" />
              <nuxt-link to="/support">Help/Support</nuxt-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </nav>
</template>

<style scoped>
.active-parent>div {
  background: linear-gradient(to left, lightpink, lightblue);
  padding: 0.5rem;
  border-radius: 0.5rem;
}
</style>