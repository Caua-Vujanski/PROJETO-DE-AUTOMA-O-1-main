describe('Deve criar cadastro de usuario mensageria', () => {
    it('Deve Criar um Usuari Mensageria', () => {

        cy.login('admin', '7Y/6p0p\\iYd{');
        cy.wait(500)

        cy.visit('https://dev.erp.inovacarreira.com.br/v2/mensageria/configuracoes/usuarios-mensageria/criacao')
        cy.wait(1000)

        cy.get("input[placeholder='Pesquise...']").type('Cauã Vujanski')

        cy.contains('td', 'Cauã Vujanski').parent().click()
        cy.wait(1000)
        cy.contains('Button', 'Avançar').click()

        cy.contains('BIBLI - Biblioteca EAD').click()
        cy.contains('BIBLI - Outros Assuntos Biblioteca').click()

        cy.contains('Button', 'Avançar').click()

        cy.contains('tr', 'Nome do Curso').find('button[role="checkbox"]').click()
        cy.contains('Button', 'Avançar').click()
        cy.contains('Button', 'Concluir').click()

        cy.contains('button', 'Excluir Dados').click();
        cy.wait(1000);
        cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click()

    })
})