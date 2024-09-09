<template>
  <header class="lg:px-14 py-4 text-sm">
    <nav v-if="!isTablet" class="flex justify-between text-slate-600">
      <div class="flex gap-6">
        <router-link to="/foo" class="flex gap-1 cursor-pointer hover:text-red-900 items-center">
          <PhArticle :size="24" weight="thin" /> Online Application</router-link
        >
        <router-link to="/foo" class="flex gap-1 cursor-pointer hover:text-red-900 items-center">
          <PhFileArchive :size="24" weight="thin" /> Old Application</router-link
        >
        <router-link to="/foo" class="flex gap-1 cursor-pointer hover:text-red-900 items-center">
          <PhListNumbers :size="24" weight="thin" />Total Marks</router-link
        >
      </div>
      <div class="flex gap-6 justify-end">
        <router-link to="/foo" class="flex gap-1 cursor-pointer hover:text-red-900 items-center">
          <PhEnvelope :size="24" weight="thin" />Mail</router-link
        >
        <router-link to="/foo" class="flex gap-1 cursor-pointer hover:text-red-900 items-center">
          <PhDeviceMobile :size="24" weight="thin" /> Mobile App</router-link
        >
        <router-link to="/foo" class="flex gap-1 cursor-pointer hover:text-red-900 items-center">
          <PhFacebookLogo :size="24" weight="thin" />Facebook</router-link
        >
      </div>
    </nav>
    <div v-else class="flex justify-between px-6">
      <img :src="Govlogo" alt="" />
      <Drawer>
        <DrawerTrigger>
          <Button variant="outline"> <PhList :size="24" weight="regular" /> </Button>
        </DrawerTrigger>
        <DrawerContent class="h-[80vh]">
          <Tabs default-value="account" class="w-full">
            <DrawerHeader>
              <DrawerTitle>
                <TabsList>
                  <TabsTrigger value="menu"> Menu </TabsTrigger>
                  <TabsTrigger value="application"> Application </TabsTrigger>
                </TabsList>
              </DrawerTitle>
              <TabsContent value="application">
                <nav class="flex flex-col justify-between gap-6 mt-8 text-slate-600">
                  <div class="flex gap-6 flex-col">
                    <router-link
                      to="/foo"
                      class="flex gap-1 cursor-pointer hover:text-red-900 items-center"
                    >
                      <PhArticle :size="24" weight="thin" /> Online Application</router-link
                    >
                    <router-link
                      to="/foo"
                      class="flex gap-1 cursor-pointer hover:text-red-900 items-center"
                    >
                      <PhFileArchive :size="24" weight="thin" /> Old Application</router-link
                    >
                    <router-link
                      to="/foo"
                      class="flex gap-1 cursor-pointer hover:text-red-900 items-center"
                    >
                      <PhListNumbers :size="24" weight="thin" />Total Marks</router-link
                    >
                  </div>
                  <div class="flex gap-6 justify-end flex-col">
                    <router-link
                      to="/foo"
                      class="flex gap-1 cursor-pointer hover:text-red-900 items-center"
                    >
                      <PhEnvelope :size="24" weight="thin" />Mail</router-link
                    >
                    <router-link
                      to="/foo"
                      class="flex gap-1 cursor-pointer hover:text-red-900 items-center"
                    >
                      <PhDeviceMobile :size="24" weight="thin" /> Mobile App</router-link
                    >
                    <router-link
                      to="/foo"
                      class="flex gap-1 cursor-pointer hover:text-red-900 items-center"
                    >
                      <PhFacebookLogo :size="24" weight="thin" />Facebook</router-link
                    >
                  </div>
                </nav>
              </TabsContent>
              <TabsContent value="menu">
                <Menu></Menu>
              </TabsContent>
            </DrawerHeader>
          </Tabs>
        </DrawerContent>
      </Drawer>
    </div>
  </header>
  <div class="px-6">
    <nav class="px-4 py-3 rounded-lg flex gap-6 bg-primary items-center w-full">
      <img src="https://psc.gov.np/assets/public/images/nepal_flag.gif" width="40" height="48" />
      <img :src="pointerSvg" alt="" class="hidden lg:block" />
      <div class="grow relative">
        <div class="absolute -translate-y-3 w-full">
          <div class="enable-animation" @mouseenter="toggleAnimation" @mouseleave="toggleAnimation">
            <div class="marquee text-slate-100">
              <ul class="marquee__content">
                <li
                  class="cursor-pointer hover:text-red-200"
                  v-for="data in MarqueeList"
                  :key="data"
                >
                  <router-link to="/" class="flex gap-2"
                    ><PhArrowCircleRight :size="24" weight="regular" /> {{ data }}</router-link
                  >
                </li>
              </ul>

              <ul aria-hidden="true" class="marquee__content">
                <li
                  class="cursor-pointer hover:text-red-200"
                  v-for="data in MarqueeList"
                  :key="data"
                >
                  <router-link to="/" class="flex gap-2"
                    ><PhArrowCircleRight :size="24" weight="regular" /> {{ data }}</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img :src="Psclogo" alt="" />
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  PhArticle,
  PhFileArchive,
  PhListNumbers,
  PhEnvelope,
  PhDeviceMobile,
  PhFacebookLogo,
  PhArrowCircleRight,
  PhList
} from '@phosphor-icons/vue'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

