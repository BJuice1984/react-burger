describe("service is available", () => {
  it("should be available on localhost:3000", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("first ingridient is available", () => {
  it("should first ingridient have been loaded", () => {
    cy.visit("http://localhost:3000");
    cy.get('[test-cy="ingredient"]').first().click({ force: true });
    cy.contains("Детали ингредиента");
    cy.get("body").type("{esc}");
  });
});

describe("auth user is available", () => {
  it("should user have been authorized", () => {
    cy.visit("http://localhost:3000/sign-in");
    cy.get("input[name=email]").click().type("ilyas@mail.ru");
    cy.get("input[name=password]").click().type("123456");
    cy.contains("button", "Войти").click();
    cy.location("pathname", { timeout: 5000 }).should("eq", "/");
  });
});

// describe("ingridients is available", () => {
//   it("should ingridients have been loaded", () => {
//     cy.intercept({
//       method: "GET",
//       path: "https://norma.nomoreparties.space/api/ingredients/",
//     }).as("getIngredients");
//     cy.visit("http://localhost:3000");
//     // cy.intercept("GET", "api/ingredients", { fixture: "ingredients.json" });
//     cy.wait("@getIngredients").then((interception) => {
//       expect(interception.statusCode).to.eq(200);
//     });
//     cy.get('[data-cy="buns-list"]').as("buns");
//     cy.get('[data-cy="sauses-list"]').as("sauses");
//     cy.get('[data-cy="mains-list"]').as("mains");
//     cy.get("@buns").should("have.length", 2);
//     cy.get("@sauses").should("have.length", 4);
//     cy.get("@mains").should("have.length", 9);
//   });
// });

// describe("ingridients is available", () => {
//   it("should ingridients have been loaded", () => {
//     cy.intercept({
//       method: "GET",
//       path: "https://norma.nomoreparties.space/api/ingredients/",
//     }).as("getIngredients");
//     cy.wait("@getIngredients").then((interception) => {
//       expect(interception.statusCode).to.eq(200);
//     });
//   });
// });
