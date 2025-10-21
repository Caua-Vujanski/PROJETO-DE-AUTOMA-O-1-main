describe('Fluxo Completo - Login e Cadastro', () => {
  
  it('Deve fazer login e cadastrar um curso completo', () => {
  
    cy.visit('https://dev.erp.inovacarreira.com.br/dashboard')
    cy.get('#login-input', { timeout: 10000 }).should('be.visible').type('admin')
    cy.get('#password-input').type('7Y/6p0p\\iYd{')
    cy.get('button[type="submit"]').click()
    cy.url({ timeout: 5000 }).should('include', '/dashboard')
    
    cy.visit('https://dev.erp.inovacarreira.com.br/v2/academico/cursos/criacao')
    cy.wait(100)

    cy.contains('Nome do Curso').scrollIntoView().parent()
      .find('input, textarea').clear().type('TESTE PÓS')
    
    cy.contains('Código do Curso').scrollIntoView().parent()
      .find('input, textarea').clear().type('TST-P')
    
    cy.contains('Nível de Ensino').scrollIntoView().parent().find('input, button, [role="combobox"]').first().click()
    cy.get('[role="dialog"]:visible').contains('Pós-Graduação').click();
    
    cy.selecionarOpcaoAleatoriaDireto('Tipo de Curso')
    
    cy.selecionarOpcaoAleatoriaDireto('Área de Conhecimento')
    
    cy.selecionarOpcaoAleatoriaDireto('Modalidade')
    
    cy.contains('Código INEP/MEC').scrollIntoView().parent()
      .find('input, textarea').clear().type(Math.floor(Math.random() * 1000000000).toString())
    
    cy.contains('Habilitação Masculina').scrollIntoView().parent()
      .find('input, textarea').clear().type('TESTE PÓS')
    
    cy.contains('Habilitação Feminina').scrollIntoView().parent()
      .find('input, textarea').clear().type('TESTE PÓS')
    
    cy.contains('Grau Conferido').scrollIntoView().parent()
      .find('input, textarea').clear().type('Bacharel em TESTE')
    
    cy.contains('Vagas Anuais').scrollIntoView().parent()
      .find('input, textarea').clear().type('20')
    
    cy.contains('Início de Funcionamento').scrollIntoView().parent()
      .find('input, textarea').clear().type('01/03/2026')
    
    cy.selecionarOpcaoAleatoriaDireto('Coordenador do Curso')
    
    cy.contains('Descrição do Conhecimento do Curso').scrollIntoView().parent()
      .find('input, textarea').clear()
      .type('TESTE DE PÓS')
    
    cy.get('button[type="submit"]').scrollIntoView().wait(0).click()
    
    cy.wait(100)

    cy.contains('Resolução do Curso').scrollIntoView().parent()
      .find('input, textarea').clear().type('Autorização Exemplo ');

    cy.get('button[type="submit"]').scrollIntoView().wait(500).click();

    cy.wait(100);

 cy.get('button[type="submit"]').scrollIntoView().wait(500).click();

    cy.wait(500);

    cy.wait(500); 
    cy.contains('button', 'Excluir Dados').click();
    cy.wait(500);

  cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click(); 

  })
})