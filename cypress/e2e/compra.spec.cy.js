Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('template spec', () => {
  it('passes', () => {
    // acessando a pagina de teste
    cy.visit('http://lojaebac.ebaconline.art.br/')
    // indo para a area de produtos
    cy.get('#primary-menu a[href="http://lojaebac.ebaconline.art.br/produtos/"]').click();
    // escolhendo um modelo aleatorio e suas especificacoes
    cy.get('#content div[data-product-id="3111"] h3.name a').click();
    cy.get('#product-3111 li.button-variable-item-XL').click();
    cy.get('#product-3111 li.button-variable-item-Yellow').click();
    // clicando em comprar
    cy.get('#product-3111 button.alt').click();
    // acessando o carrinho de compras
    cy.get('#content a.wc-forward').click();
    // encaminhando para a finalizacao da compra
    cy.get('#main a.alt').click();
    // acessando area de login
    cy.get('#main a.showlogin').click();
    // passando as credenciais e logando
    cy.get('[name="username"]').click();
    cy.get('[name="username"]').type('cypress_register@test.com');
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').type('Randon_key!2025');
    cy.get('#main [name="login"]').click();
    // preenchendo dados de compra
    cy.get('[name="billing_first_name"]').click();
    cy.get('[name="billing_first_name"]').clear().type('cytester');
    cy.get('[name="billing_last_name"]').clear().type('jr');
    cy.get('[name="billing_address_1"]').clear().type('rua cypress,123');
    cy.get('[name="billing_city"]').clear().type('São Paulo');
    cy.get('[name="billing_postcode"]').clear().type('00000000');
    cy.get('[name="billing_phone"]').clear().type('00000000000');
    cy.get('#payment_method_cod').check();
    cy.get('[name="terms"]').check();
    // finalizacao do pedido
    cy.get('[name="woocommerce_checkout_place_order"]').click();
  })
})