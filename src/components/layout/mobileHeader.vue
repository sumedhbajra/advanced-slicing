<script setup lang="ts">
import { ref } from 'vue'
import { Minus, Plus } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'

const goal = ref(350)

type Data = (typeof data)[number]
const data = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 }
]
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button variant="outline"> Open Drawer </Button>
    </DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div class="p-4 pb-0">hello</div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose as-child>
            <Button variant="outline"> Cancel </Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
</template>
