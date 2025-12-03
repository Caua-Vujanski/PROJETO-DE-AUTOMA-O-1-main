describe('Cadastro no fluxo de colaboradores', () => {

    it('Deve fazer o cadastro completo de um colaborador', () => {

        cy.login('admin', '7Y/6p0p\\iYd{')
        cy.visit('https://hml.erp.inovacarreira.com.br/v2/cadastros/colaboradores/criacao')

    cy.get('#text-input input')
        .type('Cauã Vujanski')  
    cy.contains('Cauã Vujanski').click()
    cy.contains('button', 'Avançar').click()
    cy.contains('button', 'Avançar').click()

    cy.contains('span', 'Selecione o tipo de contratação...').click()
        cy.contains('div', 'CLT').click()

    cy.contains('span', 'Selecione o cargo...').click()
        cy.contains('div','Reitor').click()

    cy.contains('span', 'Selecione o nível de escolaridade...').click()
        cy.contains('div', 'Ensino Fundamental').click()

    cy.contains('span', 'Selecione a validação de pagamento...').click()
        cy.contains('div', 'Holerite').click()

    cy.contains('span', 'Selecione o PCD...').click()
        cy.contains('div', 'Não').click()

    cy.contains('button', 'Avançar').click()

    cy.contains('div', 'ALCÂNTARAS - CE').click()
    cy.contains('div', 'ALFENAS-MG').click()
    cy.contains('div', 'ALMIRANTE TAMANDARÉ-PR').click()
    cy.contains('div', 'ALTO ARAGUAIA - MT').click()
    
    cy.contains('button', 'Avançar').click()




    })
})