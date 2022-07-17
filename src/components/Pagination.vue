<template>
  <div>
    <ul :class='classes'>
      <li v-if="!items.length">
        Loading...
      </li>
      <li v-for="item in items" :key="item.id">
        <slot name="item" v-bind="item"></slot>
      </li>
    </ul>
    <div>
      {{ pages }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps(['amount', 'classes', 'items'])
const currentPage = ref(1)
</script>

<style>

</style>