
describe('Vai procurar o elemento, se existir vai entrar e apagar, caso não exista ele passara para o proximo', () => {
    it('Deve procurar e apagar TESTE AUTOMATIZADO CURSO', () => {
        cy.login('admin', '7Y/6p0p\\iYd{')
            cy.visit('https://dev.erp.inovacarreira.com.br/v2/academico/cursos/listagem')
                cy.get("input[placeholder='Pesquisar...']").should('be.visible').type('TESTE AUTOMATIZADO CURSO{enter}')
                    cy.wait(2000) 
                        cy.get('body').then(($body) => {
            if ($body.find(':contains("TESTE AUTOMATIZADO CURSO")').length > 0) {
                
                cy.contains('TESTE AUTOMATIZADO CURSO').should('be.visible').click()    
                
                cy.contains('button', 'Excluir Dados').should('be.visible').click()
                
                cy.get('[role="dialog"]').should('be.visible').within(() => {
                    cy.contains('button', 'Excluir').click()
                })

                cy.log('Registro excluído com sucesso!')
            } else {
                cy.log('Registro não foi encontrado, pulando para o próximo...')
            }
        })
    })
})
    


describe('Vai procurar o elemento, se existir vai entrar e apagar, caso não exista ele passara para o proximo', () => {
    it('Deve procurar e apagar TESTE AUTOMATIZADO PÓS', () => {
        cy.login('admin', '7Y/6p0p\\iYd{')
            cy.visit('https://dev.erp.inovacarreira.com.br/v2/academico/curriculos/listagem')
                cy.get("input[placeholder='Pesquisar...']").should('be.visible').type('TESTE AUTOMATIZADO PÓS{enter}')
                    cy.wait(2000) 
                        cy.get('body').then(($body) => {
            if ($body.find(':contains("TESTE AUTOMATIZADO PÓS")').length > 0) {
                
                cy.contains('TESTE AUTOMATIZADO PÓS').should('be.visible').click()    
                
                cy.contains('button', 'Excluir Dados').should('be.visible').click()
                
                cy.get('[role="dialog"]').should('be.visible').within(() => {
                    cy.contains('button', 'Excluir').click()
                })

                cy.log('Registro excluído com sucesso!')
            } else {
                cy.log('Registro não foi encontrado, pulando para o próximo...')
            }
        })
    })
})

describe('Vai procurar o elemento, se existir vai entrar e apagar, caso não exista ele passara para o proximo', () => {
    it('Deve procurar e apagar TESTE AUTOMATIZADO GRADUAÇÃO', () => {
        cy.login('admin', '7Y/6p0p\\iYd{')
            cy.visit('https://dev.erp.inovacarreira.com.br/v2/academico/curriculos/listagem')
                cy.get("input[placeholder='Pesquisar...']").should('be.visible').type('TESTE AUTOMATIZADO GRADUAÇÃO{enter}')
                    cy.wait(2000) 
                        cy.get('body').then(($body) => {
            if ($body.find(':contains("TESTE AUTOMATIZADO GRADUAÇÃO")').length > 0) {
                
                cy.contains('TESTE AUTOMATIZADO GRADUAÇÃO').should('be.visible').click()    
                
                cy.contains('button', 'Excluir Dados').should('be.visible').click()
                
                cy.get('[role="dialog"]').should('be.visible').within(() => {
                    cy.contains('button', 'Excluir').click()
                })

                cy.log('Registro excluído com sucesso!')
            } else {
                cy.log('Registro não foi encontrado, pulando para o próximo...')
            }
        })
    })
})


