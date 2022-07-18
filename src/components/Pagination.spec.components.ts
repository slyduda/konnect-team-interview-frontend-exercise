// Import types for custom commands
/// <reference types="../../cypress/support" />

import { mount } from '@cypress/vue'
import Pagination from './Pagination.vue'

// Example component test for ServiceCatalog.vue
// Utilizes Cypress Component Test Runner <https://docs.cypress.io/guides/component-testing/introduction>

describe('Pagination', () => {
  it('includes clickable components at bottom when it includes items', () => {
    mount(Pagination)
  })
})
