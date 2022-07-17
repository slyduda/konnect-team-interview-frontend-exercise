<template>
  <button type="button" :id="`${props.id}-item`" @click="toggle" class="flex flex-col justify-between text-left border rounded-lg border-gray-300 cursor-pointer p-4 w-full" >
    <p class="text-xl text-blue-700 font-medium mb-2">
        {{ props.name }}
    </p>
    <p class="text-sm text-gray-600 mb-4">{{ props.description }}</p>
    <p class="flex text-sm font-semibold text-gray-900"><div class="text-blue-900 font-semibold mr-2 flex justify-center items-center px-2.5 rounded-full border border-blue-900 text-sm">{{ props.versions.length }}</div> Versions</p>
  </button>
  <div role="dialog" aria-modal="true" :aria-labelledby="`${props.id}-item`" aria-describedby="`${props.name} modal`" v-if="toggled" class="fixed w-screen h-screen top-0 left-0 z-10">
      <div class="bg-black opacity-50 absolute w-full h-full top-0 left-0" @click="toggle"></div>
      <div class="w-full h-full flex justify-center items-center z-20 pl-4 pr-8 sm:pl-12 sm:pr-16">
        <div class="bg-white rounded-xl p-8 z-10 relative">
          <div class="flex items-center">
            <router-link :to="{ name: 'service', params: { id: props.id }}" class="text-xl text-blue-800 font-medium inline mr-2">
              {{ props.name }}
            </router-link>
            <BaseBadge 
              v-if="props.enabled"
              tag="div"
              rounded="lg"
              size="sm"
              class="inline"
            >enabled</BaseBadge>
            <BaseBadge 
              v-else
              tag="div"
              rounded="lg"
              size="sm"
              color="red"
              class="inline"
            >disabled</BaseBadge>
          </div>
          <p class="text-sm mb-4 text-gray-500 font-semibold">
            {{ props.id }}
          </p>
          <p class="mb-4">
            {{ props.description }}
          </p>
          <p class="text-blue-700 font-semibold text-lg">
            Versions ({{ props.versions.length }})
          </p>
          <ul>
            <li v-for="version in props.versions" :key="version.id">
              {{ version.name }} - {{ version.description }}
            </li>
          </ul>
          <button @click="toggle" aria-label="close" class="absolute top-6 right-6 w-10 h-10 flex justify-center items-center">✕</button>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
import {defineProps, withDefaults, ref} from 'vue';
import { Service, ServiceVersion } from '@/@types';
import BaseBadge from './BaseBadge.vue'

interface Props {
  id: string,
  name: string,
  description: string,
  enabled: false,
  versions: ServiceVersion[]
}

const props = withDefaults(defineProps<Props>(), {
  id: "1",
  name: "Default",
  description: "Default Description",
  enabled: false,
  versions: () => [] as ServiceVersion[]
})

const toggled = ref(false)
const toggle = () => toggled.value = !toggled.value
</script>

<style>

</style>