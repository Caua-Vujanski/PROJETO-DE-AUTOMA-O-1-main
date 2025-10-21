describe('Cadastro completo', () =>{

    it ('Deve fazer o cadastro completo', ()=> {

        cy.visit ('https://matriculapos.dev.fatecie.edu.br/inscription')
  //cadastro da primeira pagina
        cy.contains('Nome Completo').scrollIntoView().parent()
        .find('input, textarea').clear().type('Teste Da Silva')
    
           cy.contains('CPF').scrollIntoView().parent()
          .find('input, textarea').clear().type('212.833.650-30')
    
              cy.contains('Telefone').scrollIntoView().parent()
               .find('input, textarea').clear().type('44991015575')

                       cy.contains('Nome Social').scrollIntoView().parent()
                   .find('input, textarea').clear().type('Testinho da Silvinha')
     
                   cy.contains('Data de Nascimento ').scrollIntoView().parent()
              .find('input').clear().type('2000-01-01')
    
           cy.contains('E-mail').scrollIntoView().parent()
    .find('input, textarea').clear().type('teste@gmail.com')

          cy.contains('button', 'Próximo').scrollIntoView().click()

        //cadastro da segundia pagina 

        cy.contains('Digite seu CEP').scrollIntoView().parent()
            .find('input, textarea').clear().type('87020-015')
             cy.wait(1000)

        cy.contains('Número').scrollIntoView().parent()
            .find('input, textarea').clear().type('000')

            cy.contains('Button', 'Próximo').scrollIntoView().click()

        //cadastro pagina final

            cy.contains("div", "ESPECIALIZAÇÃO EM ARQUITETURA E URBANISMO 123").click()
            
            cy.selecionarOpcaoAleatoriaDireto('Estado')
                cy.selecionarOpcaoAleatoriaDireto('Cidade')
                     cy.selecionarOpcaoAleatoriaDireto('Qual polo prefere estudar?')
                        cy.selecionarOpcaoAleatoriaDireto('Planos de Pagamento')
                            cy.selecionarOpcaoAleatoriaDireto('Dia de vencimento das mensalidades')
                        
                        cy.contains('label', 'Pix').click();
                        cy.contains('label', 'Aceito os termos e condições').click();
                         cy.contains('label', 'li e aceito o contrato').click();
    })
    })