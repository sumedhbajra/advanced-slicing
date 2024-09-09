import Swiper from 'swiper'

export default function useSlider(settings: object, target: string, prev?: string, next?: string) {
  const swiper = new Swiper(target, settings)

  if (prev && next) {
    const prevButton: any = document.querySelector(prev)
    const nextButton: any = document.querySelector(next)
    prevButton.addEventListener('click', () => {
      swiper.slidePrev()
    })

    nextButton.addEventListener('click', () => {
      swiper.slideNext()
    })
  }
  // add event listeners to the buttons
}

// .testimonialPrev-btn

// .testimonialNext-btn
