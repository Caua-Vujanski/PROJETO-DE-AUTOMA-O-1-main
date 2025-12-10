describe('Fluxo do cadastro de filial', () => {

    it('Deve Fazer Cadastro de Filial compelto', () => {
        cy.wait(1000)

    cy.login('admin', '7Y/6p0p\\iYd{')
        cy.visit('https://dev.erp.inovacarreira.com.br/v2/configuracoes/sistema/geral/filiais/criacao')


    cy.contains('CNPJ').scrollIntoView().parent()
        .find('input, textarea').clear().type('00.000.000/0000-00')

    cy.contains('Nome da Filia').scrollIntoView().parent()
        .find('input, textarea').clear().type('FILIAL AUTOMATIZADA')

    cy.contains('Código IBGE').scrollIntoView().parent()
        .find('input, textarea').clear().type('AUTO-404')

    cy.contains('Nome Social').scrollIntoView().parent()
        .find('input, textarea').clear().type('--AUTO--')
        
    cy.contains('Razão Social').scrollIntoView().parent()
        .find('input, textarea').clear().type('--AUTO--')

    cy.contains('span', 'Selecione o Gestor').click()
        cy.contains('div', 'Teste Startup').click()

    cy.contains('Digite a Data de Inicio Funcionamento').click()
        cy.contains('div', '27').click()

    cy.contains('button', 'Avançar').click()
   
    cy.contains('Nome da Regional').scrollIntoView().parent()
        .find('input, textarea').clear().type('FILIAL AUTOMATIZADA')

    cy.contains('Código da Regional').scrollIntoView().parent()
        .find('input, textarea').clear().type('AUTO-404')

    cy.contains('Gerente da Regional').scrollIntoView().parent()
        .find('input, textarea').clear().type('GERENTE AUTOMATIZADO')

    cy.contains('Digite o nome da unidade de ensino').click()
        cy.contains('div', 'CENTRO UNIVERSITÁRIO UNIFATECIE - UNIFATECIE').click()
   
    cy.contains('Código MEC').scrollIntoView().parent()
        .find('input, textarea').clear().type('AUTO-404')

    cy.contains('Selecione a modalidade').click()
        cy.contains('div', 'Ambas').click()
    
    cy.contains('Selecione o tipo da filial').click()
        cy.contains('div', 'Megapolo').click()
   
    cy.contains('button', 'Avançar').click()

    cy.contains('CEP').scrollIntoView().parent()
        .find('input, textarea').clear().type('87050730')
        cy.wait(2000)

    cy.contains('Número').scrollIntoView().parent()
        .find('input, texarea').clear().type('000')

    cy.contains('Complemento').scrollIntoView().parent()
        .find('input, textarea').clear().type('UNIFATECIE')
        cy.wait (3000)
    
    cy.contains('button', 'Avançar').click()

    cy.contains('Escolha o Contato').parent().click()
        cy.contains('E-mail').click()

    cy.get('input[placeholder="email@email.com"]').type('automatizado@gmail.com')
    
    cy.contains('Escolha o Cargo').click()
        cy.contains('div', 'Gestor de Filial').click()

    cy.contains('Nome').scrollIntoView().parent()
        .find('input, texarea').clear().type('TESTE AUTOMATIZADO')
        
    cy.contains('button', 'Avançar').click()

    cy.contains('Hibridos').click()
    cy.contains('Habilitação').click()
    cy.contains('Licenciatura').click()
    
    cy.contains('button', 'Avançar').click()
    cy.contains('button', 'Concluir').click()
    cy.wait(1000)
    cy.contains('button', 'Editar Dados').click()
    cy.contains('button', 'Avançar').click()
    cy.get('button[role="switch"]').click()
    cy.contains('button', 'Avançar').click()
    cy.contains('CEP').scrollIntoView().parent()
    .find('input, textarea').clear().type('87020-015')
    cy.wait(3000)
    cy.contains('button', 'Avançar').click()
    cy.contains('button', 'Avançar').click()
    cy.contains('button', 'Avançar').click()
    cy.contains('button', 'Concluir').click()
    cy.contains('button', 'Excluir Dados').click()
    cy.wait(600)
    cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click(); 

    })
})