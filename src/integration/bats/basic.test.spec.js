/// <reference types="Cypress" />

context('Navigation', () => {
    beforeEach(() => {
      cy.visit('https://tech.wiki/')
    })
  
    it('Navigate to Mission Page', () => {
        cy.visit('https://tech.wiki/mission/') 
    })
  
  })