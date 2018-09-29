/// <reference types="Cypress" />

context('Navigation', () => {
    beforeEach(() => {
      cy.visit('https://tech.wiki/')
    })
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
        cy.visit("https://tech.wiki/mission/")        
    })
  
  })