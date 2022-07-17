<template>
  <div class="service-catalog">
    <div>
      <div>
        <h1>Services</h1>
        <KInput
          v-model="searchQuery"
          class="search-input"
          placeholder="Search services"
        />
      </div>
      <KButton>Hi</KButton>
    </div>
    <div>
      <ul
        class="catalog"
      >
        <li
          v-for="service in services"
          :key="service.id"
          class="service"
        >
          <div>
            <p>
              {{ service.name }}
            </p>
            <p>{{ service.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
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
  width: 200px;
  margin: 6px;
  border: 1px solid #999;
  border-radius: 10px;
  padding: 8px 16px;

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
