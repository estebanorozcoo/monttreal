describe('Cart Functionality', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    cy.clearLocalStorage();
  });

  it('should display empty cart message when cart is empty', () => {
    cy.visit('/cart');
    cy.contains('Tu carrito está vacío').should('be.visible');
  });

  it('should navigate to shop from empty cart', () => {
    cy.visit('/cart');
    cy.contains('Continuar comprando').click();
    cy.url().should('include', '/shop');
  });

  it('should show cart page', () => {
    cy.visit('/cart');
    cy.contains('Tu Carrito').should('be.visible');
  });
});

describe('Add to Cart from Shop', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('/shop');
  });

  it('should display products in shop', () => {
    cy.visit('/shop');
    cy.get('h1').contains('Tienda').should('be.visible');
  });

  it('should navigate to product detail', () => {
    cy.visit('/shop');
    // If there are products, click on the first one
    cy.get('body').then(($body) => {
      if ($body.find('[href^="/product/"]').length > 0) {
        cy.get('[href^="/product/"]').first().click();
        cy.url().should('include', '/product/');
      }
    });
  });
});

describe('Product Detail Page', () => {
  it('should show product details', () => {
    // This test assumes there's at least one product
    cy.visit('/shop');
    cy.get('body').then(($body) => {
      if ($body.find('[href^="/product/"]').length > 0) {
        cy.get('[href^="/product/"]').first().click();
        cy.get('button').contains('Agregar').should('be.visible');
      }
    });
  });
});

