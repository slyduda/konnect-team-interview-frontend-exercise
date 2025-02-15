// Import types for custom commands
/// <reference types="../../cypress/support" />

import { mount } from '@cypress/vue'
import ServiceCatalog from './ServiceCatalog.vue'

// Example component test for ServiceCatalog.vue
// Utilizes Cypress Component Test Runner <https://docs.cypress.io/guides/component-testing/introduction>

describe('ServiceCatalog', () => {
  it('shows a search input', () => {
    mount(ServiceCatalog)

    cy.get('.search-input').should('be.visible').invoke('attr', 'placeholder').should('eq', 'Search services')
  })

  it('shows a button to add a new service', () => {
    mount(ServiceCatalog)
  })

  it('shows a list of all services', () => {
    mount(ServiceCatalog)
  })
})
