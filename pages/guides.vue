<template>
  <!-- Page container -->
  <main class="dark:bg-slate-900 overflow-hidden px-4 ml-0 md:ml-[315px] xl:ml-[500px]">
    <div class="max-w-3xl w-full lg:w-[95%] flex flex-col mt-2 px-0 lg:px-8">
      <div>
        <img class="absolute inset-0 -z-50" src="../assets/images/Illustrator.svg" alt="Hero Image" width=2000
          height=392 />
      </div>
      <!-- Page header -->
      <div class="flex items-center gap-x-4 my-5">
        <img src="/assets/images/guides_page.svg" alt="Documentation Logo" />
        <span class="text-xl font-sans italic text-purple-500 tracking-wide">
          Guides / Tutorials
        </span>
      </div>

      <!-- Main area -->

      <article>
        <!-- Mobile hamburger + breadcrumbs -->
        <div class="flex md:hidden items-center gap-x-4 mt-6">

          <!-- Mobile Sidebar Overlay -->
          <div v-if="isSidebarOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
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
                      <Icon :name="showGuides ? 'ic:baseline-keyboard-arrow-down' : 'ic:baseline-keyboard-arrow-right'"
                        class="text-gray-500" />
                    </div>
                    <ul v-show="showGuides"
                      class="ml-3.5 mt-2 text-base border-l-2 border-neutral-300 pl-5 duration-500 ease-in-out dark:border-slate-700 dark:text-white">
                      <li class="mt-4">
                        <nuxt-link to="/guides" exact-active-class="text-blue-500">Marketing API Quick Start</nuxt-link>
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
            <span class="text-primaryDark font-extra-light dark:text-slate-400">Guides / <span
                class="font-semibold">Marketing API Quick
                Start</span></span>
          </div>
        </div>

        <!-- Article content -->
        <div>
          <header class="mt-5">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-primaryDark dark:text-white">Marketing API Quick Start
            </h1>
            <p class="text-lg text-secondaryDark dark:text-slate-400">This guide will give you everything you need to
              start using the Docs
              Marketing API to manage audiences, control automation workflows, sync email activity with your database,
              and more.</p>
          </header>

          <div>

            <!-- AT A GLANCE -->
            <section>
              <div class="">
                <h2 id="at-a-glance" class="text-2xl font-bold mt-5 mb-4 text-primaryDark dark:text-white">At a glance
                </h2>
                <p class="text-lg text-secondaryDark dark:text-slate-400">
                  We'll walk through generating your API key, installing the client library for your preferred
                  language, and making your first API call—a simple request to the Ping endpoint.
                </p>
              </div>
            </section>

            <!-- GENERATE API -->
            <section>
              <h2 id="generate-api" class="text-2xl font-bold my-5 text-primaryDark dark:text-white">Generate your API
                key
              </h2>
              <p class="text-lg text-secondaryDark dark:text-slate-400">
                The simplest way to authenticate a request to the Marketing API is using an <a
                  class="text-blue-600 font-semibold hover:underline" href="#0">API key</a>.
              </p>
              <ul class="text-lg my-3 dark:text-slate-400">
                <li><span class="text-secondaryDark gap-x-2 dark:text-slate-400">↳</span> Navigate to the API Keys
                  section of your Docs
                  account.
                </li>
                <li><span class="text-secondaryDark gap-x-2 dark:text-slate-400">↳</span> If you already have an API key
                  listed to use for
                  your
                  application, simply copy it.</li>
              </ul>
              <p class="text-lg text-secondaryDark dark:text-slate-400">
                Let's see an example:
              </p>

              <!-- Image vith modal video -->
              <div>
                <div class="p-1 my-5">
                  <img class="rounded-md" src="/assets/images/content-image-01.jpg" width="680" height="382"
                    alt="Content image 01">
                </div>
              </div>
              <p class="text-lg text-secondaryDark dark:text-slate-400">
                If you're creating integrations that require access to Mailchimp on behalf of other Docs users,
                you'll want to <a class="text-blue-600 font-semibold hover:underline" href="#0">set up authentication
                  via Oauth 2</a> instead.
              </p>
            </section>

            <!-- INSTALL CLIENT LIBRARY -->
            <section>
              <h2 id="install" class="text-2xl font-bold my-4 text-primaryDark dark:text-white">Install the client
                library
                for your language</h2>
              <p class="text-lg text-secondaryDark dark:text-slate-400">
                You can make calls to the Marketing API with whichever method you usually use to make HTTP requests,
                but Docs offers client libraries that make interacting with the API even simpler.
              </p>
              <p class="text-lg text-secondaryDark my-4 dark:text-slate-400">
                To install the client library for your preferred language:
              </p>
              <div class="my-5 p-1">
                <img class="rounded-md" src="/assets/images/content-image-02.jpg" width="680" height="382"
                  alt="Content image 02">
              </div>
            </section>

            <!-- MAKE YOUR FIRST API CALL -->
            <section>
              <h2 id="api-call" class="text-2xl font-bold mt-5 mb-4 text-primaryDark dark:text-white">Make your first
                API call
              </h2>
              <p class="text-lg text-secondaryDark dark:text-slate-400">
                To test that you have everything set up correctly, we'll make a simple request to the Ping endpoint.
                Hitting this endpoint acts as a health check on the Docs API service; it won't affect your account
                in any way.
              </p>
              <p class="text-lg text-secondaryDark my-4 dark:text-slate-400">
                To find the value for the server parameter used in <span
                  class="font-semibold text-black underline dark:text-white">docs.setConfig</span>, log into your Docs
                account and look
                at the
                URL in your browser. You'll see something like <span
                  class="font-semibold text-black underline dark:text-white">https://us19.admin.docs.com/</span>; the
                us19 part is the
                server
                prefix. Note that your specific value may be different.
              </p>
              <pre
                class="px-4 bg-[#1E293B] border rounded-md text-gray-400 whitespace-pre-line my-2 dark:border-slate-700">

                <code class="">
                  # install jq: https://docs.github.io/jq/download/

                <span class="text-green-500">dc</span><span class="text-orange-500">=</span><span class="text-purple-600">"YOUR_DC"</span>

                <span class="text-green-500">apikey</span><span class="text-orange-500">=</span><span class="text-purple-600">"YOUR_API_KEY"</span>

                <span class="text-green-500">curl</span> -sS \

                <span class="text-purple-600">"https://</span><span class="text-green-500">${dc}</span><span class="text-purple-600">.api.docs.com/3.0/ping"</span> \

                --user <span class="text-purple-600">"anystring:</span><span class="text-green-500">${apikey}</span><span class="text-purple-600">"</span> <span class="text-orange-500">|</span> jq -r</code>

      </pre>
              <p class="text-lg text-secondaryDark my-4 dark:text-slate-400">
                If everything was set up correctly and the request to <span
                  class="font-semibold text-black underline dark:text-white">ping</span>
                was a success, the response should look like the
                following:
              </p>
            </section>

            <!-- CONFIGURATION STATUS -->
            <section>
              <h2 id="config-status" class="text-2xl font-bold mt-5 mb-4 text-primaryDark dark:text-white">Configuration
                status
              </h2>
              <p class="text-lg text-secondaryDark my-4 dark:text-slate-400">
                There are a number of configuration status which are explained in detail in this article. Below is
                an index of all configuration status:
              </p>
              <!-- Table -->
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
                  <!-- Table header -->
                  <thead class="dark:text-white">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-base font-medium tracking-wider">
                        Status
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-base font-medium tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <!-- Table body -->
                  <tbody class="bg-white dark:bg-[#0F172A] divide-y divide-gray-200 dark:divide-slate-700">
                    <!-- Row -->
                    <tr>
                      <td
                        class="px-4 py-4 whitespace-nowrap text-base font-medium md:text-lg text-gray-900 border-b dark:border-slate-700">
                        <div
                          class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                          Subscribed
                        </div>
                      </td>
                      <td
                        class="px-6 py-4 whitespace-normal text-sm md:text-lg text-gray-500 border-b dark:text-slate-400 dark:border-slate-700">
                        The contact is subscribed to the list and can receive campaigns.
                      </td>
                    </tr>
                    <!-- Row -->
                    <tr>
                      <td
                        class="px-4 py-4 whitespace-nowrap text-base font-medium md:text-lg text-gray-900 border-b dark:border-slate-700">
                        <div
                          class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800">
                          Unsubscribed
                        </div>
                      </td>
                      <td
                        class="px-6 py-4 whitespace-normal text-sm md:text-lg text-gray-500 border-b dark:text-slate-400 dark:border-slate-700">
                        The contact is no longer subscribed to the list.
                      </td>
                    </tr>
                    <!-- Row -->
                    <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-base font-medium md:text-lg text-gray-900 border-b dark:border-slate-700">
                        <div
                          class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
                          Cleaned
                        </div>
                      </td>
                      <td
                        class="px-6 py-4 whitespace-normal text-sm md:text-lg text-gray-500 border-b dark:text-slate-400 dark:border-slate-700">
                        The contact bounced and was removed from the list.
                      </td>
                    </tr>
                    <!-- Row -->
                    <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium md:text-lg text-gray-900 border-b dark:border-slate-700">
                        <div
                          class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
                          Pending
                        </div>
                      </td>
                      <td
                        class="px-6 py-4 whitespace-normal text-sm md:text-lg text-gray-500 border-b dark:text-slate-400 dark:border-slate-700">
                        The contact has not yet confirmed their subscription.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-lg text-secondaryDark my-4 dark:text-slate-400">
                To test that you have everything set up correctly, we'll make a simple request to the Ping endpoint.
                Hitting this endpoint acts as a health check on the Docs API service; it won't affect your account
                in any way.
              </p>
              <p class="text-lg text-secondaryDark my-4 dark:text-slate-400">
                HTTP requests are the backbone of the internet. Without them, we wouldn't be able to communicate
                with web servers and load the pages we see in our browser.
              </p>
              <p class="text-lg text-secondaryDark my-4 dark:text-slate-400">
                This library is available on most Unix-like systems, and can be used to make HTTP requests to any
                HTTP server.
              </p>
            </section>
          </div>
        </div>

        <!-- Feedback -->
        <div class="my-8 flex justify-between items-center border-b border-gray-300 pb-8 dark:border-slate-700">
          <div class="text-lg font-bold text-primaryDark dark:text-white">Was this helpful?</div>
          <div class="space-x-2">
            <button class="c23m4">
              <!-- <span class="ceq6q">No, it didn't help</span> -->
              <img src="/assets/images/feedback-01.svg" width="21" height="21" alt="No, it didn't help">
            </button>
            <button class="c23m4">
              <!-- <span class="ceq6q">Still feel confused</span> -->
              <img src="/assets/images/feedback-02.svg" width="21" height="21" alt="Still feel confused">
            </button>
            <button>
              <!-- <span class="ceq6q">Sounds good!</span> -->
              <img src="/assets/images/feedback-03.svg" width="21" height="21" alt="Sounds good!">
            </button>
            <button class="c23m4">
              <!-- <span class="ceq6q">Excellent article</span> -->
              <img src="/assets/images/feedback-04.svg" width="21" height="21" alt="Excellent article">
            </button>
          </div>
        </div>

        <!-- Page navigation -->
        <div class="my-4">
          <!-- Next link -->
          <div class="mb-4 pb-6 border-b border-gray-300 flex justify-end dark:border-slate-700">
            <div>
              <div class="text-blue-600 font-bold uppercase text-sm">Next</div>
              <div>
                <nuxt-link class="flex items-center text-base text-primaryDark font-bold space-x-2 dark:text-slate-400"
                  href="#0">
                  <span>Create an account</span>
                  <svg class="cursor-pointer" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" fill="#5D697B"></path>
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Content footer -->
        <footer class="my-10">
          <div class="flex flex-col items-center md:flex-row md:items-center md:justify-between">
            <div class="md:mr-4">
              <div class="flex flex-col items-center md:flex-row">
                <!-- Logo -->
                <nuxt-link to="/" aria-label="Fredox">
                  <img src="/assets/images/Capacitor.svg" width="32" height="32" class="dark:invert" alt="Fredox Logo">
                </nuxt-link>
                <div class="text-secondaryDark my-2 md:ml-4 dark:text-slate-400">Copyright © Cruip<span>. All rights
                    reserved.</span></div>
              </div>
            </div>
            <!-- Social links -->
            <ul class="flex items-center justify-center space-x-6 mt-4 md:mt-0">
              <li>
                <a class="text-blue-700" href="#0" aria-label="Twitter">
                  <Icon name="fa6-brands:x-twitter" class="text-xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a class="text-blue-700" href="#0" aria-label="Github">
                  <Icon name="bi:github" class="text-xl" />
                </a>
              </li>
              <li>
                <a class="text-blue-700" href="#0" aria-label="Telegram">
                  <Icon name="file-icons:telegram" class="text-xl" />
                </a>
              </li>
            </ul>
          </div>
        </footer>


        <!-- Secondary navigation -->
        <nav
          class="hidden md:block fixed top-1/2 right-10 transform -translate-y-1/2 w-64 rounded-lg p-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div class="relative">
            <!-- Slim scrollbar on the left side -->
            <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-neutral-700 rounded-full"></div>
            <div class="absolute left-0 top-0 w-0.5 h-5 bg-blue-500 rounded-full transition-all duration-300"
              id="scrollIndicator"></div>

            <div class="pl-4">
              <div class="text-sm font-bold text-gray-400 mb-4 uppercase dark:text-white">On this page</div>
              <ul class="space-y-3">
                <li>
                  <a href="#at-a-glance" :class="{ 'text-blue-600': isLinkActive('at-a-glance') }"
                    @click.prevent="scrollToSection('at-a-glance')"
                    class="block text-primaryDark text-sm hover:text-blue-600 transition-colors dark:text-slate-400">At
                    a glance</a>
                </li>
                <li>
                  <a href="#generate-api" :class="{ 'text-blue-600': isLinkActive('generate-api') }"
                    @click.prevent="scrollToSection('generate-api')"
                    class="block text-primaryDark text-sm hover:text-blue-600 transition-colors dark:text-slate-400">Generate
                    your API
                    key</a>
                </li>
                <li>
                  <a href="#install" :class="{ 'text-blue-600': isLinkActive('install') }"
                    @click.prevent="scrollToSection('install')"
                    class="block text-primaryDark text-sm hover:text-blue-600 transition-colors dark:text-slate-400">Install
                    the client
                    library
                  </a>
                </li>
                <li>
                  <a href="#api-call" :class="{ 'text-blue-600': isLinkActive('api-call') }"
                    @click.prevent="scrollToSection('api-call')"
                    class="block text-primaryDark text-sm hover:text-blue-600 transition-colors dark:text-slate-400">Make
                    you first API
                    call</a>
                </li>
                <li>
                  <a href="#config-status" :class="{ 'text-blue-600': isLinkActive('config-status') }"
                    @click.prevent="scrollToSection('config-status')"
                    class="block text-primaryDark text-sm hover:text-blue-600 transition-colors dark:text-slate-400">Configuration
                    status</a>
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

const showDocs = ref(false);
const showGuides = ref(false);
const showAltScheme = ref(false);
const showEcomm = ref(false);

// SMOOTH SCROLL & TRACKER
const { activeSection, isLinkActive, scrollToSection } = useScrollTracker();

// SIDEBAR TOGGLER
const isSidebarOpen = ref(false)
const toggleSidebar = () => (isSidebarOpen.value = !isSidebarOpen.value)
const closeSidebar = () => (isSidebarOpen.value = false)

// ACTIVE LISTS LINK
const route = useRoute();

const isParentActive = (path) => route.fullPath === path || route.fullPath.startsWith(`${path}/`)

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

</script>

<style scoped>
section h2 {
  scroll-margin-top: 100px;
  /* Adjust this value to match your navbar's height plus any extra space you want */
}

.active-parent>div {
  background: linear-gradient(to left, lightpink, lightblue);
  padding: 0.5rem;
  border-radius: 0.5rem;
}
</style>
