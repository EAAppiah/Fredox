<template>
  <!-- Page content -->
  <main class="dark:bg-slate-900 overflow-hidden px-4 ml-0 md:ml-[315px] xl:ml-[500px]">
    <div class="max-w-3xl w-full lg:w-[95%] flex flex-col mt-2 px-0 lg:px-8">

      <div>
        <img class="absolute inset-0 -z-50" src="../assets/images/Illustrator.svg" alt="Hero Image" width=1972
          height=392 />
      </div>

      <!-- Page header -->
      <div class="flex items-center gap-x-4 my-5">
        <img src="/assets/images/support_page.svg" alt="Documentation Logo" />
        <span class="text-xl font-sans italic text-blue-500 tracking-wide">
          Help / Support
        </span>
      </div>

      <article>
        <!-- Main area -->
        <div>
          <!-- Mobile hamburger + breadcrumbs -->
          <div class="flex md:hidden items-center gap-x-4 mt-6">

            <!-- Mobile Sidebar Overlay -->
            <div v-if="isSidebarOpen" class="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 md:hidden">
              <!-- Mobile Sidebar -->
              <nav :class="{ '-translate-x-full': !isSidebarOpen }"
                class="fixed md:hidden py-2 px-4 bg-slate-50 dark:bg-slate-900 transition-transform duration-300 ease-in-out z-50 h-screen w-[280px] left-0 border-r overflow-y-auto dark:border-slate-700">
                <div class="flex justify-end">
                  <button @click="closeSidebar"
                    class="p-2 text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-white">
                    <Icon name="mdi:close" class="w-6 h-6" />
                  </button>
                </div>
                <div>
                  <ul class="mt-6 font-semibold text-neutral-600 text-base dark-text-white">
                    <li :class="{ 'active-parent': isParentActive('/') }">
                      <div class="flex items-center gap-x-2" @click="toggleDocumentation">
                        <img src="/assets/images/Documentation.svg" alt="Documentation icon" />
                        <span class="cursor-pointer dark:text-white">Documentation</span>
                        <Icon :name="showDocs ? 'ic:baseline-keyboard-arrow-down' : 'ic:baseline-keyboard-arrow-right'"
                          class="text-gray-500" />
                      </div>
                      <ul
                        class="ml-3.5 mt-2 text-base border-l-2 pl-5 border-neutral-300 duration-500 ease-in-out dark:text-white dark:border-slate-700"
                        v-show="showDocs">
                        <li class="mt-4">
                          <nuxt-link to="/" exact-active-class="text-blue-500">Fundamentals</nuxt-link>
                        </li>
                        <li class="mt-2">
                          <nuxt-link to="#">Methods and Parameters</nuxt-link>
                        </li>
                        <li class="mt-2">
                          <nuxt-link to="#">Merge Fields</nuxt-link>
                          <ul class="mt-2 ml-2">
                            <li class="mt-2 cursor-pointer">
                              <span @click="toggleAltScheme" class="flex items-center">
                                <Icon
                                  :name="showAltScheme ? 'ic:baseline-keyboard-arrow-down' : 'ic:baseline-keyboard-arrow-right'"
                                  class="mr-2 text-gray-500" />
                                Alternative Scheme
                              </span>
                              <ul v-show="showAltScheme" class="ml-6 mt-2 font-normal text-sm">
                                <li class="mt-2"><nuxt-link to="#">File System</nuxt-link></li>
                                <li class="mt-2"><nuxt-link to="#">Describing Responses</nuxt-link></li>
                              </ul>
                            </li>
                            <li class="mt-2 cursor-pointer">
                              <span @click="toggleE_commerce" class="flex items-center">
                                <Icon
                                  :name="showEcomm ? 'ic:baseline-keyboard-arrow-down' : 'ic:baseline-keyboard-arrow-right'"
                                  class="mr-2 text-gray-500" />
                                E-commerce
                              </span>
                              <ul v-show="showEcomm" class="ml-6 mt-2 font-normal text-sm">
                                <li class="mt-2"><nuxt-link to="#">Path Parameters</nuxt-link></li>
                                <li class="mt-2"><nuxt-link to="#">Query String Parameters</nuxt-link></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <!-- More Documentation sub-items... -->
                      </ul>
                    </li>
                    <li :class="{ 'active-parent': isParentActive('/guides') }" class="mt-3">
                      <div class="flex items-center gap-x-3" @click="toggleGuides">
                        <img src="/assets/images/Guides.svg" alt="Guides icon" />
                        <span class="cursor-pointer dark:text-white">Guides/Tutorials</span>
                        <Icon
                          :name="showGuides ? 'ic:baseline-keyboard-arrow-down' : 'ic:baseline-keyboard-arrow-right'"
                          class="text-gray-500" />
                      </div>
                      <ul v-show="showGuides"
                        class="ml-3.5 mt-2 text-base border-l-2 border-neutral-300 pl-5 duration-500 ease-in-out dark:border-slate-700 dark:text-white">
                        <li class="mt-4">
                          <nuxt-link to="/guides" exact-active-class="text-blue-500">Marketing API Quick
                            Start</nuxt-link>
                        </li>
                        <!-- More Guides sub-items... -->
                      </ul>
                    </li>
                    <li :class="{ 'active-parent': isParentActive('/support') }" class="mt-3">
                      <div class="flex items-center gap-x-3 dark:text-white">
                        <img src="/assets/images/Documentation.svg" alt="Support icon" />
                        <nuxt-link to="/support">Help/Support</nuxt-link>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <!-- Hamburger button -->
            <div>
              <Icon
                name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger"
                class="text-primaryDark dark:text-slate-400 cursor-pointer" @click="toggleSidebar" />
            </div>
            <!-- Breadcrumbs -->
            <div>
              <span class="text-secondaryDark font-extra-light dark:text-slate-400">Help / Support</span>
            </div>
          </div>

          <!-- Article content -->
          <div>
            <header class="mt-5">
              <h1 class="text-4xl md:text-5xl font-bold mb-4 text-primaryDark tracking-wide dark:text-white">How can we
                help?</h1>
              <p class="text-lg text-secondaryDark dark:text-slate-400">Everything you need to know right here at your
                fingertips. Ask
                questions, browse
                around for answers, or submit your feature requests.</p>
            </header>

            <div>

              <!-- Faqs section -->
              <div class="">
                <!-- OVERVIEW -->
                <section class="mb-5">
                  <h3 id="overview"
                    class="text-lg md:text-2xl font-bold my-5 text-primaryDark tracking-wide dark:text-white">
                    Overview
                  </h3>
                  <ul v-if="items.length" class="mt-2 rounded-md">
                    <li v-for="(item, index) in items" :key="index" class="pl-0">
                      <button
                        class="w-full flex justify-between items-start py-1.5 text-left transition-colors duration-200"
                        @click="toggleOverviewItem(index)">
                        <div class="flex items-center space-x-2">
                          <Icon :class="{ 'transform rotate-90': item.isOpen }" name="ic:baseline-keyboard-arrow-right"
                            class="text-primaryDark transition-transform duration-200 dark:text-slate-400" />
                          <span class="text-base md:text-lg font-semibold text-primaryDark dark:text-slate-200">{{
                            item.title }}</span>
                        </div>
                      </button>
                      <div v-show="item.isOpen" class="pb-4 px-6">
                        <p class="text-base text-secondaryDark dark:text-slate-400">
                          {{ item.content }}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div v-else class="text-center py-8">Loading...</div>
                </section>

                <!-- SUPPORT -->
                <section class="my-5">
                  <h3 id="support"
                    class="text-lg md:text-2xl font-bold my-5 text-primaryDark tracking-wide dark:text-white">
                    Support
                  </h3>
                  <ul v-if="supports.length" class="mt-2 rounded-md">
                    <li v-for="(support, index) in supports" :key="index" class="pl-0">
                      <button
                        class="w-full flex justify-between items-center py-1.5 text-left transition-colors duration-200"
                        @click="toggleSupportItem(index)">
                        <div class="flex items-center space-x-2">
                          <Icon :class="{ 'transform rotate-90': support.isOpen }"
                            name="ic:baseline-keyboard-arrow-right"
                            class="text-primaryDark transition-transform duration-200 dark:text-slate-400" />
                          <span class="text-base md:text-lg font-semibold text-primaryDark dark:text-slate-200">{{
                            support.title }}</span>
                        </div>
                      </button>
                      <div v-show="support.isOpen" class="px-6 pb-4">
                        <p class="text-base text-secondaryDark dark:text-slate-400">
                          {{ support.content }}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div v-else class="text-center py-8">Loading...</div>
                </section>

                <!-- SERVICE & PRIVACY -->
                <section class="my-5">
                  <h3 id="security"
                    class="text-lg md:text-2xl font-bold my-5 text-primaryDark tracking-wide dark:text-white">
                    Security & Privacy
                  </h3>
                  <ul v-if="securities.length" class="mt-2 rounded-md">
                    <li v-for="(security, index) in securities" :key="index" class="pl-0">
                      <button
                        class="w-full flex justify-between items-center py-1.5 text-left transition-colors duration-200"
                        @click="toggleSecurityItem(index)">
                        <div class="flex items-center space-x-2">
                          <Icon :class="{ 'transform rotate-90': security.isOpen }"
                            name="ic:baseline-keyboard-arrow-right"
                            class="text-primaryDark transition-transform duration-200 dark:text-slate-400" />
                          <span class="text-base md:text-lg font-semibold text-primaryDark dark:text-slate-200">{{
                            security.title }}</span>
                        </div>
                      </button>
                      <div v-show="security.isOpen" class="px-4 pb-4">
                        <p class="text-base text-secondaryDark dark:text-slate-400">
                          {{ security.content }}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div v-else class="text-center py-8">Loading...</div>
                </section>

                <!-- TROUBLESHOOTING -->
                <section class="my-5">
                  <h3 id="troubleshooting"
                    class="text-lg md:text-2xl font-bold my-5 text-primaryDark tracking-wide dark:text-white">
                    Troubleshooting
                  </h3>
                  <ul v-if="troubleshootings.length" class="mt-2 rounded-md">
                    <li v-for="(troubleshooting, index) in troubleshootings" :key="index" class="pl-0">
                      <button
                        class="w-full flex justify-between items-center py-1.5 text-left transition-colors duration-200"
                        @click="toggleTroubleshootingItem(index)">
                        <div class="flex items-center space-x-2">
                          <Icon :class="{ 'transform rotate-90': troubleshooting.isOpen }"
                            name="ic:baseline-keyboard-arrow-right"
                            class="text-primaryDark transition-transform duration-200 dark:text-slate-400" />
                          <span class="text-base md:text-lg font-semibold text-primaryDark dark:text-slate-200">{{
                            troubleshooting.title
                          }}</span>
                        </div>
                      </button>
                      <div v-show="troubleshooting.isOpen" class="px-6 pb-4">
                        <p class="text-base text-secondaryDark dark:text-slate-400">
                          {{ troubleshooting.content }}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div v-else class="text-center py-8">Loading...</div>
                </section>
              </div>

            </div>
          </div>

          <!-- Content footer -->
          <footer class="my-10">
            <div
              class="flex flex-col items-center md:flex-row md:items-center md:justify-between border-t border-gray-300 pt-5 dark:border-slate-700">
              <div class="md:mr-4">
                <div class="flex flex-col items-center md:flex-row">
                  <!-- Logo -->
                  <nuxt-link to="/" aria-label="Fredox">
                    <img src="/assets/images/Capacitor.svg" width="32" height="32" class="dark:invert"
                      alt="Fredox Logo">
                  </nuxt-link>
                  <div class="text-secondaryDark my-2 md:ml-4 dark:text-slate-400">Copyright © Cruip<span>. All rights
                      reserved.</span></div>
                </div>
              </div>
              <!-- Social links -->
              <ul class="flex items-center justify-center space-x-6 mt-4 md:mt-0">
                <li>
                  <a class="text-blue-700" href="#" aria-label="Twitter">
                    <Icon name="fa6-brands:x-twitter" class="text-xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a class="text-blue-700" href="#" aria-label="Github">
                    <Icon name="bi:github" class="text-xl" />
                  </a>
                </li>
                <li>
                  <a class="text-blue-700" href="#" aria-label="Telegram">
                    <Icon name="file-icons:telegram" class="text-xl" />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>

        <!-- Secondary navigation -->
        <nav
          class="hidden lg:block fixed top-1/2 right-6 transform -translate-y-1/2 w-64 rounded-lg p-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div class="relative">
            <!-- Slim scrollbar on the left side -->
            <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-neutral-700 rounded-full"></div>
            <div class="absolute left-0 top-0 w-0.5 h-5 bg-blue-500 rounded-full transition-all duration-300"
              id="scrollIndicator"></div>

            <div class="pl-4">
              <div class="text-sm font-bold text-gray-400 dark:text-white mb-4 uppercase">On this page</div>
              <ul class="space-y-3">
                <li>
                  <a href="#overview" :class="{ 'text-blue-600': isLinkActive('overview') }"
                    @click.prevent="scrollToSection('overview')"
                    class="block text-primaryDark text-sm hover:text-blue-600 transition-colors dark:text-slate-400">Overview</a>
                </li>
                <li>
                  <a href="#support" :class="{ 'text-blue-600': isLinkActive('support') }"
                    @click.prevent="scrollToSection('support')"
                    class="block text-primaryDark text-sm hover:text-blue-600 transition-colors dark:text-slate-400">Support</a>
                </li>
                <li>
                  <a href="#security" :class="{ 'text-blue-600': isLinkActive('security') }"
                    @click.prevent="scrollToSection('security')"
                    class="block text-primaryDark text-sm hover:text-blue-600 transition-colors dark:text-slate-400">Security
                    &amp;
                    Privacy</a>
                </li>
                <li>
                  <a href="#troubleshooting" :class="{ 'text-blue-600': isLinkActive('troubleshooting') }"
                    @click.prevent="scrollToSection('troubleshooting')"
                    class="block text-primaryDark text-sm hover:text-blue-600 transition-colors dark:text-slate-400">Troubleshooting</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </article>

    </div>

  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useScrollTracker } from '@/composable/useScrollTracker';

