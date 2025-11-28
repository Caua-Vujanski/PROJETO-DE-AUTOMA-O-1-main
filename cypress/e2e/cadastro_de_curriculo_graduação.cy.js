describe('Fluxo de cadastro de curriculos', () => {

it('Deve fazer o cadastro de curriculo e exclusão', () => {

cy.wait(1000) 
 cy.login('admin', '7Y/6p0p\\iYd{')
        cy.visit('https://hml.erp.inovacarreira.com.br/v2/academico/curriculos/criacao')
        
    cy.contains('Nome do Currículo').scrollIntoView().parent()
        .find('input, textarea').clear().type('AUTOMATIZADO')

    cy.contains('Código do Currículo').scrollIntoView().parent()
        .find('input, textarea').clear().type('--AUTO--')

    cy.contains('span', 'Selecione um nivel de ensino').click()
        cy.contains('div', 'Graduação').click()

    cy.contains('span', 'Selecione um módulo').click()
        cy.contains('div', 'Módulo 1').click()

    cy.contains('span', 'Selecione um curso').click()
        cy.contains('div', '2ª GRADUAÇÃO EM ARTES VISUAIS').click()

    cy.contains('Valor total do Currículo').scrollIntoView().parent()
        .find('input, textarea').clear().type('100000')

    cy.contains('Horas Atividade Complementares ').scrollIntoView().parent()
        .find('input, textarea').clear().type('1000')

    cy.contains('Horas Atividades de Extensão').scrollIntoView().parent()
        .find('input, textarea').clear().type('1000')

    cy.contains('Observação').scrollIntoView().parent()
        .find('input, textarea').clear().type('TESTE AUTOMATIZADO')

    cy.contains('button', 'Avançar').click()
        cy.wait(500)

    cy.contains('div', 'ACESSIBILIDADE ASSISTIVAS').click()
    cy.contains('div', 'ACESSIBILIDADE, METODOLOGIAS ATIVAS E ASSISTIVAS').click()
    cy.contains('div', 'ADMINISTRAÇÃO DA PRODUÇÃO').click()
    cy.contains('div', 'ADMINISTRAÇÃO DE COMÉRCIO EXTERIOR').click()

    cy.contains('Button', 'Avançar').click()
    
    cy.contains('span', 'Selecione a Forma da Disciplina').click()
      cy.contains('div', 'Eletiva').click()

    cy.contains('span', 'Tipo da Disciplina').click()
      cy.contains('div', 'Padrão').click()

    cy.contains('span', 'Série').click()
      cy.contains('div', 'Série 1').click()

    cy.contains('Total de Créditos').scrollIntoView().parent()
        .find('input, textarea').clear().type('AUTO-404')

    cy.contains('Nota Mínima para Aprovação (%)').scrollIntoView().parent()
        .find('input, textarea').clear().type('7')

    cy.contains('span', 'Tipo da Nota').click()
      cy.contains('div', 'Média').click()

    cy.contains('Valor da Disciplina').scrollIntoView().parent()
        .find('input, textarea').clear().type('5000')

    cy.contains('Observação').scrollIntoView().parent()
        .find('input, textarea').clear().type('TESTE AUTOMATIZADO')

    cy.contains('Falta Diária?').closest('div')
        .contains('p', 'Sim').click();

    cy.contains('Nota?').closest('div')
        .contains('p', 'Sim').click();
           // cy.wait(1000)

    cy.get('svg.lucide-chevron-right').closest('button').click()


    cy.contains('span', 'Selecione a Forma da Disciplina').click()
      cy.contains('div', 'Optativa').click()

    cy.contains('span', 'Tipo da Disciplina').click()
      cy.contains('div', 'Estágio').click()

    cy.contains('span', 'Série').click()
      cy.contains('div', 'Série 2').click()

    cy.contains('Total de Créditos').scrollIntoView().parent()
        .find('input, textarea').clear().type('AUTO-404')

    cy.contains('Nota Mínima para Aprovação (%)').scrollIntoView().parent()
        .find('input, textarea').clear().type('7')

    cy.contains('span', 'Tipo da Nota').click()
      cy.contains('div', 'Média ponderada').click()

    cy.contains('Valor da Disciplina').scrollIntoView().parent()
        .find('input, textarea').clear().type('5000')

    cy.contains('Observação').scrollIntoView().parent()
        .find('input, textarea').clear().type('TESTE AUTOMATIZADO')

    cy.contains('Falta Diária?').closest('div')
        .contains('p', 'Sim').click();

    cy.contains('Nota?').closest('div')
        .contains('p', 'Sim').click();
            //cy.wait(1000)


    cy.get('svg.lucide-chevron-right').closest('button').click()


    cy.contains('span', 'Selecione a Forma da Disciplina').click()
      cy.contains('div', 'Regular').click()

    cy.contains('span', 'Tipo da Disciplina').click()
      cy.contains('div', 'Extensão').click()

    cy.contains('span', 'Série').click()
      cy.contains('div', 'Série 3').click()

    cy.contains('Total de Créditos').scrollIntoView().parent()
        .find('input, textarea').clear().type('AUTO-404')

    cy.contains('Código da Dependência').scrollIntoView().parent()
        .find('input, textarea').clear().type('DEP-404')

    cy.contains('Dias para realização da DP').scrollIntoView().parent()
        .find('input, textarea').clear().type('100')

    cy.contains('Nota Mínima para Aprovação (%)').scrollIntoView().parent()
        .find('input, textarea').clear().type('7')

    cy.contains('span', 'Tipo da Nota').click()
      cy.contains('div', 'Peso').click()

    cy.contains('Valor da Disciplina').scrollIntoView().parent()
        .find('input, textarea').clear().type('5000')

    cy.contains('Observação').scrollIntoView().parent()
        .find('input, textarea').clear().type('TESTE AUTOMATIZADO')

    cy.contains('Falta Diária?').closest('div')
        .contains('p', 'Sim').click();

    cy.contains('Nota?').closest('div')
        .contains('p', 'Sim').click();
            //cy.wait(1000)


    cy.get('svg.lucide-chevron-right').closest('button').click()    

   
    cy.contains('span', 'Selecione a Forma da Disciplina').click()
      cy.contains('div', 'teste-augusto-v').click()

    cy.contains('span', 'Tipo da Disciplina').click()
      cy.contains('div', 'Extensão').click()

    cy.contains('span', 'Série').click()
      cy.contains('div', 'Série 4').click()

    cy.contains('Total de Créditos').scrollIntoView().parent()
        .find('input, textarea').clear().type('AUTO-404')

    cy.contains('Nota Mínima para Aprovação (%)').scrollIntoView().parent()
        .find('input, textarea').clear().type('7')

    cy.contains('span', 'Tipo da Nota').click()
      cy.contains('div', 'Média').click()

    cy.contains('Valor da Disciplina').scrollIntoView().parent()
        .find('input, textarea').clear().type('5000')

    cy.contains('Observação').scrollIntoView().parent()
        .find('input, textarea').clear().type('TESTE AUTOMATIZADO')

    cy.contains('Falta Diária?').closest('div')
        .contains('p', 'Sim').click();

    cy.contains('Nota?').closest('div')
        .contains('p', 'Sim').click();
            //cy.wait(1000)

    cy.contains('Button', 'Avançar').click()
        cy.wait(500)

    cy.contains('div', 'DESCONTO DE TESTE').click()

    cy.contains('Button', 'Avançar').click()
    cy.contains('Button', 'Concluir').click()
        
    cy.contains('button', 'Excluir Dados').click();
    cy.wait(500);
    cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click();                 

})
    })