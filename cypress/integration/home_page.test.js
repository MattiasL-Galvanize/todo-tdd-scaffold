describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows the correct message when there are no todos', () => {
    cy.get('#no-todos').should('contain', 'Congrats! You have nothing to do!')
  })
})