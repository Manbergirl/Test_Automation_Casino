describe('Winbet Casino Application', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  });

  it('Verify that the website loads correctly and all elements are displayed correctly:', () => {
   
    cy.get(".main-content .top-navbar__wrapper").should("be.visible")
    cy.get(".main-content .head").should("be.visible")
    cy.get(".main-content .footer-wrapper.mt-0").should("be.visible")
    
  })
 
})