<template>
  <section class="px-6 mt-8 md:gap-8 gap-4">
    <div class="">
      <Slider></Slider>
    </div>
  </section>
  <section class="px-6">
    <HeadingUnderline class="text-primary">कार्यालय को विवरण</HeadingUnderline>
  </section>
</template>

<script setup lang="ts">
import Slider from '@/components/pages/home/slider.vue'
import Heading from '@/components/utilities/Heading.vue'
import HeadingUnderline from '@/components/utilities/HeadingUnderline.vue'
import { PhClockClockwise, PhArrowCircleRight } from '@phosphor-icons/vue'
</script>
