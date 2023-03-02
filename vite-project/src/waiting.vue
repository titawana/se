<template>
  <div class="bg-gradient-to-br from-purple-700 to-black bg-opacity-50 flex flex-col h-screen">
    <div class="flex-1 flex justify-center items-center">
      <div class="text-center">
        <svg class="w-12 h-12 animate-spin mx-auto text-blue-500" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 016 12H2c0 3.042 1.135 5.824 3 7.938l1-1.647zm10-5.291A7.962 7.962 0 0118 12h-4c0-3.042-1.135-5.824-3-7.938l-1 1.647z"></path>
        </svg>
        <h2 class="mt-4 text-3xl font-bold text-white dark:text-gray-900 m-4 font-serif">Waiting Owner to accept...</h2>
        <button class="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-80 m-4 p-3 w-[400px] text-white rounded-full font-bold animate-pulse">
          <span class="mr-2">🙅</span>Don't want to charge with him/her anymore
        </button>
      </div>
    </div>
  </div>
</template>
