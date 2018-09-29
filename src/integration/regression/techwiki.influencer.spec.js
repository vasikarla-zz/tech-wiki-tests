/// <reference types="Cypress" />

context('Home Screen Test Suite', () => {

    it('Should be able to load the techwiki-influencer Screen', () => {
        cy.visit("https://tech.wiki/techwiki-influencer/");
    });
  
    it("Should be able to check for `If you are in the tech industry, tech.wiki is the place to be`", () => {
        cy.get('.entry-title > span').should("be.visible");    
    });

  });