describe('Cadastro completo de disciplinas', ()=>{
it('Deve fazer o cadastro completo de disciplinas', () => {

        cy.login('admin', '7Y/6p0p\\iYd{');
        cy.wait(500)
        cy.visit('https://dev.erp.inovacarreira.com.br/v2/academico/disciplinas/criacao')

    cy.contains('Nome').scrollIntoView().parent()
        .find('input, textarea').clear().type('Teste Disciplinas')

    cy.contains('Código').scrollIntoView().parent()
        .find('input, textarea').clear().type('896571')

    cy.contains('Código Moodle').scrollIntoView().parent()
        .find('input, textarea').clear().type('5455665')

    cy.contains('Carga Horária (h)').scrollIntoView().parent()
        .find('input, textarea').clear().type('120')

    cy.contains('span', 'Selecione um professor').click()
        cy.contains('div', 'ADRIANA CASAVECHIA FRAGALLI').click()

    cy.contains('button', 'Avançar').click()
    cy.wait(1000)
    cy.get('button.ml-auto.w-9').click();

    cy.contains('span', 'Selecione uma opção').click()
        cy.contains('div', 'Avaliação 1').click()









    })
})