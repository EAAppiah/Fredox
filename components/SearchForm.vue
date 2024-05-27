<template>
  <form class="py-3 px-4 flex items-center">
    <label class="sr-only">Search</label>
    <div class="relative w-full">
      <input type="text" id="table-search" placeholder="Search for anything..."
        className="py-2 ps-7 pl-10 rounded-sm w-[400px] border border-gray-200 text-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:text-white dark:focus:ring-blue-500 placeholder:italic placeholder:text-slate-400" />
      <Icon name="gravity-ui:magnifier"
        class="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-600" />
    </div>
  </form>
</template>