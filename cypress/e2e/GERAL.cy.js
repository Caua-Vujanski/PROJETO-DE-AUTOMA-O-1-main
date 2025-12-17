describe('Login - Fluxo de Tentativas', () => {
  it('deve tentar 5 vezes com dados inválidos e depois logar com sucesso', () => {
    cy.visit('https://dev.erp.inovacarreira.com.br/login');

    for (let i = 1; i <= 5; i++) {
      const usuarioFake = `user_random_${i}`;
         const senhaFake = `pass_${Math.floor(Math.random() * 10000)}`;
             cy.get('#login-input', { timeout: 10000 })
                .should('be.visible')
                  .clear()
                    .type(usuarioFake);

      cy.get('input[type="password"]')
          .clear()
              .type(senhaFake);

      cy.contains('button', 'Entrar').click();
        cy.log(`Tentativa inválida #${i} concluída`);  
          cy.wait(500); 
    }
    
    cy.contains('Esqueci minha senha').click()
    cy.wait(1000)
    cy.contains('Esqueci minha senha').click()

    cy.log('Iniciando tentativa com credenciais válidas...');
      cy.get('#login-input').clear().type('admin');
        cy.get('input[type="password"]').clear().type('7Y/6p0p\\iYd{');

    cy.contains('button', 'Entrar').click();
      cy.url({ timeout: 10000 }).should('include', '/dashboard');
  });
});


describe('Fluxo Completo - Login e Cadastro', () => {
  
  it('Deve fazer login e cadastrar um curso completo', () => {
  
    cy.visit('https://dev.erp.inovacarreira.com.br/login')
    cy.get('#login-input', { timeout: 10000 }).should('be.visible').type('admin')
    cy.get('#password-input').type('7Y/6p0p\\iYd{')
    cy.get('button[type="submit"]').click()
    cy.url({ timeout: 2000 }).should('include', '/dashboard')
    
    cy.visit('https://dev.erp.inovacarreira.com.br/v2/academico/cursos/criacao')
    cy.wait(100)

    cy.contains('Nome do Curso').scrollIntoView().parent()
      .find('input, textarea').clear().type('TESTE PÓSS')
    
    cy.contains('Código do Curso').scrollIntoView().parent()
      .find('input, textarea').clear().type('TSST-P')
    
    cy.contains('span', 'Selecione o Nível de Ensino').click()
      cy.contains('div', 'Pós-Graduação').click()
    
    cy.contains('span', 'Selecione o tipo do Curso').click()
      cy.contains('div', 'MBA').click()
    
      cy.contains('span', 'Selecione o Grupo').click()
      cy.contains('div', 'Grupo 1').click()
      
    cy.contains('span', 'Selecione a Área de conhecimento').click()
      cy.contains('div', 'Engenharias').click()
    
    cy.contains('span', 'Selecione a modalidade').click()
      cy.contains('div', 'Ambas').click()
    
    cy.contains('Código INEP/MEC').scrollIntoView().parent()
      .find('input, textarea').clear().type(Math.floor(Math.random() * 1000000000).toString())
    
    cy.contains('Habilitação Masculina').scrollIntoView().parent()
      .find('input, textarea').clear().type('TESTE PÓS')
    
    cy.contains('Habilitação Feminina').scrollIntoView().parent()
      .find('input, textarea').clear().type('TESTE PÓS')
    
    cy.contains('Grau Conferido').scrollIntoView().parent()
      .find('input, textarea').clear().type('Bacharel em TESTE')
    
    cy.contains('Vagas Anuais').scrollIntoView().parent()
      .find('input, textarea').clear().type('20')
    
    //cy.contains('Início de Funcionamento').scrollIntoView().parent()
      //.find('input, textarea').clear().type('01/03/2026')
    
    cy.contains('span', 'Selecione o colaborador').click()
      cy.contains('div', 'João José Silva Santos').click()
    
    cy.contains('Descrição do Conhecimento do Curso').scrollIntoView().parent()
      .find('input, textarea').clear()
      .type('TESTE DE PÓS')
    
    cy.contains('button', 'Avançar').click()
    cy.wait(100)

    cy.contains('Resolução do Curso').scrollIntoView().parent()
      .find('input, textarea').clear().type('Autorização Exemplo ');

    cy.contains('button', 'Avançar').click()


    cy.contains('button', 'Concluir').click() 
    cy.contains('button', 'Editar Dados').click()
    cy.wait(1000)
    cy.contains('button', 'Avançar').click()
    cy.wait(1000)
    cy.contains('button', 'Avançar').click()
    cy.wait(1000)
     cy.contains('button', 'Concluir').click() 

    cy.contains('button', 'Excluir Dados').click();
    cy.wait(1000);
    cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click(); 

  })
})

