<script setup lang="ts">
// import { useMediaQueryState } from '@/composables/useMediaQuery'
// const isTablet = useMediaQueryState('xxs', 'lg')
</script>

<template>
  <div>
    <main class="col-span-12 lg:col-span-10">
      <Header></Header>
      <div>
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style></style>