// SMOOTH SCROLL & TRACKER
const { activeSection, isLinkActive, scrollToSection } = useScrollTracker();

const route = useRoute();

// SIDEBAR TOGGLERS
const isSidebarOpen = ref(false)
const toggleSidebar = () => (isSidebarOpen.value = !isSidebarOpen.value)
const closeSidebar = () => (isSidebarOpen.value = false)

// ACTIVE LISTS LINK
const isParentActive = (path) => route.fullPath === path || route.fullPath.startsWith(`${path}/`)

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

// LIST TOGGLE
const toggleItem = (list, index) => {
  if (list && list.value && list.value[index]) {
    list.value[index].isOpen = !list.value[index].isOpen;
  }
};

const toggleOverviewItem = (index) => toggleItem(items, index);
const toggleSupportItem = (index) => toggleItem(supports, index);
const toggleSecurityItem = (index) => toggleItem(securities, index);
const toggleTroubleshootingItem = (index) => toggleItem(troubleshootings, index);


const items = ref([
  {
    title: 'Does Docs support other data sources, like Excel or Airtable?',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  },
  {
    title: 'Can I collaborate on campaigns with others?',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  },
  {
    title: 'Will you help me build my campaign?',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  },
  {
    title: 'How can I become a partner?',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  },
]);

