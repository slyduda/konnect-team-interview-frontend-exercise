<template>
  <div>
    <ul v-if="props.loading">
      <li>
        Loading...
      </li>
    </ul>
    <ul v-else :class="[props.classes]">
      <li v-for="item in items.slice((currentPage-1)*amount, currentPage*amount )" :key="item.id" >
        <slot name="item" v-bind="item" ></slot>
      </li>
    </ul>
    <div v-if="!props.loading" class="mt-8 w-full flex justify-center text-sm text-blue-700 font-semibold">
      <div class="flex max-w-md w-full justify-between">
        <button :class="[{'bg-blue-50': currentPage != 1 }, {'bg-gray-100': currentPage != 1 }]" class="w-12 flex justify-center rounded-full bg-blue-50 w-12 h-12 flex justify-center items-center border border-blue-700" @click="decrease">←</button>
        <div class="flex justify-center items-center">{{ amount * (currentPage - 1) }} - {{ amount * currentPage }} of {{ items.length }}</div>
        <button :class="[{'bg-blue-50': currentPage < totalPages}, {'bg-gray-100': currentPage >= totalPages}]" class="w-12 flex justify-center rounded-full w-12 h-12 flex justify-center items-center border border-blue-700" @click="increase">→</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, withDefaults, computed } from 'vue'
import {Service} from '@/@types';

interface Props {
  amount: number,
  classes?: string,
  items: Service[],
  loading: boolean
}

const props = withDefaults(defineProps<Props>(), {
  amount: 0,
  classes: '',
  items:() => [] as Service[],
  loading: false
})

const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(props.items.length/props.amount))
const increase = () => { if (currentPage.value < totalPages.value) currentPage.value++ }
const decrease = () => { if (currentPage.value !== 1) currentPage.value-- }
</script>

<style>

</style>