import pointerSvg from '@/assets/static-svg/pointer.svg'
import Psclogo from '@/assets/static-svg/psclogo.svg'
import Govlogo from '@/assets/static-svg/logoGov.svg'
import { useMediaQueryState } from '@/composables/useMediaQuery'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import Menu from '@/components/layout/menu.vue'

const toggleAnimation = (event: any) => {
  event?.target?.classList?.toggle('marquee--hover-pause')
}

const isTablet = useMediaQueryState('xxs', 'lg')

const MarqueeList: Array<string> = [
  '1आ.व. २०८१/०८२ को पदपूर्ति सम्बन्धी वार्षिक कार्यतालिका',
  '2आ.व. २०८१/०८२ को पदपूर्ति सम्बन्धी वार्षिक कार्यतालिका',
  '3आ.व. २०८१/०८२ को पदपूर्ति सम्बन्धी वार्षिक कार्यतालिका',
  '4आ.व. २०८१/०८२ को पदपूर्ति सम्बन्धी वार्षिक कार्यतालिका',
  '5आ.व. २०८१/०८२ को पदपूर्ति सम्बन्धी वार्षिक कार्यतालिका',
  '6आ.व. २०८१/०८२ को पदपूर्ति सम्बन्धी वार्षिक कार्यतालिका',
  '7आ.व. २०८१/०८२ को पदपूर्ति सम्बन्धी वार्षिक कार्यतालिका',
  '8आ.व. २०८१/०८२ को पदपूर्ति सम्बन्धी वार्षिक कार्यतालिका'
]
</script>

<style scoped>
.marquee {
  --gap: 3rem;
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  gap: var(--gap);
  min-width: 100%;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

/* Pause animation when reduced-motion is set */
@media (prefers-reduced-motion: reduce) {
  .marquee__content {
    animation-play-state: paused !important;
  }
}

/* Enable animation */
.enable-animation .marquee__content {
  animation: scroll 30s linear infinite;
}

/* Reverse animation */
.marquee--reverse .marquee__content {
  animation-direction: reverse;
}

/* Pause on hover */
.marquee--hover-pause:hover .marquee__content {
  animation-play-state: paused;
}

/* Attempt to size parent based on content. Keep in mind that the parent width is equal to both content containers that stretch to fill the parent. */
.marquee--fit-content {
  max-width: fit-content;
}

/* A fit-content sizing fix: Absolute position the duplicate container. This will set the size of the parent wrapper to a single child container. Shout out to Olavi's article that had this solution 👏 @link: https://olavihaapala.fi/2021/02/23/modern-marquee.html  */
.marquee--pos-absolute .marquee__content:last-child {
  position: absolute;
  top: 0;
  left: 0;
}

/* Enable position absolute animation on the duplicate content (last-child) */
.enable-animation .marquee--pos-absolute .marquee__content:last-child {
  animation-name: scroll-abs;
}

@keyframes scroll-abs {
  from {
    transform: translateX(calc(100% + var(--gap)));
  }
  to {
    transform: translateX(0);
  }
}
</style>
