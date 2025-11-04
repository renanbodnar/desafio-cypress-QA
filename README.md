# Desafio de Testes Automatizados - Cypress

O desafio consiste em propor a automatização de uma funcionalidade (processo completo de compra de um produto) do site http://lojaebac.ebaconline.art.br/ utilizando o framework **Cypress**.

---

## Instalação das dependências

1. **Clone o repositório**:
   git clone https://github.com/renanbodnar/desafio-cypress-QA.git

2. **Acesse o diretório do projeto**:
   cd desafio-cypress-QA

3. **Instale as dependências necessárias**:
   npm install

---

## Execução dos testes (como rodar)

### 🔹 Rodar os testes no modo interativo (Cypress GUI)

npx cypress open

O painel do Cypress será aberto. Após isso, selecionar a opção E2E Testing, escolher o navegador e acessar o teste compra.spec

---

## Estrutura do projeto

```
desafio-cypress-QA
├── cypress/
│   ├── e2e/                
│   │   ├── compra.spec.cy.js       
│   │             
│   ├── fixtures/           
│   ├── support/            
├── cypress.config.js
├── package.json
└── README.md
```

---

Cenários Automatizados
-------------------------

| Cenário | Descrição |
|----------|------------|
| Acesso à página de testes | Garante que o site da loja possa ser acessado corretamente. |
| Escolha de produto com base em tamanho e cor | Simula a seleção de um item específico. |
| Botão de compra | Testa se o botão “Comprar” adiciona o produto corretamente ao carrinho. |
| Login | Valida o processo de autenticação do usuário durante a finalização da compra. |
| Preenchimento de formulário | Assegura que todos os campos obrigatórios de dados pessoais e endereço possam ser preenchidos sem erros. |
| Finalização da compra | Confirma que o pedido é concluído com sucesso e que a mensagem de confirmação é exibida. |