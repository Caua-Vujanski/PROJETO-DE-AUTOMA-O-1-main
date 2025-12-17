describe('Login - Fluxo de Tentativas', () => {
  it('deve tentar 5 vezes com dados inválidos e depois logar com sucesso', () => {
    cy.visit('https://dev.erp.inovacarreira.com.br/login');

    for (let i = 1; i <= 5; i++) {
      const usuarioFake = `user_random_${i}`;
         const senhaFake = `pass_${Math.floor(Math.random() * 10000)}`;
             cy.get('#login-input', { timeout: 10000 })
                .should('be.visible')
                  .clear()
                    .type(usuarioFake);

      cy.get('input[type="password"]')
          .clear()
              .type(senhaFake);

      cy.contains('button', 'Entrar').click();
        cy.log(`Tentativa inválida #${i} concluída`);  
          cy.wait(500); 
    }
    
    cy.contains('Esqueci minha senha').click()
    cy.wait(1000)
    cy.contains('Esqueci minha senha').click()

    cy.log('Iniciando tentativa com credenciais válidas...');
      cy.get('#login-input').clear().type('admin');
        cy.get('input[type="password"]').clear().type('7Y/6p0p\\iYd{');

    cy.contains('button', 'Entrar').click();
      cy.url({ timeout: 10000 }).should('include', '/dashboard');
  });
});