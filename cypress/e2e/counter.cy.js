describe('counter test-cases', () => {
  it('visit counter app', () => {
    cy.visit("http://127.0.0.1:5173/")
  });
  // render the app
  it("render the counter app",()=>{
    cy.visit("http://127.0.0.1:5173/");
    cy.get(".App").should("exist");
    cy.get("[data-testid=counter]").should("exist");
    cy.get("[data-testid=addButton]").should("exist");
    cy.get("[data-testid=reduceButton]").should("exist");
  })
  it("check the text and initial value of counter",()=>{
    cy.visit("http://127.0.0.1:5173/");
    cy.get("[data-testid=counter]").should("have.text","Counter:0")
    cy.get("[data-testid=addButton]").should("have.text","Add")
  })
  // check by click event
  it("is count increased to 1",()=>{
    cy.visit("http://127.0.0.1:5173/");
    cy.get("[data-testid=addButton]").click()
    cy.get("[data-testid=counter]").should("have.text","Counter:1")
    cy.get("[data-testid=addButton]").click()
    cy.get("[data-testid=counter]").should("have.text","Counter:2")
  })
})