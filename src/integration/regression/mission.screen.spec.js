/// <reference types="Cypress" />

context('Mission Screen Test Suite', () => {

    it('Should be able to load the Mission Screen', () => {
        cy.visit("https://tech.wiki/mission/");
    });
  
    it("Should be able to check for `Transform Your Life With Knowledge`", () => {
        cy.get(':nth-child(2) > .wpb_wrapper > .td-fix-index > h4 > span').should("be.visible");    
    });
   
  })