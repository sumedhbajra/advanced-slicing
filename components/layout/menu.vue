<template>
  <Accordion
    type="single"
    class="w-full flex flex-col gap-6 !border-0"
    collapsible
    :default-value="defaultValue"
  >
    <ul class="flex flex-col">
      <li v-for="item in accordionItems" :key="item.id">
        <template v-if="item.inner">
          <AccordionItem :key="item.value" :value="item.value" class="border-0 py-2">
            <AccordionTrigger class="p-0 font-regular font-normal text-sm px-6 !no-underline">{{
              item.title
            }}</AccordionTrigger>
            <AccordionContent class="px-0 pb-0">
              <ul class="flex flex-col acc-container">
                <li v-for="items in item.inner" class="acc-container-li px-6 mt-2">
                  <router-link :to="items.link" class="block p-[2px] sidebar-accordian">
                    <p class="sidebar-link sidebar-link-acc">
                      {{ items.item }}
                    </p>
                  </router-link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </template>
        <template v-else>
          <router-link class="block text-sm px-6 py-2" :to="item.href">
            <p class="sidebar-link">
              {{ item.title }}
            </p>
          </router-link>
        </template>
      </li>
    </ul>
  </Accordion>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

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
