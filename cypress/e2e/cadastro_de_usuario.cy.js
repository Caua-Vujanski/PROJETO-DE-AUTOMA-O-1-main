describe('Cadastro de Usuario', () => {
    it('Deve fazer o cadastro de Usuario', () => {

        cy.login('admin', '7Y/6p0p\\iYd{');
        cy.visit('https://dev.erp.inovacarreira.com.br/v2/controle-de-acesso/usuarios/criacao')
        cy.wait(1000)

        cy.get("input[placeholder='Pesquise...']").type('Teste Automatizado')
        cy.contains("Teste Automatizado").click()
        
        cy.contains('Button', 'Avançar').click()

        cy.contains('Mensageria').click()
        cy.contains('Financeiro').click()
        cy.contains('Requerimento').click()

        cy.contains('Button', 'Avançar', '').click().contains('Avançar').click()

        cy.contains('BIBLIOTECA').click()
        cy.contains('Button', 'Avançar', '').click()
        cy.contains('Button', 'Concluir', '').click()

        cy.contains('button', 'Excluir Dados').click();
        cy.wait(500);
        cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click()

    })
})