// https://on.cypress.io/api

describe('Sanity Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('#app .hero h2', 'Get your next')
  })
})
