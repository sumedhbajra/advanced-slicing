<template>
  <div class="bg-red-50">
    <div class="grid grid-cols-12 container justify-center place-items-center py-20 text">
      <div class="aspect-square relative w-full col-span-4">
        <img
          src="./../../src/assets/printer.png"
          alt="Printer"
          class="absolute inset-0 object-contain"
        />
      </div>
      <div class="flex flex-col col-start-6 gap-5 col-span-7">
        <h1 class="uppercase font-bold text-3xl">pixma g670</h1>
        <h3 class="font-semibold text-xl">
          Easy Refillable Wireless All-In-One Ink Tank for High Volume Quality Photo Printing
        </h3>
        <p class="font-normal">
          Designed for high volume photo printing, this 6-colour wireless 3-in-1 photo printer
          delivers photo lab quality photo prints at ultra low cost printing with easy wireless
          setup and convenient maintenance.
        </p>

        <ul class="list-disc px-8 space-y-3">
          <li>
            Multifunctional Capabilities: Printing, scanning, copying, and faxing in one device.
          </li>
          <li>
            User-Friendly Interface: Intuitive touchscreen with customizable settings for quick
            access.
          </li>
          <li>
            Advanced Security Features: Data encryption, user authentication, and secure print
            options to protect sensitive information.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center gap-5 my-10">
    <h2 class="text-4xl text-red-700">Key Features</h2>
    <!-- Key features here !!! -->
    <div class="container">
      <div class="grid grid-cols-12">
        <div class="grid grid-cols-12 col-start-2 col-end-12 gap-8 gap-y-12">
          <div class="col-span-4" v-for="i in 6" :key="i">
            <div class="flex flex-col gap-4">
              <div class="relative aspect-video overflow-clip rounded-lg">
                <img
                  src="./../assets/key-features/image.png"
                  alt="phone"
                  class="inset-0 absolute object-cover"
                />
              </div>

              <h3 class="text-lg font-semibold">High Page Yield Ink Bottles</h3>
              <p class="text-sm font-normal text-slate-500">
                High page yield ink bottles that print up to 3,800 (4R) high quality photos, never
                worry about ink costs again!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center gap-10 mt-24">
    <h2 class="font-semibold text-3xl text-red-700">Specifications</h2>
    <div class="container">
      <div class="grid grid-cols-12">
        <div class="grid grid-cols-12 col-start-2 col-end-12 gap-y-10 divide-y">
          <div class="col-span-6 flex flex-col gap-2 pt-6">
            <h3 class="text-slate-700 font-medium text-base">Printing</h3>
            <p class="text-slate-500 font-normal text-sm">Colour Laser Beam Printing</p>
          </div>

          <div class="col-span-6 flex flex-col gap-2 !border-0 pt-6">
            <h3 class="text-slate-700 font-medium text-base">Printing Speed</h3>
            <p class="text-slate-500 font-normal text-sm">
              <span> A4 : 21/21 ppm (Mono/Colour) </span> <br />
              <span> Letter : 21/21 ppm (Mono/Colour) </span> <br />
              <span> 2-sided : 21/21 ppm (Mono/Colour) </span>
            </p>
          </div>

          <div class="col-span-6 flex flex-col gap-2 pt-6">
            <h3 class="text-slate-700 font-medium text-base">Print Resolution</h3>
            <p class="text-slate-500 font-normal text-sm">600 x 600 dpi</p>
          </div>

          <div class="col-span-6 flex flex-col gap-2 pt-6">
            <h3 class="text-slate-700 font-medium text-base">
              Print Quality with Image Refinement Technology
            </h3>
            <p class="text-slate-500 font-normal text-sm pt-6">1,200 × 1,200 dpi (eq.)</p>
          </div>

          <div class="col-span-6 flex flex-col gap-2 pt-6">
            <h3 class="text-slate-700 font-medium text-base">Warm up Time (From Power On)</h3>
            <p class="text-slate-500 font-normal text-sm">13 sec or less</p>
          </div>

          <div class="col-span-6 flex flex-col gap-2 pt-6">
            <h3 class="text-slate-700 font-medium text-base">First Print Out Time (FPOT)</h3>
            <p class="text-slate-500 font-normal text-sm">
              <span> A4: Approx. 10.4/ 10.5 sec (Mono/Colour) </span> <br />
              <span> A4: Approx. 10.4/ 10.5 sec (Mono/Colour) </span>
            </p>
          </div>

          <div class="col-span-6 flex flex-col gap-2 pt-6">
            <h3 class="text-slate-700 font-medium text-base">Recovery Time (From Sleep Mode)</h3>
            <p class="text-slate-500 font-normal text-sm">6.1 sec or less</p>
          </div>

          <div class="col-span-6 flex flex-col gap-2 pt-6">
            <h3 class="text-slate-700 font-medium text-base">Print Language</h3>
            <p class="text-slate-500 font-normal text-sm">UFR II, PCL 6</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
