describe("DnD is available", () => {
  beforeEach(() => {
    cy.viewport(1280, 900);
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "/api/ingredients", { fixture: "ingredients.json" });
  });

  it("should be make order and close modal", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Флюоресцентная булка R2-D3").trigger("dragstart");
    cy.get('[test-cy="burger-constructor"]').trigger("drop");
    cy.contains("Филе Люминесцентного тетраодонтимформа").trigger("dragstart");
    cy.get("p[class^=counter__num]");
    cy.contains("2");
    cy.get('[test-cy="burger-constructor"]').trigger("drop");
    cy.contains("Соус традиционный галактический").trigger("dragstart");
    cy.get("p[class^=counter__num]").last();
    cy.contains("1");
    cy.get('[test-cy="burger-constructor"]').trigger("drop");
    cy.contains("button", "Оформить заказ").click();
    cy.location("pathname").then(($pathname) => {
      if ($pathname == "/sign-in") {
        cy.get("input[name=email]")
          .click()
          .type("ilyas@mail.ru", { delay: 100 });
        cy.get("input[name=password]").click().type("123456");
        cy.contains("button", "Войти").click();
      }
    });
    cy.contains("button", "Оформить заказ").click();
    cy.get('[test-cy="modal-order"]', { timeout: 17000 }).should("exist");
    cy.contains("Ваш заказ начали готовить");
    cy.get('[test-cy="modal-close"]').click();
  });
});
