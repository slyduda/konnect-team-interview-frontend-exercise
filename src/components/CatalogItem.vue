<template>
  <div class="flex flex-col justify-between border rounded-lg border-gray-300 cursor-pointer p-4">
    <p class="text-xl text-blue-700 font-medium mb-2">
        {{ props.name }}
    </p>
    <p class="text-sm text-gray-600 mb-4">{{ props.description }}</p>
    <p class="flex text-sm font-semibold text-gray-900"><div class="text-blue-900 font-semibold mr-2 bg-blue-50 flex justify-center items-center px-2 rounded-full border border-blue-900 text-sm">{{ props.versions.length }}</div> Versions</p>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, withDefaults} from 'vue';
import { Service, ServiceVersion } from '@/@types';

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
</script>

<style>

</style>