describe('Vai procurar o elemento, se existir vai entrar e apagar, caso não exista ele passara para o proximo', () => {
    it('Deve procurar e apagar Teste Disciplinas', () => {
        cy.login('admin', '7Y/6p0p\\iYd{')
            cy.visit('https://dev.erp.inovacarreira.com.br/v2/academico/disciplinas/listagem')
                cy.get("input[placeholder='Pesquisar...']").should('be.visible').type('Teste Disciplinas{enter}')
                    cy.wait(2000) 
                        cy.get('body').then(($body) => {
            if ($body.find(':contains("Teste Disciplinas")').length > 0) {
                
                cy.contains('Teste Disciplinas').should('be.visible').click()    
                
                cy.contains('button', 'Excluir Dados').should('be.visible').click()
                
                cy.get('[role="dialog"]').should('be.visible').within(() => {
                    cy.contains('button', 'Excluir').click()
                })

                cy.log('Registro excluído com sucesso!')
            } else {
                cy.log('Registro não foi encontrado, pulando para o próximo...')
            }
        })
    })
})



describe('Vai procurar o elemento, se existir vai entrar e apagar, caso não exista ele passara para o proximo', () => {
    it('Deve procurar e apagar Cauã Vujanski', () => {
        cy.login('admin', '7Y/6p0p\\iYd{')
            cy.visit('https://dev.erp.inovacarreira.com.br/v2/cadastros/colaboradores/listagem')
                cy.get("input[placeholder='Pesquisar...']").should('be.visible').type('Cauã Vujanski{enter}')
                    cy.wait(2000) 
                        cy.get('body').then(($body) => {
            if ($body.find(':contains("Cauã Vujanski")').length > 0) {
                
                cy.contains('Cauã Vujanski').should('be.visible').click()    
                
                cy.contains('button', 'Excluir Dados').should('be.visible').click()
                
                cy.get('[role="dialog"]').should('be.visible').within(() => {
                    cy.contains('button', 'Excluir').click()
                })

                cy.log('Registro excluído com sucesso!')
            } else {
                cy.log('Registro não foi encontrado, pulando para o próximo...')
            }
        })
    })
})


describe('Vai procurar o elemento, se existir vai entrar e apagar, caso não exista ele passara para o proximo', () => {
    it('Deve procurar e apagar Teste Automatizado', () => {
        cy.login('admin', '7Y/6p0p\\iYd{')
            cy.visit('https://dev.erp.inovacarreira.com.br/v2/mensageria/configuracoes/usuarios-mensageria/listagem')
                cy.get("input[placeholder='Pesquisar...']").should('be.visible').type('Teste Automatizado{enter}')
                    cy.wait(2000) 
                        cy.get('body').then(($body) => {
            if ($body.find(':contains("Teste Automatizado")').length > 0) {
                
                cy.contains('Teste Automatizado').should('be.visible').click()    
                
                cy.contains('button', 'Excluir Dados').should('be.visible').click()
                
                cy.get('[role="dialog"]').should('be.visible').within(() => {
                    cy.contains('button', 'Excluir').click()
                })

                cy.log('Registro excluído com sucesso!')
            } else {
                cy.log('Registro não foi encontrado, pulando para o próximo...')
            }
        })
    })
})


describe('Controle de Acesso - Excluir Pessoa', () => {
    it('Deve pesquisar e apagar ', () => {

        cy.login('admin', '7Y/6p0p\\iYd{')
        cy.visit('https://dev.erp.inovacarreira.com.br/v2/controle-de-acesso/pessoas/listagem')

        cy.get("input[placeholder='Pesquisar...']", { timeout: 10000 })
            .should('be.visible')
            .clear()
            .type('Pessoa de teste{enter}')

        cy.wait(3000)

        cy.get('body').then(($body) => {
            const regex = new RegExp("Pessoa de teste", "i")
            
            if (regex.test($body.text())) {
                cy.log('Registro encontrado! Iniciando exclusão...')

                cy.contains('Pessoa de teste', { matchCase: false })
                    .first()
                    .scrollIntoView()
                    .click({ force: true })

                cy.contains('button', 'Excluir Dados', { timeout: 10000 })
                    .should('be.visible')
                    .click()

                cy.get('[role="dialog"]:visible', { timeout: 10000 }).within(() => {
                    cy.contains('button', 'Excluir').click()
                })

                cy.log('Registro excluído com sucesso!')
            } else {
                cy.log('O registro "Pessoa de teste" não foi encontrado na listagem.')
            }
        })
    })
})


