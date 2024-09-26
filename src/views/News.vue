<template>
  <h1 class="text-center">News and Press</h1>

  <div class="container">
    <div class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- item 1 -->
      <div v-for="i in 9" :key="i" class="col-span-1">
        <div class="relative aspect-video w-full overflow-clip rounded-xl mb-2">
          <img
            class="absolute inset-0 object-cover w-full h-full bg-no-repeat"
            src="./../../src/assets/list-page-assets/theme_background.png"
            alt="theme"
          />
        </div>
        <h2 class="text-base font-semibold text-slate-700 mb-2">My experince running travel</h2>
        <p class="text-base font-normal text-slate-600">
          How do you create compelling presentations that wow your colleagues and impress your
          managers?
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
