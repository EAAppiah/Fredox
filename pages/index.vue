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
        <img src="/assets/images/documentation_page.svg" alt="Documentation Logo" />
        <span class="text-xl font-sans italic text-blue-500 tracking-wide">
          Documentation
        </span>
      </div>

      <!-- Main area -->
      <article>
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
              class="dark:text-slate-400 cursor-pointer" @click="toggleSidebar" />
          </div>
          <!-- Breadcrumbs -->
          <div class="flex items-center gap-x-1">
            <span class="text-primaryDark font-extra-light dark:text-slate-400">Documentation</span>
            <Icon name="ic:baseline-keyboard-arrow-right" class="text-gray-500" />
            <span class="font-semibold text-secondaryDark dark:text-slate-400">Fundamentals</span>
          </div>
        </div>

        <!-- Article content -->
        <div>
          <header class="mt-5">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-primaryDark tracking-wide dark:text-white">
              Basics &amp; Fundamentals
            </h1>
            <p class="text-lg text-secondaryDark dark:text-slate-400">
              This guide will give you everything you need to start using the Docs
              Marketing API to manage audiences, control automation workflows, sync email activity with your
              database, and more.
            </p>
          </header>

          <div class="">

            <!-- THE BASICS-->
            <section>
              <h2 id="basics" class="text-2xl font-bold my-5 text-primaryDark tracking-wide dark:text-white">The
                basics
              </h2>
              <p class="text-base text-secondaryDark dark:text-slate-400">
                The Docs Marketing API provides programmatic access to Docs data and functionality, allowing
                developers to build custom features to do things like sync email activity and campaign analytics with
                their database, manage audiences and campaigns, and more.
              </p>
              <p class="text-base text-secondaryDark my-4 dark:text-slate-400">
                To use the Docs API, you need a Docs account. What you can do with the API depends on what level of
                Docs plan you have. Once you have an account and are logged in, you can get an API key and begin
                making calls to the API.
              </p>

              <div>
                <h3 class="text-xl font-bold my-4 text-primaryDark tracking-wide dark:text-white">Using Docs</h3>
                <p class="text-base text-secondaryDark dark:text-slate-400">
                  Whether you're managing your own campaigns, providing Docs services to your customers or clients, or
                  writing a mobile app, the Docs Marketing API has features to manage and sync your contact data.
                </p>
                <p class="text-base text-secondaryDark my-4 dark:text-slate-400">
                  You can also use the Docs API to handle data in different ways for different purposes. If you are
                  syncing a large amount of data with Docs, you can use batches to avoid hitting the API request limits.
                  For building integrations that let other users access data from their own <nuxt-link to="/"
                    class="text-blue-600 font-semibold hover:underline">Docs accounts</nuxt-link>, you should
                  <nuxt-link class="text-blue-600 font-semibold hover:underline cursor-pointer" to="#">authenticate with
                    OAuth 2</nuxt-link>. And if you're developing an app for iOS or Android, the Mobile SDK provides
                  an
                  easy way
                  to work with a mobile-focused subset of the Docs API's functionality.
                </p>
              </div>
            </section>

            <!-- API STRUCTURES -->
            <section>
              <h2 id="apistructures" class="text-2xl font-bold my-5 text-primaryDark tracking-wide dark:text-white">API
                structure</h2>
              <p class="text-base text-secondaryDark dark:text-slate-400">
                The Marketing API generally follows REST conventions, with some deviations.
              </p>
              <ul
                class="text-base text-secondaryDark my-4 list-disc leading-relaxed space-y-2 ml-4 dark:text-slate-400">
                <li class="marker:text-primaryDark marker:dark:text-slate-400">Resources are typically nouns like
                  subscribers or campaigns.
                </li>
                <li class="marker:text-primaryDark marker:dark:text-slate-400">Subresources can be multiply nested under
                  resources.</li>
                <li class="marker:text-primaryDark marker:dark:text-slate-400">Actions are usually represented by HTTP
                  methods.</li>
                <li class="marker:text-primaryDark marker:dark:text-slate-400">Responses use the generic JSON content
                  type.</li>
              </ul>
              <p class="text-base text-secondaryDark dark:text-slate-400">
                We use the API Specification to describe each endpoint. The API self-description also contains type
                information to help you error-check your requests.
              </p>
              <p class="text-base text-secondaryDark mt-4 dark:text-slate-400">
                The root url for the API is <span
                  class="font-semibold text-black underline dark:text-white">https://&lt;dc&gt;.api.docs.com/3.0/</span>.
                The
                &lt;dc&gt;
                part
                of the URL corresponds to the data center for your account. For example, if the data center for your
                account is us6, all API endpoints for your account are available relative to <span
                  class="font-semibold text-black underline dark:text-white">https://us6.api.docs.com/3.0/</span>.
              </p>
              <p class="text-base text-secondaryDark mt-4 dark:text-slate-400">
                There are a few ways to find your data center. It's the first part of the URL you see in the API
                keys section of your account; if the URL is <span
                  class="font-semibold text-black underline dark:text-white">https://us6.docs.com/account/api/</span>,
                then the data
                center
                subdomain is us6. It's also appended to your API key in the form key-dc; if your API key is <span
                  class="font-semibold text-black underline dark:text-white">0123456789abcdef0123456789abcde-us6</span>,
                then the
                data center
                subdomain is us6. And finally, if you're connecting via OAuth 2, you can find the data center
                associated with the token via the OAuth Metadata endpoint; for more information, see the OAuth
                guide.
              </p>
              <div
                class="my-4 p-4 bg-slate-100 border text-base text-primaryDark rounded-sm dark:border-slate-700 dark:bg-[#1E293B]">
                <div class="flex justify-center items-center space-x-4 text-primaryDark text-sm">
                  <svg class="" width="50" height="50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Zm1-3H7V4h2v5Z"
                      fill="#A855F7">
                    </path>
                  </svg>
                  <p class="dark:text-slate-400 ">
                    Note: You will see the &lt;dc&gt; placeholder or an actual data center subdomain in examples
                    throughout this documentation. Either way, make sure to replace it in your code with the data
                    center subdomain for your account, or your request may generate an error.
                  </p>
                </div>
              </div>
            </section>

            <!-- CONNECTING TO THE API -->
            <section>
              <h2 id="connectingapi" class="text-2xl font-bold my-5 text-primaryDark tracking-wide dark:text-white">
                Connecting to the API
              </h2>
              <p class="text-base text-secondaryDark mt-4 dark:text-slate-400">
                You can authenticate requests using either your API key or an OAuth access token, depending on your
                use case. You should use an API key if you're writing code that tightly couples your application
                data to your Docs account data; if you ever need to access someone else's Docs account data, you
                should use OAuth 2.
              </p>
              <p class="text-base text-secondaryDark mt-4 dark:text-slate-400">
                For more information on the Docs OAuth 2 flow, see Access Data on Behalf of Other Users with OAuth
                2.
              </p>
              <p class="text-base text-secondaryDark mt-4 dark:text-slate-400">
                If you're integrating with the Docs API using one of the <nuxt-link to="#0"
                  class="text-blue-600 font-semibold hover:underline cursor-pointer">official client
                  libraries</nuxt-link>, you won't need to worry about the implementation details
                for authentication.
              </p>

              <div class="mb-4">
                <h3 class="text-lg md:text-xl font-bold my-5 text-primaryDark dark:text-white">Authenticate with an
                  API key or OAuth 2 token</h3>
                <p class="text-base text-secondaryDark mt-4 dark:text-slate-400">
                  API keys and OAuth 2 tokens can be used to make authenticated requests the same way. We'll refer to
                  both as tokens.
                </p>
                <p class="text-base text-secondaryDark mt-4 dark:text-slate-400">
                  You can either use HTTP Basic Authentication or Bearer Authentication.
                </p>
                <p class="text-base text-secondaryDark my-4 dark:text-slate-400">
                  HTTP Basic Authentication:
                </p>
                <pre
                  class="px-4 bg-[#1E293B] border rounded-md text-gray-400 whitespace-pre-line dark:border-slate-700">
                    <code class="">
                        <span class="text-green-500">curl</span> --request GET \

                        --url <span class="text-purple-500">'https://&lt;dc&gt;.api.docs.com/3.0/'</span> \

                        --user 'anystring:TOKEN
                    </code>
                  </pre>
              </div>
            </section>

            <!-- API LIMITS -->
            <section class="my-4">
              <h2 id="apilimits" class="text-2xl font-bold my-5 text-primaryDark tracking-wide dark:text-white">API
                limits</h2>
              <p class="text-base text-secondaryDark my-4 dark:text-slate-400">
                To improve the experience for all our users, we impose some limits on API requests. These limits
                prevent a single user from making too many expensive calls at once. Exceeding the limits can result
                in your API access being disabled, so be cognizant of the quantity and complexity of your requests.
                Currently there are no options to raise the limit on a per-customer basis.
              </p>
              <div class="my-5">
                <h3 class="text-lg md:text-xl font-bold my-4 text-primaryDark dark:text-white">Throttling</h3>
                <p class="text-base text-secondaryDark my-4 dark:text-slate-400">
                  The Marketing API has a limit of 10 simultaneous connections. You'll receive a 429 error if you
                  reach the limit. At exceptionally high volumes, you may receive an HTTP 429 or 403 without a JSON
                  body.
                </p>
                <p class="text-base text-secondaryDark my-4 dark:text-slate-400">
                  We recommend that you cache frequently accessed values that do not change often in your
                  application's data store. This will prevent your application from bumping up against the throttling
                  limitations and will likely provide faster access to that data.
                </p>
              </div>
              <div class="mb-4">
                <h3 class="text-lg md:text-xl font-bold my-4 text-primaryDark dark:text-white">Stream timeouts</h3>
                <p class="text-base text-secondaryDark my-4 dark:text-slate-400">
                  The Marketing API has a 120-second timeout on API calls. You may see this type of timeout after
                  you've made a network socket connection and are already sending and receiving data.
                </p>
                <p class="text-base text-secondaryDark my-4 dark:text-slate-400">
                  Response times are dependent on the complexity of your request and the general load across Docs.
                  Some endpoints in the Marketing API return values that are large and slow to calculate. Once you
                  know what data you need, use the <a class="text-blue-600 hover:underline font-semibold"
                    href="#0">pagination and
                    partial
                    response</a> capabilities to request only what is essential to you.
                </p>
                <div class="my-4 p-4 bg-slate-100 border rounded-sm dark:bg-[#1E293B] dark:border-slate-700">
                  <div class="flex justify-center items-center space-x-4 text-primaryDark text-base">
                    <svg width="50" height="50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8ZM7 11.4 3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4Z"
                        fill="#14B8A6">
                      </path>
                    </svg>
                    <p class="dark:text-slate-400">
                      Note: You will see the &lt;dc&gt; placeholder or an actual data center subdomain in examples
                      throughout this documentation. Either way, make sure to replace it in your code with the data
                      center subdomain for your account, or your request may generate an error.
                    </p>
                  </div>
                </div>

              </div>
            </section>


          </div>
        </div>

        <!-- Secondary navigation -->
        <nav
          class="hidden md:block fixed top-1/2 right-10 transform -translate-y-1/2 w-64 rounded-lg p-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div class="relative">
            <!-- Slim scrollbar on the left side -->
            <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-neutral-700 rounded-full"></div>
            <div class="absolute left-0 top-0 w-0.5 h-5 bg-blue-500 rounded-full transition-all duration-300"
              id="scrollIndicator"></div>

            <div class="pl-4">
              <div class="text-sm font-bold text-gray-400 dark:text-white mb-4 uppercase">On this page</div>
              <ul class="space-y-3">
                <li>
                  <a href="#basics" :class="{ 'text-blue-600': isLinkActive('basics') }"
                    @click.prevent="scrollToSection('basics')"
                    class="block text-primaryDark text-sm hover:text-blue-600 transition-colors dark:text-slate-400">The
                    basics</a>
                </li>
                <li>
                  <a href="#apistructures" :class="{ 'text-blue-600': isLinkActive('apistructures') }"
                    @click.prevent="scrollToSection('apistructures')"
                    class="block text-primaryDark text-sm hover:text-blue-600 transition-colors dark:text-slate-400">API
                    structure</a>
                </li>
                <li>
                  <a href="#connectingapi" :class="{ 'text-blue-600': isLinkActive('connectingapi') }"
                    @click.prevent="scrollToSection('connectingapi')"
                    class="block text-primaryDark text-sm hover:text-blue-600 transition-colors dark:text-slate-400">Connecting
                    to the
                    API</a>
                </li>
                <li>
                  <a href="#apilimits" :class="{ 'text-blue-600': isLinkActive('apilimits') }"
                    @click.prevent="scrollToSection('apilimits')"
                    class="block text-primaryDark text-sm hover:text-blue-600 transition-colors dark:text-slate-400">API
                    limits</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <!-- Feedback -->
        <div class="my-8 flex justify-between items-center border-b border-gray-300 pb-8">
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
          <div class="mb-4 pb-6 border-b border-gray-300 flex justify-end">
            <div>
              <div class="text-blue-800 font-semibold uppercase text-sm">Next</div>
              <div>
                <nuxt-link class="flex items-center text-base text-primaryDark font-bold space-x-2 dark:text-white"
                  href="#0">
                  <span>Methods and Parameters</span>
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


      </article>

      <div>

      </div>

    </div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useScrollTracker } from '@/composable/useScrollTracker';

// SMOOTH SCROLL & TRACKER
const { activeSection, isLinkActive, scrollToSection } = useScrollTracker();

const route = useRoute()

const isSidebarOpen = ref(false)
const toggleSidebar = () => (isSidebarOpen.value = !isSidebarOpen.value)
const closeSidebar = () => (isSidebarOpen.value = false)

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
