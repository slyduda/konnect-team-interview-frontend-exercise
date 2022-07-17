<template>
  <div class="service-catalog">
    <div>
      <div class="flex w-full justify-between mb-4 items-end">
        <h1 class="text-3xl font-bold text-blue-900">Services</h1>
        <BaseButton rounded color="blue" size="sm">Add New Service</BaseButton>
      </div>
      <div class="flex w-full justify-between mb-12">
        <KInput
          v-model="searchQuery"
          class="search-input"
          placeholder="Search services"
        />
      </div>
    </div>
    <div>
      <Pagination
        :classes="`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8`"
        :amount="20"
        :items="services"
      >
        <template v-slot:item="{ id, name, description, enabled, versions }">
          <CatalogItem
            :id="id"
            :name="name"
            :description="description"
            :enabled="enabled"
            :versions="versions"
            class="service"
          />
        </template>
      </Pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import CatalogItem  from './CatalogItem.vue';
import Pagination from './Pagination.vue';
import BaseButton from './BaseButton.vue';
import useServices from '@/composables/useServices'

// Import services from the composable
const { services, loading } = useServices()

// Set the search string to a Vue ref
const searchQuery = ref('')

</script>

<style lang="scss" scoped>
.service-catalog {
  max-width: 1366px;
  margin: 2rem auto;
  padding: 0 20px;
}

.catalog {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
  list-style: none;
}

.service {

  p:first-of-type {
    color: #333;
    font-weight: 700;
  }

  p {
    color: #666;
  }
}

input {
  padding: 8px 4px;
}
</style>
