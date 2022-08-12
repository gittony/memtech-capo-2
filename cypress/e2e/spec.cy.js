describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('h1').should('contain.text', 'hello').should('be.visible')
    cy.get('p').should('contain.text', 'i am fine').should('be.visible')
  })
})