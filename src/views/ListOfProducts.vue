<template>
  <!-- Theme Background -->
  <div class="relative">
    <div class="relative aspect-header w-full">
      <img
        class="absolute inset-0 object-contain"
        src="./../../src/assets/list-page-assets/theme_background.png"
        alt="theme"
      />
    </div>

    <h3 class="absolute bottom-0 -translate-y-1/2 text-slate-50 font-semibold text-4xl left-16">
      Image Runner (Color Series)
    </h3>
  </div>

  <!-- Some Search Operation here -->

  <!-- List of cards here -->
  <div class="container mt-10">
    <div class="grid grid-cols-12">
      <div class="grid grid-cols-10 col-start-2 col-end-12 gap-y-8 gap-x-10">
        <!-- Item 1 -->
        <div
          v-for="i in 4"
          :key="i"
          class="grid grid-cols-5 col-span-5 border border-yellow-100 hover:bg-rose-50 hover:border cursor-pointer hover:border-slate-600 transition-all bg-yellow-100 rounded-md p-2 items-center"
        >
          <div class="col-span-2">
            <div class="relative max-w-60 aspect-square">
              <img
                class="absolute inset-0 object-contain h-full w-full object-center"
                src="./../../src/assets/category-list/printer1.png"
                alt="theme"
              />
            </div>
          </div>
          <div class="col-span-3">
            <div class="flex flex-col gap-5">
              <h3 class="text-slate-700 font-medium text-base">Image Runner C322LL</h3>
              <p class="flex flex-col text-slate-500 font-normal text-sm">
                <span>A# color </span> <br />
                <span>Print speed of up to 22/22 </span> <br />
                <span>21 / 21 ppm (Mono / Colour)</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Item 1 -->
      </div>
    </div>
  </div>
</template>

<script></script>
