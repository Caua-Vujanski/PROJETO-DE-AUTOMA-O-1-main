describe('Fluxo Completo - Login e Cadastro', () => {
  
  it('Deve fazer login e cadastrar um curso completo', () => {
  
    cy.visit('https://dev.erp.inovacarreira.com.br/dashboard')
    cy.get('#login-input', { timeout: 10000 }).should('be.visible').type('admin')
    cy.get('#password-input').type('7Y/6p0p\\iYd{')
    cy.get('button[type="submit"]').click()
    cy.url({ timeout: 1000 }).should('include', '/dashboard')
    
    cy.visit('https://dev.erp.inovacarreira.com.br/v2/academico/cursos/criacao')
    cy.wait(100)

    cy.contains('Nome do Curso').scrollIntoView().parent()
      .find('input, textarea').clear().type('TESTE PÓS')
    
    cy.contains('Código do Curso').scrollIntoView().parent()
      .find('input, textarea').clear().type('TST-P')
    
    cy.contains('span', 'Selecione o Nível de Ensino').click()
      cy.contains('div', 'Pós-Graduação').click()
    
    cy.contains('span', 'Selecione o tipo do Curso').click()
      cy.contains('div', 'MBA').click()
    
    cy.contains('span', 'Selecione a Área de conhecimento').click()
      cy.contains('div', 'Engenharias').click()
    
    cy.contains('span', 'Selecione a modalidade').click()
      cy.contains('div', 'Ambas').click()
    
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
    
    cy.contains('span', 'Selecione o colaborador').click()
      cy.contains('div', 'Cauã').click()
    
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
    cy.contains('button', 'Excluir Dados').click();
    cy.wait(500);
    cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click(); 

  })
})