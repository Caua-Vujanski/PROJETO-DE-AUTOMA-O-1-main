describe('Fluxo de Cadastro de Unidades de Ensino', () => {

    it('Deve fazer o cadastro compelto de Unidades de Ensino', () => {


cy.login('admin', '7Y/6p0p\\iYd{')
cy.visit('https://dev.erp.inovacarreira.com.br/v2/configuracoes/sistema/geral/unidades-de-ensino/criacao')


    cy.contains('CNPJ').scrollIntoView().parent()
        .find('input, textarea').clear().type('00.000.000/0000-00')

    cy.contains('Nome da Unidade de Ensino').scrollIntoView().parent()
        .find('input, textarea').clear().type('Unidade de Ensino AUTOMATIZADA')
    
        cy.contains('Nome Social').scrollIntoView().parent()
        .find('input, textarea').clear().type('--AUTO--')
        
    cy.contains('Código e-MEC/INEP *').scrollIntoView().parent()
        .find('input, textarea').clear().type('AUTO-404')

    cy.contains('Razão Social').scrollIntoView().parent()
        .find('input, textarea').clear().type('--AUTO--')

    cy.contains('span', 'Selecione a Mantenedora').click()
        cy.contains('div', 'CENTRO EDUCACIONAL FATECIE LTDA').click()

    cy.contains('button', 'Avançar').click()

    cy.contains('CEP').scrollIntoView().parent()
        .find('input, textarea').clear().type('87020-015')
        cy.wait(2000)

    cy.contains('Número').scrollIntoView().parent()
        .find('input, texarea').clear().type('000')

    cy.contains('Complemento').scrollIntoView().parent()
        .find('input, textarea').clear().type('UNIFATECIE')

    cy.contains('button', 'Avançar').click()

   cy.contains('Escolha o Contato').parent().click()
        cy.contains('E-mail').click()

    cy.get('input[placeholder="email@email.com"]').type('automatizado@gmail.com')

    cy.contains('Escolha o Cargo').click()
        cy.contains('div', 'Gestor de Filial').click()
    
    cy.contains('Nome').scrollIntoView().parent()
        .find('input, texarea').clear().type('TESTE AUTOMATIZADO')

    cy.contains('button', 'Avançar').click()
    cy.contains('button', 'Concluir').click()
    cy.contains('button', 'Editar Dados').click()
    cy.contains('button', 'Avançar').click()

    cy.contains('CEP').scrollIntoView().parent()
        .find('input, textarea').clear().type('87050-730')
        cy.wait(2000)

    cy.contains('button', 'Avançar').click()

    cy.contains('button', 'Avançar').click()
    cy.contains('button', 'Concluir').click()
    cy.contains('button', 'Excluir Dados').click()
    cy.wait(600)
    cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click(); 




    })
})