describe('Cadastro no fluxo de colaboradores', () => {

    it('Deve fazer o cadastro completo de um colaborador', () => {

        cy.login('admin', '7Y/6p0p\\iYd{')
        cy.visit('https://dev.erp.inovacarreira.com.br/v2/cadastros/colaboradores/criacao')

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
    cy.contains('button', 'Concluir').click()
    cy.get('#text-input input')
        .type('Cauã Vujanski') 
    cy.wait(500)

    cy.contains('div', 'Cauã Vujanski').click()

    cy.contains('button', 'Excluir Dados').click();
    cy.wait(500);
    cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click();  
    
    })
})

describe('Fluxo de cadastro de curriculos', () => {

it('Deve fazer o cadastro de curriculo de graduação e exclusão', () => {

cy.wait(1000) 
 cy.login('admin', '7Y/6p0p\\iYd{')
        cy.visit('https://dev.erp.inovacarreira.com.br/v2/academico/curriculos/criacao')
        
    cy.contains('Nome do Currículo').scrollIntoView().parent()
        .find('input, textarea').clear().type('TESTE 02 ')

    cy.contains('Código do Currículo').scrollIntoView().parent()
        .find('input, textarea').clear().type('TESTE 02')

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


    //cy.contains('button', 'Editar Dados').click()
     // cy.contains('button', 'Avançar').click()
     // cy.wait(500)
      //cy.contains('button', 'Avançar').click()
      //cy.wait(500)
     // cy.contains('button', 'Avançar').click()
     // cy.wait(500)
     // cy.contains('button', 'Avançar').click()
    //  cy.wait(500)
     // cy.contains('Button', 'Concluir').click()
     // cy.wait(500)  
    cy.contains('button', 'Excluir Dados').click();
    cy.wait(500);
    cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click();                 

})
    })

    describe('Fluxo de cadastro de curriculo de Pós-Graduação', () => {

it('Deve fazer o cadastro de curriculo Pós-Graduação e exclusão', () => {

 cy.login('admin', '7Y/6p0p\\iYd{')
        cy.visit('https://dev.erp.inovacarreira.com.br/v2/academico/curriculos/criacao')
        cy.wait(1000)

    cy.contains('Nome do Currículo').scrollIntoView().parent()
        .find('input, textarea').clear().type('TESTE 02')

    cy.contains('Código do Currículo').scrollIntoView().parent()
        .find('input, textarea').clear().type('TESTE02')

    cy.contains('span', 'Selecione um nivel de ensino').click()
      cy.contains('div', 'Pós-Graduação').click()

    cy.contains('span', 'Selecione um curso').click()
      cy.contains('div', '2° GRADUAÇÃO EM ADMINISTRAÇÃO EAD').click()

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

    cy.get('input[value="0"]').each(($el, index, $list) => {
        cy.wrap($el)
            .type('30', { force: true })
});

    cy.contains('Button', 'Avançar').click()

    cy.contains('div', 'DESCONTO DE TESTE').click()

      cy.contains('Button', 'Avançar').click()
      cy.contains('Button', 'Concluir').click()
      cy.wait(1000)
      //cy.contains('button', 'Editar Dados').click()
      //cy.contains('button', 'Avançar').click()
      //cy.contains('button', 'Avançar').click()
      //cy.contains('button', 'Avançar').click()
      //cy.contains('button', 'Avançar').click()
     // cy.contains('button', 'Avançar').click()
      //cy.contains('Button', 'Concluir').click()


    cy.contains('button', 'Excluir Dados').click();
    cy.wait(500);
    cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click();                 


  
    })
})

