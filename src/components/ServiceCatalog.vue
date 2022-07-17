<template>
  <div class="service-catalog">
    <div>
      <div>
        <h1 class="text-3xl font-bold text-blue-900">Services</h1>
        <KInput
          v-model="searchQuery"
          class="search-input"
          placeholder="Search services"
        />
      </div>
      <KButton>Search More</KButton>
    </div>
    <div>
      <ul
        class="catalog"
      >
        <CatalogItem
          v-for="service in services"
          :key="service.id"
          :id="service.id"
          :name="service.name"
          :description="service.description"
          :enabled="service.enabled"
          :versions="service.versions"
          class="service"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import CatalogItem  from './CatalogItem.vue';
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
  width: 240px;
  margin-right: 24px;
  margin-bottom: 24px;

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
