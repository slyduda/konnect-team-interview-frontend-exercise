<template>
  <button
    :id="`${props.id}-item`"
    class="flex flex-col justify-between text-left border rounded-lg border-gray-300 cursor-pointer p-4 w-full h-full"
    type="button"
    @click="toggle"
  >
    <p class="text-xl text-blue-700 font-medium mb-2">
      {{ props.name }}
    </p>
    <p class="text-sm text-gray-600 mb-4">
      {{ props.description }}
    </p>
    <div class="flex text-sm font-semibold text-gray-900">
    <span class="text-blue-900 font-semibold mr-2 flex justify-center items-center px-2.5 rounded-full border border-blue-900 text-sm">
      {{ props.versions.length }}
    </span>
    <span>Versions</span>
    </div>
  </button>
  <div
    v-if="toggled"
    aria-describedby="`${props.name} modal`"
    :aria-labelledby="`${props.id}-item`"
    aria-modal="true"
    class="fixed w-screen h-screen top-0 left-0 z-10"
    role="dialog"
  >
    <div
      class="bg-black opacity-50 absolute w-full h-full top-0 left-0"
      @click="toggle"
    />
    <div class="w-full h-full flex justify-center items-center z-20 pl-4 pr-8 sm:pl-12 sm:pr-16">
      <div class="bg-white rounded-xl p-8 z-10 relative">
        <div class="flex items-center">
          <router-link
            class="text-xl text-blue-800 font-medium inline mr-2"
            :to="{ name: 'service', params: { id: props.id }}"
          >
            {{ props.name }}
          </router-link>
          <BaseBadge
            v-if="props.enabled"
            class="inline"
            rounded="lg"
            size="sm"
            tag="div"
          >
            enabled
          </BaseBadge>
          <BaseBadge
            v-else
            class="inline"
            color="red"
            rounded="lg"
            size="sm"
            tag="div"
          >
            disabled
          </BaseBadge>
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
          <li
            v-for="version in props.versions"
            :key="version.id"
          >
            {{ version.name }} - {{ version.description }}
          </li>
        </ul>
        <button
          aria-label="close"
          class="absolute top-6 right-6 w-10 h-10 flex justify-center items-center"
          @click="toggle"
        >
          ✕
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, ref } from 'vue'
import { Service, ServiceVersion } from '@/@types'
import BaseBadge from './BaseBadge.vue'

interface Props {
  id: string,
  name: string,
  description: string,
  enabled: false,
  versions: ServiceVersion[]
}

const props = withDefaults(defineProps<Props>(), {
  id: '1',
  name: 'Default',
  description: 'Default Description',
  enabled: false,
  versions: () => [] as ServiceVersion[],
})

const toggled = ref(false)
const toggle = () => toggled.value = !toggled.value
</script>

<style>

</style>
