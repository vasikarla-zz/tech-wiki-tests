/// <reference types="Cypress" />

context('Home Screen Test Suite', () => {

    it('Should be able to load the Home Screen', () => {
        cy.visit("https://tech.wiki/");
    });
  
    it("Should be able to check for `A social experience for all things tech`", () => {
        cy.get('.vc_custom_1538042696550 > .td-fix-index > h1 > span').should("be.visible");    
    });

    it("Should be able to check for `AGGREGATED, PERSONALIZED, MADE SEARCHABLE`", () => {
        cy.get('h5 > span').should("be.visible");    
    });

    it("Shold be able to bring up `Sign Up` when clicked on 'Learn More'", () => {
        cy.get('.vc_general').click();
        cy.get('.vc_custom_1538196378773 > .td-fix-index > h1 > span').should("be.visible");
        cy.get('.um-field-user_login > .um-field-label > label').should("be.visible");
        cy.get('#user_login-476').should("be.visible");
        cy.get('.um-field-user_email > .um-field-label > label').should("be.visible");
        cy.get('#user_email-476').should("be.visible");
        cy.get('div[data-key="user_password"] > .um-field-label > label').should("be.visible");
        cy.get('#user_password-476').should("be.visible");
        cy.get('div[data-key="confirm_user_password"] > .um-field-label > label').should("be.visible");
        cy.get('#confirm_user_password-476').should("be.visible");
        cy.get('#um-submit-btn').should("be.visible");
    });   
  });