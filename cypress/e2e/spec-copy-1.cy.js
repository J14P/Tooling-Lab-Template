describe(`template spec`, () => {
  it(`passes`, () => {
    //Type my name
    // eslint-disable-next-line no-undef
    cy.get(`.action-email`).type(`Jackson Pinchot`, { delay: 100}).should(`have.value`, `Jackson Pinchot`)
    // Select a choice from a dropdown menu
    // eslint-disable-next-line no-undef
    cy.get(`.action-select`).should(`have.value`, `--Select a Fruit--`)
    // Select an item
    // eslint-disable-next-line no-undef
    cy.get(`.action-select`).select(`Apples`)
    // Confirm Apples was Selected
    // eslint-disable-next-line no-undef
    cy.get(`.action-select`).should(`have.value`, `fr-apples`)

  })
})