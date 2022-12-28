describe('Pokedex', function() {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be opened', () => {
    cy.contains('ivysaur').click()
    cy.url().should('eq', 'http://localhost:8080/pokemon/ivysaur')
    cy.contains('chlorophyll')
  })
})