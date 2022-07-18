// Import types for custom commands
/// <reference types="../../cypress/support" />

import { mount } from '@cypress/vue'
import CatalogItem from './CatalogItem.vue'

// Example component test for ServiceCatalog.vue
// Utilizes Cypress Component Test Runner <https://docs.cypress.io/guides/component-testing/introduction>

describe('CatalogItem', () => {
  it('shows a title', () => {
    mount(CatalogItem)
  })

  it('shows a description', () => {
    mount(CatalogItem)
  })

  it('shows version count', () => {
    mount(CatalogItem)
  })

  it('is clickable', () => {
    mount(CatalogItem)
  })

  it('has correct aria labels and roles if necessary', () => {
    mount(CatalogItem)
  })
})
