<template>
  <!-- Page content -->
  <main class="dark:bg-neutral-900 overflow-hidden px-4 ml-0 md:ml-[350px] xl:ml-[500px]">
    <div class="w-full lg:w-[70%] max-w-7xl flex flex-col mt-2">
      <div class="text-left -z-50">

        <div>
          <img class="absolute inset-0 -z-50" src="../assets/images/Illustrator.svg" alt="Hero Image" width=1972
            height=392 />
        </div>

        <!-- Page header -->
        <div class="flex items-center gap-x-4 my-5">
          <img src="/assets/images/documentation_page.svg" alt="Documentation Logo" />
          <span class="text-xl font-sans italic text-blue-500 tracking-wide">
            Help / Support
          </span>
        </div>

        <article class="cfxuc cksrg">

          <!-- Main area -->
          <div>
            <!-- Mobile hamburger + breadcrumbs -->
            <div class="flex md:hidden items-center gap-x-4 mt-6">
              <!-- Hamburger button -->
              <div>
                <Icon
                  name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger" />
              </div>
              <!-- Breadcrumbs -->
              <div>
                <span class="text-primaryDark font-extra-light">Help / Support</span>
              </div>
            </div>

            <!-- Article content -->
            <div>
              <header class="mt-10">
                <h1 class="text-4xl md:text-5xl font-bold mb-4 text-primaryDark tracking-wide">How can we help?</h1>
                <p class="text-lg text-secondaryDark">Everything you need to know right here at your fingertips. Ask
                  questions, browse
                  around for answers, or submit your feature requests.</p>
              </header>
              <div>

                <!-- Faqs section -->
                <div class="c92zf coouc ckzml">

                  <section class="crgt4">
                    <!-- HTML Bookmark -->
                    <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                    <h2 id="overview" data-scrollspy-target=""
                      class="text-2xl md:text-4xl font-bold my-5 text-primaryDark tracking-wide">Overview</h2>
                    <ul class="cpxfi">
                      <li x-data="{ expanded: true }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>Does Docs support other data sources, like Excel or Airtable?</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li x-data="{ expanded: false }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>Can I collaborate on campaigns with others?</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li x-data="{ expanded: false }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>Will you help me build my campaign?</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li x-data="{ expanded: false }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>How can I become a partner?</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>

                  <section class="crgt4">
                    <!-- HTML Bookmark -->
                    <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                    <h2 id="support" data-scrollspy-target="" class="czg3k cdujf cxq5p cg131">Support</h2>
                    <ul class="cpxfi">
                      <li x-data="{ expanded: true }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>How can I talk to someone at Docs?</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li x-data="{ expanded: false }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>Why should I connect my clients?</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li x-data="{ expanded: false }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>Can I collaborate on campaigns with others?</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li x-data="{ expanded: false }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>Is Glide Docs and CCPA compliant?</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>

                  <section class="crgt4">
                    <!-- HTML Bookmark -->
                    <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                    <h2 id="security" data-scrollspy-target="" class="czg3k cdujf cxq5p cg131">Security &amp;
                      Privacy</h2>
                    <ul class="cpxfi">
                      <li x-data="{ expanded: true }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>What are Private Users of Private Pro campaigns?</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li x-data="{ expanded: false }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>Does Docs sell or share the content of my campaigns with third parties?</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li x-data="{ expanded: false }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>What access does Docs have to my campaigns?</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>

                  <section class="crgt4">
                    <!-- HTML Bookmark -->
                    <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                    <h2 id="troubleshooting" data-scrollspy-target="" class="czg3k cdujf cxq5p cg131">
                      Troubleshooting</h2>
                    <ul class="cpxfi">
                      <li x-data="{ expanded: true }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>An error occurred deleting my campaign</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li x-data="{ expanded: false }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>Something went wrong adding the webhook</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li x-data="{ expanded: false }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>Something went wrong updating your payment information</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li x-data="{ expanded: false }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>Something went wrong trying to delete that user's data</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li x-data="{ expanded: false }">
                        <button class="czg3k cdujf cd2pc cbj28 co992 ctpgh cksrg" @click="expanded = !expanded"
                          :aria-expanded="expanded">
                          <div class="cyg2g cfzzb">
                            <svg class="cnug6 cx9vk" :class="{ 'clbvd': expanded }" xmlns="http://www.w3.org/2000/svg"
                              width="8" height="12">
                              <path d="m4.586 6-4-4L2 .586 7.414 6 2 11.414.586 10z"></path>
                            </svg>
                          </div>
                          <span>Something went wrong replacing the campaign</span>
                        </button>
                        <div :class="{ 'cb4ta': !expanded }" x-cloak="">
                          <div class="csgq2 ccjb9">
                            <p>
                              There are many variations of passages available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look.
                              If you are going to use a passage of Lorem Ipsum.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>

                </div>

              </div>
            </div>

            <!-- Content footer -->
            <footer class="cvlul cuc78 ctjfq cbd4t">
              <div class="czube cgm8l cd2pc c4sqe cm613 cksrg">
                <div class="cqad6 cldjl">
                  <div class="cd2pc c4sqe cyg2g cm613 cksrg">
                    <!-- Logo -->
                    <a class="c04hf cqad6 c5sr6" href="index.html" aria-label="Cruip">
                      <img src="./images/logo.svg" width="32" height="32" alt="Docs">
                    </a>
                    <div class="c6hvh c61tc cdaz4">Copyright © Cruip<span class="cdcnn cqfqg">. All rights
                        reserved.</span></div>
                  </div>
                </div>
                <!-- Social links -->
                <ul class="c04hf c3y8o">
                  <li>
                    <a class="c4qeo cgm8l c3yvh cd2pc cf4um c8n89 c1m7j cksrg" href="#0" aria-label="Twitter">
                      <svg class="chvft c0zj9 c0a4p" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z">
                        </path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a class="c4qeo cgm8l c3yvh cd2pc cf4um c8n89 c1m7j cksrg" href="#0" aria-label="Github">
                      <svg class="chvft c0zj9 c0a4p" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z">
                        </path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a class="c4qeo cgm8l c3yvh cd2pc cf4um c8n89 c1m7j cksrg" href="#0" aria-label="Telegram">
                      <svg class="chvft c0zj9 c0a4p" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z">
                        </path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>

          </div>

          <!-- Secondary navigation -->
          <nav class="ciwds cyg2g cb4ta cmfv9">
            <div class="cdn1j cm8ed c9lju chsoc cgs8z cgjfp cmfv9 cvt4c">
              <div class="cvlul cuc78 cy1q3">
                <div class="czg3k cqusc ci20y clvqt cy91i ckxhs cuhac">On this page</div>
                <ul class="c61tc">
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <a data-scrollspy-link="" class="c7t8u c3x91 ckunh c7mr8 cak8f c8f9i cy91i cifcz cuhac"
                      href="#overview">Overview</a>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <a data-scrollspy-link="" class="c7t8u c3x91 ckunh c7mr8 cak8f c8f9i cy91i cifcz cuhac"
                      href="#support">Support</a>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <a data-scrollspy-link="" class="c7t8u c3x91 ckunh c7mr8 cak8f c8f9i cy91i cifcz cuhac"
                      href="#security">Security &amp; Privacy</a>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <a data-scrollspy-link="" class="c7t8u c3x91 ckunh c7mr8 cak8f c8f9i cy91i cifcz cuhac"
                      href="#troubleshooting">Troubleshooting</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </article>

      </div>
    </div>

  </main>
</template>
