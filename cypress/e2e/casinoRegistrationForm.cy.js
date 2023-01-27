describe('Verify that the user can successfully register an account', () => {
    beforeEach(() => {
      cy.visit(Cypress.config().baseUrl)
    });

    it('Verify that the user can successfully add FirstName:', () => {
  
        cy.visit("https://winbet.bg/registration")
        cy.get(':nth-child(1) > .form-group > #input-wrapper > .input-group > .form-control').type('Beatris')
       
    })

    it.only('Verify that the user can successfully add SecondName:', () => {
        cy.visit("https://winbet.bg/registration")
        cy.get(':nth-child(2) > .form-group > #input-wrapper > .input-group > .form-control').type('Dimitrova')
    })
    // cy.get('.form-select__toggler .form-select__toggler-icon').select('5')
})