describe('Cadastro completo de disciplinas', () => {
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

        cy.contains("label", "Nome da Avaliação").parent().click().within(() => {
            cy.contains("div", "Avaliação 1").click();
        });

        cy.contains('Nota Final').scrollIntoView().parent()
            .find('input, textarea').clear().type('6')


        cy.contains('div', 'Selecione uma opção').click()
        cy.contains('div', 'Média').click()

        cy.contains('button', 'Avançar').click()

        cy.get('button.ml-auto.w-9').click();

        cy.contains('div', 'Selecione uma opção').click()
        cy.contains('div', 'AE 01').click()

        cy.contains('label', 'Nota Final').scrollIntoView().parent()
            .find('input, textarea').clear().type('6')

        cy.contains('Peso').scrollIntoView().parent()
            .find('input, textarea').clear().type('10')

        cy.contains('button', 'Avançar').click()


        cy.contains('span', 'Selecione uma disciplina').click()
        cy.contains('div', 'ADMINISTRAÇÃO DA PRODUÇÃO').click()
        cy.contains('button', 'Avançar').click()
        cy.contains('button', 'Concluir').click()
        cy.wait(2000)

        cy.contains('button', 'Excluir Dados').click();
            cy.wait(500);
        cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click()


    })
})

describe('Fluxo do cadastro de filial', () => {

    it('Deve Fazer Cadastro de Filial compelto', () => {
        cy.wait(1000)

    cy.login('admin', '7Y/6p0p\\iYd{')
        cy.visit('https://dev.erp.inovacarreira.com.br/v2/configuracoes/sistema/geral/filiais/criacao')


    cy.contains('CNPJ').scrollIntoView().parent()
        .find('input, textarea').clear().type('00.000.000/0000-00')

    cy.contains('Nome da Filia').scrollIntoView().parent()
        .find('input, textarea').clear().type('FILIAL AUTOMATIZADA')

    cy.contains('Código IBGE').scrollIntoView().parent()
        .find('input, textarea').clear().type('AUTO-404')

    cy.contains('Nome Social').scrollIntoView().parent()
        .find('input, textarea').clear().type('--AUTO--')
        
    cy.contains('Razão Social').scrollIntoView().parent()
        .find('input, textarea').clear().type('--AUTO--')

    cy.contains('span', 'Selecione o Gestor').click()
        cy.contains('div', 'Teste Startup').click()

    cy.contains('Digite a Data de Inicio Funcionamento').click()
        cy.contains('div', '27').click()

    cy.contains('button', 'Avançar').click()
   
    cy.contains('Nome da Regional').scrollIntoView().parent()
        .find('input, textarea').clear().type('FILIAL AUTOMATIZADA')

    cy.contains('Código da Regional').scrollIntoView().parent()
        .find('input, textarea').clear().type('AUTO-404')

    cy.contains('Gerente da Regional').scrollIntoView().parent()
        .find('input, textarea').clear().type('GERENTE AUTOMATIZADO')

    cy.contains('Digite o nome da unidade de ensino').click()
        cy.contains('div', 'CENTRO UNIVERSITÁRIO UNIFATECIE - UNIFATECIE').click()
   
    cy.contains('Código MEC').scrollIntoView().parent()
        .find('input, textarea').clear().type('AUTO-404')

    cy.contains('Selecione a modalidade').click()
        cy.contains('div', 'Ambas').click()
    
    cy.contains('Selecione o tipo da filial').click()
        cy.contains('div', 'Megapolo').click()
   
    cy.contains('button', 'Avançar').click()

    cy.contains('CEP').scrollIntoView().parent()
        .find('input, textarea').clear().type('87050730')
        cy.wait(2000)

    cy.contains('Número').scrollIntoView().parent()
        .find('input, texarea').clear().type('000')

    cy.contains('Complemento').scrollIntoView().parent()
        .find('input, textarea').clear().type('UNIFATECIE')
        cy.wait (1000)
    
    cy.contains('button', 'Avançar').click()

    cy.contains('Escolha o Contato').parent().click()
        cy.contains('E-mail').click()

    cy.get('input[placeholder="email@email.com"]').type('automatizado@gmail.com')
    
    cy.contains('Escolha o Cargo').click()
        cy.contains('div', 'Gestor de Filial').click()

    cy.contains('Nome').scrollIntoView().parent()
        .find('input, texarea').clear().type('TESTE AUTOMATIZADO')
        
    cy.contains('button', 'Avançar').click()

    cy.contains('Hibridos').click()
    cy.contains('Habilitação').click()
    cy.contains('Licenciatura').click()
    
    cy.contains('button', 'Avançar').click()
    cy.contains('button', 'Concluir').click()
    cy.wait(1000)
    cy.contains('button', 'Editar Dados').click()
    cy.contains('button', 'Avançar').click()
    cy.get('button[role="switch"]').click()
    cy.contains('button', 'Avançar').click()
    cy.contains('CEP').scrollIntoView().parent()
    .find('input, textarea').clear().type('87020-015')
    cy.wait(3000)
    cy.contains('button', 'Avançar').click()
    cy.contains('button', 'Avançar').click()
    cy.contains('button', 'Avançar').click()
    cy.contains('button', 'Concluir').click()
    cy.contains('button', 'Excluir Dados').click()
    cy.wait(600)
    cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click(); 

    })
})