const supports = ref([
  {
    title: 'How can I talk to someone at Docs?',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  },
  {
    title: 'Why should I connect my clients?',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  },
  {
    title: 'Can I collaborate on campaigns with others?',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  },
  {
    title: 'Is Glide Docs and CCPA compliant?',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  }
]);

const securities = ref([
  {
    title: 'What are Private Users of Private Pro campaigns?',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  },
  {
    title: 'Does Docs sell or share the content of my campaigns with third parties?',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  },
  {
    title: 'What access does Docs have to my campaigns?',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  }
]);

const troubleshootings = ref([
  {
    title: 'An error occurred deleting my campaign',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  },
  {
    title: 'Something went wrong adding the webhook',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  },
  {
    title: 'Something went wrong updating your payment information',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  },
  {
    title: "Something went wrong trying to delete that user's data",
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  },
  {
    title: 'Something went wrong replacing the campaign',
    content: 'There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look. If you are going to use a passage of Lorem Ipsum.',
    isOpen: false,
  }
]);

</script>


<style scoped>
section h3 {
  scroll-margin-top: 100px;
  /* Adjust this value to match your navbar's height plus any extra space you want */
}

.active-parent>div {
  background: linear-gradient(to left, lightpink, lightblue);
  padding: 0.5rem;
  border-radius: 0.5rem;
}
</style>
