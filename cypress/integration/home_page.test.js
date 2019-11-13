describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows the correct message when there are no todos', () => {
    cy.get('#no-todos').should('contain', 'Congrats! You have nothing to do!')
  })

  it('allows me to add a todo', () => {
    const myTodo = 'Some_todo'
    cy.get('.todo').should('have.length', 0)
    cy.get('input#todo').type(myTodo)
    cy.get('#add-todo')
      .should('contain', 'Add Todo')
      .click()
    cy.get('.todo').should('contain', myTodo)
    cy.get('#no-todos').should('have.length', 0)
  })
})