describe('Vai procurar o elemento, se existir vai entrar e apagar, caso não exista ele passara para o proximo', () => {
    it('Deve procurar e apagar FILIAL AUTOMATIZADA', () => {
        cy.login('admin', '7Y/6p0p\\iYd{')
            cy.visit('https://dev.erp.inovacarreira.com.br/v2/configuracoes/sistema/geral/filiais/listagem')
                cy.get("input[placeholder='Pesquisar...']").should('be.visible').type('FILIAL AUTOMATIZADA{enter}')
                    cy.wait(2000) 
                        cy.get('body').then(($body) => {
            if ($body.find(':contains("FILIAL AUTOMATIZADA")').length > 0) {
                
                cy.contains('FILIAL AUTOMATIZADA').should('be.visible').click()    
                
                cy.contains('button', 'Excluir Dados').should('be.visible').click()
                
                cy.get('[role="dialog"]').should('be.visible').within(() => {
                    cy.contains('button', 'Excluir').click()
                })

                cy.log('Registro excluído com sucesso!')
            } else {
                cy.log('Registro não foi encontrado, pulando para o próximo...')
            }
        })
    })
})

describe('Vai procurar o elemento, se existir vai entrar e apagar, caso não exista ele passara para o proximo', () => {
    it('Deve procurar e apagar Unidade de Ensino AUTOMATIZADA', () => {
        cy.login('admin', '7Y/6p0p\\iYd{')
            cy.visit('https://dev.erp.inovacarreira.com.br/v2/configuracoes/sistema/geral/unidades-de-ensino/listagem')
                cy.get("input[placeholder='Pesquisar...']").should('be.visible').type('Unidade de Ensino AUTOMATIZADA{enter}')
                    cy.wait(2000) 
                        cy.get('body').then(($body) => {
            if ($body.find(':contains("Unidade de Ensino AUTOMATIZADA")').length > 0) {
                
                cy.contains('Unidade de Ensino AUTOMATIZADA').should('be.visible').click()    
                
                cy.contains('button', 'Excluir Dados').should('be.visible').click()
                
                cy.get('[role="dialog"]').should('be.visible').within(() => {
                    cy.contains('button', 'Excluir').click()
                })

                cy.log('Registro excluído com sucesso!')
            } else {
                cy.log('Registro não foi encontrado, pulando para o próximo...')
            }
        })
    })
})

describe('Vai procurar o elemento, se existir vai entrar e apagar, caso não exista ele passara para o proximo', () => {
    it('Deve procurar e apagar Mantenedora AUTOMATIZADA', () => {
        cy.login('admin', '7Y/6p0p\\iYd{')
            cy.visit('https://dev.erp.inovacarreira.com.br/v2/configuracoes/sistema/geral/mantenedoras/listagem')
                cy.get("input[placeholder='Pesquisar...']").should('be.visible').type('Mantenedora AUTOMATIZADA{enter}')
                    cy.wait(2000) 
                        cy.get('body').then(($body) => {
            if ($body.find(':contains("Mantenedora AUTOMATIZADA")').length > 0) {
                
                cy.contains('Mantenedora AUTOMATIZADA').should('be.visible').click()    
                
                cy.contains('button', 'Excluir Dados').should('be.visible').click()
                
                cy.get('[role="dialog"]').should('be.visible').within(() => {
                    cy.contains('button', 'Excluir').click()
                })

                cy.log('Registro excluído com sucesso!')
            } else {
                cy.log('Registro não foi encontrado, pulando para o próximo...')
            }
        })
    })
})