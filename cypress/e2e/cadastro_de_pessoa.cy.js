
describe('Cadastro de Pessoa', () => {
    it('Deve fazer o cadastro completo', () => {
        cy.login('admin', '7Y/6p0p\\iYd{');
        cy.visit('https://dev.erp.inovacarreira.com.br/v2/controle-de-acesso/pessoas/criacao')
        //step 1
        cy.contains('Nome Completo').scrollIntoView().parent()
            .find('input, textarea').clear().type('Pessoa de teste')

        cy.contains('Nome Social').scrollIntoView().parent()
            .find('input, textarea').clear().type('pessoa teste')

        cy.contains('span', 'Selecione a raça...').click()
        cy.contains('div', 'Parda').click()

        cy.contains('span', 'Selecione o gênero...').click()
        cy.contains('div', 'Masculino').click()

        cy.contains('Data de Nascimento').scrollIntoView().parent()
            .find('input').clear().type('01/01/2000')

        cy.contains('Documentos').scrollIntoView().parent().click()
            .find('input, textarea').clear().type('904.353.170-75')

        cy.contains('button', 'Avançar').scrollIntoView().click()

        //step 2

        cy.contains('CEP').scrollIntoView().parent()
            .find('input, textarea').clear().type('87050720')

        cy.contains('Número').scrollIntoView().parent().click()
            .find('input, textarea').clear().type('855')
        cy.wait(1000)

        cy.contains('button', 'Avançar').scrollIntoView().click()

        //step 3

        cy.contains('Valor').scrollIntoView().parent()
            .find('input, textarea').clear().type('testeautomatizado@gmail.com')

        cy.get(':contains("Valor")').parent()
            .find('input, textarea').eq(1).clear().type('(99) 99999-9999');
            
        cy.contains('button', 'Avançar').scrollIntoView().click()
        cy.wait(1000)

        //aq começa a fase com CEP UNICO
        
        cy.contains('button', 'Voltar').scrollIntoView().click()
        cy.wait(200)
        cy.contains('button', 'Voltar').scrollIntoView().click()
        cy.wait(200)

        cy.contains('CEP').scrollIntoView().parent()
            .find('input, textarea').clear().type('83.490-000')
        cy.wait(2000)

        cy.contains('label', 'Endereço').next('div')
            .find('input').clear().type('Av.Londrina')

        cy.contains('Bairro').scrollIntoView().parent().click()
            .find('input, textarea').clear().type('Zona 09')

        cy.contains('button', 'Avançar').scrollIntoView().click()
        cy.contains('button', 'Avançar').scrollIntoView().click()

        cy.contains('button', 'Concluir').scrollIntoView().click()
        cy.contains('button', 'Excluir Dados').click();
        cy.wait(500);
        cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click();

    })

})