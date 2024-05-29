///<reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I navigate to the url", () => {
  cy.visit("/"); //Visits the base URL  defined  in the cypress.config
});

When("I scroll down on the page and click on elemental selenium link", () => {
  cy.get('a[href="http://elementalselenium.com/"]')
    .scrollIntoView()
    .should("be.visible") //To ensure link is visible
    .invoke("removeAttr", "target") //to keep the new tab opened in the same page
    //.click({ force: true });
    .click();
});

When("I Fill in a disposable email {string}", (email) => {
  cy.get("#email")
    .should("be.visible") //To ensure link is visible
    .type(email);
});

When("I Select a language {string}", (language) => {
  cy.get("select")
    .should("be.visible")
    .select(language)
    .should("have.value", "javascript");
  cy.get('[type="submit"]').click();
});

Then("I should see the message {string}", (errorMessage) => {
  cy.get(":nth-child(1) > .error")
    .should("be.visible")
    .should(($el) => {
      expect($el.text().trim()).to.equal(errorMessage);
    });
});
