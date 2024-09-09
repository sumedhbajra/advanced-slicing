<template>
  <h2 :class="clsx('text-3xl text-primary font-semibold', props.class)"><slot></slot></h2>
  <div
    class="my-4 w-full h-0.5 bg-slate-400 relative after:absolute after:top-0 after:content-[''] after:w-2/5 after:h-full after:bg-red-700"
  />
</template>
<script setup lang="ts">
import { type ClassValue, clsx } from 'clsx'
import { defineProps } from 'vue'
const props = defineProps({
  class: {
    type: String,
    required: true,
    default: 'Default Title'
  }
})
</script>
