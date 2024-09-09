<template>
  <div class="bg-blue-100 flex items-center border-s-4 rounded-sm py-2 border-primary">
    <component :is="icon" v-if="!props.plain" class="shrink-0 text-primary ml-2" weight="bold" />
    <p class="text-sm text-primary ml-2"><slot></slot></p>
  </div>
</template>
<script setup lang="ts">
import { PhClockClockwise } from '@phosphor-icons/vue'
import { defineProps } from 'vue'
const props = defineProps({
  //   title: {
  //     type: String,
  //     required: true,
  //     default: 'Default Title'
  //   },
  icon: {
    type: Object,
    required: false,
    default: PhClockClockwise
  },
  plain: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>
