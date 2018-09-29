/// <reference types="Cypress" />

context('Login Test', () => {

    it('Should be able to login with valid credentials', () => {
        cy.visit("https://tech.wiki/login/");
        cy.get("#username-117").type("rajvasikarla");
        cy.get("#user_password-117").type("splendor");
        cy.get("#um-submit-btn").click();      
    })
  
    it('Should not be able to login with invalid credentials', () => {
        cy.visit("https://tech.wiki/login/");
        cy.get("#username-117").type("rajvasikarlaa");
        cy.get("#user_password-117").type("splendor");
        cy.get("#um-submit-btn").click();      

        cy.get('.um-notice').should('be.visible');
        cy.get('.um-field-username > .um-field-error').should("be.visible");
        cy.get('.um-field-user_password > .um-field-error').should("be.visible");

    })

  })