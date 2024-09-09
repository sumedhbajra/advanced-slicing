<!-- eslint-disable vue/valid-v-for -->
<template>
  <header class="py-6">
    <div class="px-8">
      <img :src="Govlogo" alt="" />
    </div>
    <div class="mt-6 flex-col gap-6">
      <Menu></Menu>
    </div>
  </header>
</template>

<script setup lang="ts">
import Govlogo from '@/assets/static-svg/logoGov.svg'

import { PhArticle } from '@phosphor-icons/vue'

import Pointer from '@/assets/static-svg/pointer.svg'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { link } from 'fs'

import Menu from './menu.vue'

type Inner = {
  title: string
  href: string
}

type Outer = {
  title: string
  href?: string
  children?: Inner[]
}

const defaultValue = 'item-1'

const accordionItems: any = [
  {
    id: 3,
    value: 'item-3',
    title: 'Home',
    href: '/'
  },
  {
    id: 1,
    value: 'item-1',
    title: 'About',
    inner: [
      {
        id: 1,
        item: 'Mission',
        link: '/about'
      },
      {
        id: 2,
        item: 'Vison',
        link: '/test'
      }
    ]
  },
  {
    id: 2,
    value: 'item-2',
    title: 'Contact',
    inner: [
      {
        id: 1,
        item: 'Number',
        link: '/number'
      },
      {
        id: 2,
        item: 'Map',
        link: '/map'
      }
    ]
  }
]
</script>

<style></style>
