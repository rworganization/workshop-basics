// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (email, password) => { 
  cy.get('#navbarAccount').click()
  cy.get('#navbarLoginButton').click()
  cy.get('#email').type(email)
  cy.get('#email').should('have.value',email)
  cy.get('#password').type(password)
  cy.get('[aria-label="Button to display the password"]').click()
  cy.get('#password').should('have.value',password)
  cy.get('#rememberMe-input').check({force: true})
  cy.get('#rememberMe-input').should('be.checked')
  cy.get('#loginButton').click()
  cy.contains(' Your Basket').should('be.visible')
 })