describe('Cadastro completo', () => {

    it('Deve fazer o cadastro completo', () => {

        cy.visit('https://lp-polo-dev.inovacarreira.com.br/inscription?polo=K9ClolJAp3j+I+H0E7bcuQ==')

        cy.contains('Nome Completo').scrollIntoView().parent()
            .find('input, textarea').clear().type('Silva Da Silva')

        cy.contains('CPF').scrollIntoView().parent()
            .find('input, textarea').clear().type('813.697.670-80')

        cy.contains('Telefone').scrollIntoView().parent()
            .find('input, textarea').clear().type('44444444444')

        cy.contains('Nome Social').scrollIntoView().parent()
            .find('input, textarea').clear().type('Silvinha da Silvinha')

        cy.contains('Data de Nascimento ').scrollIntoView().parent()
            .find('input').clear().type('2000-01-01')

        cy.contains('E-mail').scrollIntoView().parent()
            .find('input, textarea').clear().type('silva@gmail.com')

        cy.contains('button', 'Avançar').scrollIntoView().click()


        cy.contains('Digite seu CEP').scrollIntoView().parent()
            .find('input, textarea').clear().type('87020-015')
        cy.wait(1000)

        cy.contains('Número').scrollIntoView().parent()
            .find('input, textarea').clear().type('000')

       cy.contains('Button', 'Avançar').scrollIntoView().click()

       cy.get('button[role="combobox"]').contains('Selecione um curso').click();
        cy.contains('BACHARELADO EM ADMINISTRAÇÃO').should('be.visible').click();

         cy.get('button[role="combobox"]').contains('Selecione o plano de pagamento').click();
        cy.contains('47 x 66').should('be.visible').click();

        cy.get('button[role="combobox"]').contains('Selecione o dia de vencimento').click();
        cy.contains('10').should('be.visible').click();
       
        cy.contains('Cupom').scrollIntoView().parent()
            .find('input, textarea').clear().type('1REALGRADUACAOEAD')

        cy.contains('span', 'Selecione um polo presencial').click()
            cy.contains('div', 'MARINGÁ (MEGA POLO) - PR').click()



    })
})