<template>
  <!-- Page container -->
  <main class="dark:bg-neutral-900 overflow-hidden px-4 ml-0 md:ml-[350px] xl:ml-[500px]">
    <div class="w-full lg:w-[70%] max-w-7xl flex flex-col mt-2">
      <div class="text-left -z-50">
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
            <!-- Hamburger button -->
            <div>
              <Icon
                name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger" />
            </div>
            <!-- Breadcrumbs -->
            <div class="flex items-center gap-x-1">
              <span class="text-primaryDark font-extra-light">Documentation</span>
              <Icon name="ic:baseline-keyboard-arrow-right" class="text-gray-500" />
              <span class="font-semibold text-secondaryDark">Fundamentals</span>
            </div>
          </div>

          <!-- Article content -->
          <div>
            <header class="mt-9">
              <h1 class="text-4xl md:text-5xl font-bold mb-4 text-primaryDark tracking-wide">
                Basics &amp; Fundamentals
              </h1>
              <p class="text-lg text-secondaryDark">
                This guide will give you everything you need to start using the Docs
                Marketing API to manage audiences, control automation workflows, sync email activity with your
                database, and more.
              </p>
            </header>

            <div class="">

              <!-- Article section -->
              <div>
                <h2 id="basics" data-scrollspy-target=""
                  class="text-2xl md:text-4xl font-bold my-5 text-primaryDark tracking-wide">The basics</h2>
                <p class="text-md text-secondaryDark">
                  The Docs Marketing API provides programmatic access to Docs data and functionality, allowing
                  developers to build custom features to do things like sync email activity and campaign analytics with
                  their database, manage audiences and campaigns, and more.
                </p>
                <p class="text-md text-secondaryDark my-4">
                  To use the Docs API, you need a Docs account. What you can do with the API depends on what level of
                  Docs plan you have. Once you have an account and are logged in, you can get an API key and begin
                  making calls to the API.
                </p>
              </div>

              <div>
                <h3 class="text-lg md:text-4xl font-bold my-5 text-primaryDark tracking-wide">Using Docs</h3>
                <p class="text-md text-secondaryDark">
                  Whether you're managing your own campaigns, providing Docs services to your customers or clients, or
                  writing a mobile app, the Docs Marketing API has features to manage and sync your contact data.
                </p>
                <p class="text-md text-secondaryDark my-4">
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

              <!-- Article section -->
              <div>
                <div>
                  <!-- HTML Bookmark -->
                  <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                  <h2 id="api-structure" data-scrollspy-target=""
                    class="text-2xl md:text-4xl font-bold my-5 text-primaryDark tracking-wide">API structure</h2>
                  <p class="text-md text-secondaryDark">
                    The Marketing API generally follows REST conventions, with some deviations.
                  </p>
                  <ul class="text-md text-secondaryDark my-4 list-disc leading-relaxed space-y-2 ml-4">
                    <li class="marker:text-primaryDark">Resources are typically nouns like subscribers or campaigns.
                    </li>
                    <li class="marker:text-primaryDark">Subresources can be multiply nested under resources.</li>
                    <li class="marker:text-primaryDark">Actions are usually represented by HTTP methods.</li>
                    <li class="marker:text-primaryDark">Responses use the generic JSON content type.</li>
                  </ul>
                  <p class="text-md text-secondaryDark">
                    We use the API Specification to describe each endpoint. The API self-description also contains type
                    information to help you error-check your requests.
                  </p>
                  <p class="text-md text-secondaryDark mt-4">
                    The root url for the API is <span
                      class="font-semibold text-black underline">https://&lt;dc&gt;.api.docs.com/3.0/</span>. The
                    &lt;dc&gt;
                    part
                    of the URL corresponds to the data center for your account. For example, if the data center for your
                    account is us6, all API endpoints for your account are available relative to <span
                      class="font-semibold text-black underline">https://us6.api.docs.com/3.0/</span>.
                  </p>
                  <p class="text-md text-secondaryDark mt-4">
                    There are a few ways to find your data center. It's the first part of the URL you see in the API
                    keys section of your account; if the URL is <span
                      class="font-semibold text-black underline">https://us6.docs.com/account/api/</span>, then the data
                    center
                    subdomain is us6. It's also appended to your API key in the form key-dc; if your API key is <span
                      class="font-semibold text-black underline">0123456789abcdef0123456789abcde-us6</span>, then the
                    data center
                    subdomain is us6. And finally, if you're connecting via OAuth 2, you can find the data center
                    associated with the token via the OAuth Metadata endpoint; for more information, see the OAuth
                    guide.
                  </p>
                  <div class="my-4 p-4 bg-slate-100 border rounded-sm">
                    <div class="flex justify-center items-center space-x-4 text-primaryDark text-sm leading-loosed">
                      <svg class="" width="50" height="50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Zm1-3H7V4h2v5Z"
                          fill="#A855F7">
                        </path>
                      </svg>
                      <p>
                        Note: You will see the &lt;dc&gt; placeholder or an actual data center subdomain in examples
                        throughout this documentation. Either way, make sure to replace it in your code with the data
                        center subdomain for your account, or your request may generate an error.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Article section -->
              <div>
                <div>
                  <!-- HTML Bookmark -->
                  <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                  <h2 id="connect-api" data-scrollspy-target=""
                    class="text-2xl md:text-4xl font-bold my-5 text-primaryDark tracking-wide">Connecting to the API
                  </h2>
                  <p class="text-md text-secondaryDark mt-4">
                    You can authenticate requests using either your API key or an OAuth access token, depending on your
                    use case. You should use an API key if you're writing code that tightly couples your application
                    data to your Docs account data; if you ever need to access someone else's Docs account data, you
                    should use OAuth 2.
                  </p>
                  <p class="text-md text-secondaryDark mt-4">
                    For more information on the Docs OAuth 2 flow, see Access Data on Behalf of Other Users with OAuth
                    2.
                  </p>
                  <p class="text-md text-secondaryDark mt-4">
                    If you're integrating with the Docs API using one of the <nuxt-link to="#0"
                      class="text-blue-600 font-semibold hover:underline cursor-pointer">official client
                      libraries</nuxt-link>, you won't need to worry about the implementation details
                    for authentication.
                  </p>
                </div>
                <div class="mb-4">
                  <h3 class="text-xl md:text-4xl font-bold my-5 text-primaryDark">Authenticate with an
                    API key or OAuth 2 token</h3>
                  <p class="text-md text-secondaryDark mt-4">
                    API keys and OAuth 2 tokens can be used to make authenticated requests the same way. We'll refer to
                    both as tokens.
                  </p>
                  <p class="text-md text-secondaryDark mt-4">
                    You can either use HTTP Basic Authentication or Bearer Authentication.
                  </p>
                  <p class="text-md text-secondaryDark my-4">
                    HTTP Basic Authentication:
                  </p>
                  <pre class="px-4 bg-[#1E293B] border rounded-md text-gray-400 whitespace-pre-line">
                    <code class="">
                        <span class="text-green-500">curl</span> --request GET \

                        --url <span class="text-purple-500">'https://&lt;dc&gt;.api.docs.com/3.0/'</span> \

                        --user 'anystring:TOKEN
                    </code>
                  </pre>
                </div>
              </div>

              <div class="my-4">
                <div>
                  <!-- HTML Bookmark -->
                  <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                  <h2 id="api-limits" data-scrollspy-target=""
                    class="text-2xl md:text-4xl font-bold my-5 text-primaryDark tracking-wide">API limits</h2>
                  <p class="text-md text-secondaryDark my-4">
                    To improve the experience for all our users, we impose some limits on API requests. These limits
                    prevent a single user from making too many expensive calls at once. Exceeding the limits can result
                    in your API access being disabled, so be cognizant of the quantity and complexity of your requests.
                    Currently there are no options to raise the limit on a per-customer basis.
                  </p>
                </div>
                <div class="my-5">
                  <h3 class="text-lg md:text-4xl font-bold my-5 text-primaryDark">Throttling</h3>
                  <p class="text-md text-secondaryDark my-4">
                    The Marketing API has a limit of 10 simultaneous connections. You'll receive a 429 error if you
                    reach the limit. At exceptionally high volumes, you may receive an HTTP 429 or 403 without a JSON
                    body.
                  </p>
                  <p class="text-md text-secondaryDark my-4">
                    We recommend that you cache frequently accessed values that do not change often in your
                    application's data store. This will prevent your application from bumping up against the throttling
                    limitations and will likely provide faster access to that data.
                  </p>
                </div>
                <div class="mb-4">
                  <h3 class="text-lg md:text-4xl font-bold my-5 text-primaryDark">Stream timeouts</h3>
                  <p class="text-md text-secondaryDark my-4">
                    The Marketing API has a 120-second timeout on API calls. You may see this type of timeout after
                    you've made a network socket connection and are already sending and receiving data.
                  </p>
                  <p class="text-md text-secondaryDark my-4">
                    Response times are dependent on the complexity of your request and the general load across Docs.
                    Some endpoints in the Marketing API return values that are large and slow to calculate. Once you
                    know what data you need, use the <a class="text-blue-600 hover:underline font-semibold"
                      href="#0">pagination and
                      partial
                      response</a> capabilities to request only what is essential to you.
                  </p>
                  <div class="my-4 p-4 bg-slate-100 border rounded-sm">
                    <div class="flex justify-center items-center space-x-4 text-primaryDark text-sm">
                      <svg width="50" height="50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8ZM7 11.4 3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4Z"
                          fill="#14B8A6">
                        </path>
                      </svg>
                      <p class="leading-relaxed">
                        Note: You will see the &lt;dc&gt; placeholder or an actual data center subdomain in examples
                        throughout this documentation. Either way, make sure to replace it in your code with the data
                        center subdomain for your account, or your request may generate an error.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <!-- Feedback -->
          <div class="my-8 flex justify-between items-center border-b border-gray-300 pb-8">
            <div class="text-lg font-bold text-primaryDark">Was this helpful?</div>
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
            <div class="mb-4 pb-6 border-b border-gray-300">
              <div>
                <div class="text-blue-800 font-semibold uppercase text-sm">Next</div>
                <div>
                  <nuxt-link class="flex items-center text-md text-primaryDark font-bold space-x-2" href="#0">
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
                    <img src="/assets/images/Capacitor.svg" width="32" height="32" alt="Fredox Logo">
                  </nuxt-link>
                  <div class="text-secondaryDark my-2 md:ml-4">Copyright © Cruip<span>. All rights
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
      </div>

      <div>
        <!-- Secondary navigation -->
        <nav class=" hidden lg:flex fixed right-0 mr-8 mt-8 bg-transparent">
          <div class="cdn1j cm8ed c9lju chsoc cgs8z cgjfp cmfv9 cvt4c w-64"> <!-- Adjusted width to 250px -->
            <div class="cvlul cuc78 cy1q3">
              <div class="czg3k cqusc ci20y clvqt cy91i ckxhs cuhac font-bold text-lg mb-2">On this page</div>
              <ul class="c61tc">
                <li class="mb-2">
                  <a data-scrollspy-link=""
                    class="c7t8u c3x91 ckunh c95i9 c7mr8 cak8f cyrdu c8f9i cy91i cifcz cuhac hover:text-blue-500 transition-colors"
                    href="#basics">The basics</a>
                </li>
                <li class="mb-2">
                  <a data-scrollspy-link=""
                    class="c7t8u c3x91 ckunh c95i9 c7mr8 cak8f cyrdu c8f9i cy91i cifcz cuhac hover:text-blue-500 transition-colors"
                    href="#api-structure">API structure</a>
                </li>
                <li class="mb-2">
                  <a data-scrollspy-link=""
                    class="c7t8u c3x91 ckunh c95i9 c7mr8 cak8f cyrdu c8f9i cy91i cifcz cuhac hover:text-blue-500 transition-colors"
                    href="#connect-api">Connecting to the API</a>
                </li>
                <li class="mb-2">
                  <a data-scrollspy-link=""
                    class="c7t8u c3x91 ckunh c95i9 c7mr8 cak8f cyrdu c8f9i cy91i cifcz cuhac hover:text-blue-500 transition-colors"
                    href="#api-limits">API limits</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    </div>
  </main>
</template>


<style scoped></style>