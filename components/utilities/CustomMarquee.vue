<template>
  <div class="marquee-wrapper" :style="wrapperStyle">
    <div class="marquee-content" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  direction: {
    type: String,
    default: 'left' // 'left', 'right', 'up', 'down'
  },
  speed: {
    type: Number,
    default: 50 // Speed in pixels per second
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  }
})

const wrapperRef = ref(null)
const contentRef = ref(null)
const scrollDistance = ref(0)
const wrapperStyle = ref({})
const contentStyle = ref({})

onMounted(() => {
  const wrapper = wrapperRef.value
  const content = contentRef.value

  // Set the content width or height based on direction
  if (props.direction === 'left' || props.direction === 'right') {
    content.style.width = `${content.scrollWidth}px`
    wrapper.style.width = `${wrapper.clientWidth}px`
    scrollDistance.value = content.scrollWidth
  } else {
    content.style.height = `${content.scrollHeight}px`
    wrapper.style.height = `${wrapper.clientHeight}px`
    scrollDistance.value = content.scrollHeight
  }

  startMarquee()
})

function startMarquee() {
  const animationName = `scroll-${props.direction}`
  const duration = scrollDistance.value / props.speed

  contentStyle.value = {
    animation: `${animationName} ${duration}s linear infinite`
  }

  if (props.pauseOnHover) {
    wrapperStyle.value = {
      overflow: 'hidden'
    }
  }
}
</script>

<style scoped>
.marquee-wrapper {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

.marquee-content {
  display: inline-block;
}

@keyframes scroll-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes scroll-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

@keyframes scroll-down {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
</style>
