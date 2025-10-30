describe('Cadastro completo', () => {

    it('Deve fazer o cadastro completo', () => {

        cy.visit('https://matriculapos.dev.fatecie.edu.br/inscription')

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

        cy.contains('button', 'Próximo').scrollIntoView().click()


        cy.contains('Digite seu CEP').scrollIntoView().parent()
            .find('input, textarea').clear().type('87020-015')
        cy.wait(1000)

        cy.contains('Número').scrollIntoView().parent()
            .find('input, textarea').clear().type('000')

        cy.contains('Button', 'Próximo').scrollIntoView().click()

        cy.contains("div", "ESPECIALIZAÇÃO EM ARQUITETURA E URBANISMO 123").click()

        cy.selecionarOpcaoAleatoriaDireto('Estado')
        cy.selecionarOpcaoAleatoriaDireto('Cidade')
        cy.selecionarOpcaoAleatoriaDireto('Qual polo prefere estudar?')
        cy.selecionarOpcaoAleatoriaDireto('Planos de Pagamento')
        cy.selecionarOpcaoAleatoriaDireto('Dia de vencimento das mensalidades')
        cy.contains('label', 'Pix').click()
        cy.contains('Possui cupom de desconto?').scrollIntoView().parent()
            .find('input, textarea').clear().type('bolsa100')

        cy.get('[role="checkbox"][data-slot="checkbox"]').eq(0).click();
        cy.get('[role="checkbox"][data-slot="checkbox"]').eq(1).click();
        cy.contains('Button', 'Enviar').scrollIntoView().click()
        

    })
})