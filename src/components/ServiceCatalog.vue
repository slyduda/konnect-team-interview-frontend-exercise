<template>
  <div class="service-catalog">
    <div>
      <div class="flex w-full justify-between mb-4 items-end">
        <h1 class="text-3xl font-bold text-blue-900">
          Services
        </h1>
        <BaseButton
          color="blue"
          rounded
          size="sm"
        >
          Add New Service
        </BaseButton>
      </div>
      <div class="flex w-full justify-between mb-12 w-72">
        <KInput
          v-model="searchQuery"
          class="search-input w-100"
          placeholder="Search services"
          @input="updateServices"
        />
      </div>
    </div>
    <div>
      <Pagination
        :amount="12"
        :classes="`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8`"
        :items="filtered"
        :loading="loading"
      >
        <template #item="{ id, name, description, enabled, versions }">
          <CatalogItem
            :id="id"
            class="service"
            :description="description"
            :enabled="enabled"
            :name="name"
            :versions="versions"
          />
        </template>
      </Pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, ref, Ref, watch } from 'vue'
import { debounce } from '@/composables/useDebounce'
import CatalogItem from './CatalogItem.vue'
import Pagination from './Pagination.vue'
import BaseButton from './BaseButton.vue'
import useServices from '@/composables/useServices'
import { Service } from '@/@types'

// Import services from the composable
interface UseServices {
  services: Ref<Service[]>,
  loading: Ref<boolean>
}
const { services, loading }: UseServices = useServices()

// Set the search string to a Vue ref
const searchQuery = ref('')
const filtered: Ref<Service[]> = ref([])
const filtering = ref(false)

const filter = () => {
  filtered.value = services.value.filter(
    (service: Service) => Object.values(service).some(
      (property: any) => typeof property === 'string' && property.toLowerCase().includes(searchQuery.value.toLowerCase(),
      ),
    ),
  )
  filtering.value = false
}

watch(loading, (loading, prevLoading) => filter())
const updateServices = debounce(filter, 1000)
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
