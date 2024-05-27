<template>
  <div
    class="fixed py-2 px-4 bg-slate-50 transition duration-500 z-40 justify-center min-h-screen w-[325px] left-0 flex border-r overflow-y-auto">
    <ul class="mt-10 font-bold text-neutral-600 text-lg border-l-2 border-neutral-300 pl-2">
      <li class="mt-3">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-x-2">
            <img src="/assets/images/Documentation.svg" alt="Documentation icon" />
            <span class="link_name">Documentation</span>
          </div>
          <i class="bx bx-chevron-down"></i>
        </div>
        <ul class="ml-8 mt-2 text-sm">
          <li class="mt-3">
            <nuxt-link to="/documentation/fundamentals">Fundamentals</nuxt-link>
          </li>
          <li class="mt-3">
            <nuxt-link to="/documentation/methods-and-parameters">Methods and Parameters</nuxt-link>
          </li>
          <li class="mt-3">
            <nuxt-link to="/documentation/merge-fields">Merge Fields</nuxt-link>
            <ul class="ml-4 mt-2">
              <li class="mt-3">
                <span>Alternative Scheme</span>
                <ul class="ml-4 mt-3 font-normal">
                  <li class="mt-3">
                    <nuxt-link to="/documentation/merge-fields/alternative-scheme/file-system">File System</nuxt-link>
                  </li>
                  <li class="mt-3">
                    <nuxt-link to="/documentation/merge-fields/alternative-scheme/describing-responses">Describing
                      Responses</nuxt-link>
                  </li>
                </ul>
              </li>
              <li class="mt-3">
                <span>E-commerce</span>
                <ul class="ml-4 mt-3 font-normal">
                  <li class="mt-3">
                    <nuxt-link to="/documentation/merge-fields/e-commerce/path-parameters">Path Parameters</nuxt-link>
                  </li>
                  <li class="mt-3">
                    <nuxt-link to="/documentation/merge-fields/e-commerce/query-string-parameters">Query String
                      Parameters</nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="mt-3">
            <nuxt-link to="/documentation/account-exports">Account Exports</nuxt-link>
          </li>
          <li class="mt-3">
            <nuxt-link to="/documentation/integrations">Integrations</nuxt-link>
          </li>
          <li class="mt-3">
            <nuxt-link to="/documentation/add-a-contact">Add a Contact</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="mt-3">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-x-2">
            <img src="/assets/images/Documentation.svg" alt="Documentation icon" />
            <span class="link_name">Guides/Tutorials</span>
          </div>

        </div>
        <ul class="ml-4 mt-3 text-sm">
          <li class="mt-3">
            <nuxt-link to="/guides/marketing-api-quick-start">Marketing API Quick Start</nuxt-link>
          </li>
          <li class="mt-3">
            <nuxt-link to="/guides/create-an-account">Create an Account</nuxt-link>
          </li>
          <li class="mt-3">
            <nuxt-link to="/guides/generate-api-key">Generate your API Key</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="mt-3">
        <nuxt-link to="/help-and-support">
          <span class="link_name">Help/Support</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>