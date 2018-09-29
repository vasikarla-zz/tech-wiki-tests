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

    it("Should display `Create your technical profile`", () => {
        cy.get('.td_uid_21_5bafcd36da388_rand > :nth-child(1)').should("be.visible");
    });

    it("Should display `Discover What's New`", () => {
        cy.get('.td_uid_23_5bafcd36db425_rand > :nth-child(1)').should("be.visible");
    })

    it("Should display `Get ideas & insights`", () => {
        cy.get('.td_uid_25_5bafcd36dc438_rand > :nth-child(1)').should("be.visible");
    })

    it("Should display `Discover life-changing opportunities`", () => {
        cy.get('.td_uid_31_5bafcd36ddcab_rand > :nth-child(1)').should("be.visible");
    })
    
    it("Should display `Subscribe to our curated list`", () => {
        cy.get('.td_uid_33_5bafcd36decae_rand > :nth-child(1)').should("be.visible");
    })
    
    it("Should display `Share data, create “teams”`", () => {
        cy.get('.td_uid_35_5bafcd36dfcbd_rand > :nth-child(1)').should("be.visible");
    })    
  })