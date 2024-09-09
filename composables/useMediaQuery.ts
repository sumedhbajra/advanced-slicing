import { useMediaQuery } from '@vueuse/core'

export function useMediaQueryState(min: string, max: string) {
  let low: number = 0
  let high: number = 0

  const breakpoints = [
    { key: 'xxs', value: 0 },
    { key: 'xs', value: 450 },
    { key: 'sm', value: 485 },
    { key: 'md', value: 768 },
    { key: 'lg', value: 1074 },
    { key: 'xl', value: 1200 },
    { key: 'xxl', value: 1440 },
    { key: 'xxxl', value: 16000 }
  ]
  breakpoints.forEach((item) => {
    if (min == item.key) {
      low = item.value
    }
    if (max == item.key) {
      high = item.value
    }
  })

  const target = (low: number, high: number) => {
    return useMediaQuery(`(min-width:${low}px) and (max-width:${high}px)`)
  }

  return target(low, high)
}
