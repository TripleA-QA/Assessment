///<reference types="cypress" />

import  { Given, Then, When }  from "@badeball/cypress-cucumber-preprocessor";

Given('I navigate to the url' , () => {
    cy.visit('/') 
})

When('I scroll down on the page and click on elemental selenium link {linkText}', (linkText)  => {
    //cy.get('a[href="http://elementalselenium.com/"]')
    cy.get('a:contains("${LinkText}")')
    .scrollIntoView()
    .invoke("removeAttr", "target")  //to keep the new tab opened in the same page
    .click({force: true})
})

When('I Fill in a disposable email "{emailAddress}"', (emailAddress)  => {
    cy.get('#email').type(emailAddress);
})

When('I Select a language' , () => {
    cy.get('select').select('JavaScript').should('have.value', 'javascript')
    cy.get('[type="submit"]').click()

})

Then('I should see the error message' , () => {
    cy.get(':nth-child(1) > .error').then(($el) => {
        expect($el.text().trim()).to.equal('Email is on a high-bounce domain. Please enter another email address.');
      })

    })