describe('Fluxo completo da criação de mantenedora', () => {
    it('Deve fazer o cadastro completo de uma mantenedora', () => {
cy.wait(1000)
cy.login('admin', '7Y/6p0p\\iYd{')
cy.visit('https://dev.erp.inovacarreira.com.br/v2/configuracoes/sistema/geral/mantenedoras/criacao')  

        
cy.contains('CNPJ').scrollIntoView().parent()
        .find('input, textarea').clear().type('00.000.000/0000-00')

    cy.contains('Nome da Mantenedora').scrollIntoView().parent()
        .find('input, textarea').clear().type('Mantenedora AUTOMATIZADA')

        cy.contains('Sigla').scrollIntoView().parent()
        .find('input, textarea').clear().type('--AUTO--')
    
        cy.contains('Nome Social').scrollIntoView().parent()
        .find('input, textarea').clear().type('--AUTO--')
        
    cy.contains('Código e-MEC/INEP *').scrollIntoView().parent()
        .find('input, textarea').clear().type('AUTO-404')

    cy.contains('Razão Social').scrollIntoView().parent()
        .find('input, textarea').clear().type('--AUTO--')

    cy.contains('button', 'Avançar').click()

    cy.contains('CEP').scrollIntoView().parent()
        .find('input, textarea').clear().type('87020015')
        cy.wait(3000)

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
            .find('input, textarea').clear().type('996.055.630-10')

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
            .find('input, textarea').clear().type('testepessoa@gmail.com')

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
            cy.wait(2000)
        cy.contains('button', 'Excluir Dados').click();
        cy.wait(500);
        cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click();

    })

})

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

describe('Deve criar cadastro de usuario mensageria', () => {
    it('Deve Criar um Usuario Mensageria', () => {

        cy.login('admin', '7Y/6p0p\\iYd{');
            cy.wait(500)

        cy.visit('https://dev.erp.inovacarreira.com.br/v2/mensageria/configuracoes/usuarios-mensageria/criacao')
            cy.wait(1000)

        cy.get("input[placeholder='Pesquise...']").type('Teste Automatizado')

        cy.contains('td', 'Teste Automatizado').parent().click()
            cy.wait(1000)

        cy.contains('Button', 'Avançar').click()

        cy.contains('BIBLI - Biblioteca EAD').click()
        cy.contains('BIBLI - Outros Assuntos Biblioteca').click()

        cy.contains('Button', 'Avançar').click()

        cy.contains('tr', 'Nome do Curso').find('button[role="checkbox"]').click()


        cy.contains('Button', 'Avançar').click()
        cy.contains('Button', 'Concluir').click()
            cy.wait(1000)
        cy.contains('Button', 'Editar Dados').click()
        cy.wait(1000)
        cy.contains('Button', 'Avançar').click()
        cy.wait(1000)
        cy.contains('Button', 'Avançar').click()
            cy.wait(1000)
        cy.contains('Button', 'Voltar').click()
            cy.wait(1000)

        cy.contains('button', 'Cancelar operação').click();
            cy.wait(1000);
        cy.get('[role="dialog"]:visible').contains('button', 'Descartar dados').click()
        cy.contains('button', 'Excluir Dados').click();
            cy.wait(1000);
        cy.get('[role="dialog"]:visible').contains('button', 'Excluir').click()

    })
})