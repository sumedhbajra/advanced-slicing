<template>
  <div class="relative">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      @swiper="onSwiper"
      :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="i in 3" :key="i" class="landing">
        <div class="w-full rounded-md relative h-screen overflow-hidden">
          <img :src="Img" class="rounded-md w-full object-cover h-full" alt="" />
        </div>
      </swiper-slide>
    </swiper>
    <div class="absolute place-nav top-12 right-6">
      <div class="relative flex items-center gap-4">
        <div class="swiper-button-prev !static"></div>
        <div class="swiper-button-next !static"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Swiper as SwiperInstance } from 'swiper/types'
import Img from '@/assets/demoimage.png'

// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Setup functions
const onSwiper = (swiper: SwiperInstance) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}

// Setup module array
const modules = ref([Navigation, Pagination, Scrollbar, A11y])

onMounted(() => {
  // Swiper's navigation buttons will automatically pick up the custom elements
  console.log('Swiper mounted')
})
</script>

<style>
/* .swiper-button-next {
  right: 0 !important;
  transform: translateX(50%);
}
.swiper-button-prev {
  left: 0 !important;
  transform: translateX(-50%);
}

.swiper-button-next:after {
  font-size: 16px;
  padding: 8px 8px;
  background: rgba(0, 0, 0, 0.835) !important;
  color: white !important;
}
.swiper-button-prev:after {
  font-size: 16px;
  padding: 8px 8px;
  background: rgba(0, 0, 0, 0.835) !important;
  color: white !important;
} */

.swiper-button-prev,
.swiper-button-next {
  width: 24px;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  line-height: 44px;
  font-size: 8px;
  cursor: pointer;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 16px;
}
</style>
