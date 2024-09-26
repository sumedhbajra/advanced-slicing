<template>
  <div class="mx-10 my-10">
    <!-- Heading -->
    <div class="grid grid-cols-12 space-y-8">
      <div class="col-start-2 col-span-3 w-full">
        <img class="object-contain h-16 w-80" src="./../../src/assets/canon-logo.png" alt="" />
      </div>
      <p class="col-start-2 col-span-9 text-slate-600 text-base font-medium">
        IEC has long been in partner ship with Canon as a sole authorised dealer for Nepal. Canon
        offers at you the world renown office imaging product ranging from Laser Printer,
        Multi-Function-Printer, Copiers, Colour Copiers, Business Multi-Function-Devices.
      </p>
    </div>

    <!-- Category printer list here. -->
    <div class="grid grid-cols-12 space-y-3 mt-20">
      <!-- Individual item here. -->
      <!-- Item 1 -->
      <div
        :style="gradientStyle"
        class="grid grid-cols-10 rounded-2xl p-4 col-start-2 col-end-12 items-center"
      >
        <div class="col-span-2">
          <div class="relative max-h-56 aspect-square">
            <img
              class="absolute w-full h-full inset-0 object-contain object-center"
              src="./../../src/assets/category-list/printer1.png"
              alt="printer1"
            />
          </div>
        </div>
        <h2 class="col-start-4 col-span-4 text-xl font-medium">Business Multi-function Devices</h2>
        <div class="col-span-2 col-start-10 place-self-center">
          <div class="flex rounded-full items-center justify-center h-12 w-12 bg-rose-200">></div>
        </div>
      </div>
      <!-- Item 2 -->
      <div
        :style="gradientStyle"
        class="grid grid-cols-10 rounded-2xl p-4 col-start-2 col-end-12 items-center"
      >
        <div class="col-span-2">
          <div class="relative max-h-56 aspect-square">
            <img
              class="absolute w-full h-full inset-0 object-contain object-center"
              src="./../../src/assets/category-list/printer2.png"
              alt="printer2"
            />
          </div>
        </div>
        <h2 class="col-start-4 col-span-4 text-xl font-medium">Business Multi-function Devices</h2>
        <div class="col-span-2 col-start-10 place-self-center">
          <div class="flex rounded-full items-center justify-center h-12 w-12 bg-rose-200">></div>
        </div>
      </div>

      <!-- Item 3 -->
      <div
        :style="gradientStyle"
        class="grid grid-cols-10 rounded-2xl p-4 col-start-2 col-end-12 items-center"
      >
        <div class="col-span-2">
          <div class="relative max-h-56 aspect-square">
            <img
              class="absolute w-full h-full inset-0 object-contain object-center"
              src="./../../src/assets/category-list/printer3.png"
              alt="printer3"
            />
          </div>
        </div>
        <h2 class="col-start-4 col-span-4 text-xl font-medium">Business Multi-function Devices</h2>
        <div class="col-span-2 col-start-10 place-self-center">
          <div class="flex rounded-full items-center justify-center h-12 w-12 bg-rose-200">></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gradientStyle: {
        background: 'linear-gradient(92.97deg, #FFF1F2 44.13%, #FEF3C7 99.17%)'
      }
    }
  }
}
</script>
