/// <reference types="Cypress" />

context('Mission Screen Test Suite', () => {

    it('Should be able to load the Mission Screen', () => {
        cy.visit("https://tech.wiki/mission/");
    });
  
    it("Should be able to check for `Transform Your Life With Knowledge`", () => {
        cy.get(':nth-child(2) > .wpb_wrapper > .td-fix-index > h4 > span').should("be.visible");    
    });

    it("Should display `Create your Techwiki profile`", () => {
        cy.get('.td_uid_22_5bafc86eb03cd_rand > :nth-child(1)').should("be.visible");
    });

    it("Should display `Network with other experts`", () => {
        cy.get('.td_uid_24_5bafc86eb1553_rand > :nth-child(1)').should("be.visible");
    })

    it("Should display `Follow updates on web & mobile`", () => {
        cy.get('.td_uid_26_5bafc86eb258a_rand > :nth-child(1)').should("be.visible");
    })

    it("Should display `Store data + collaborate in the cloud`", () => {
        cy.get('.td_uid_28_5bafc86eb359f_rand').should("be.visible");
    })
    
  })