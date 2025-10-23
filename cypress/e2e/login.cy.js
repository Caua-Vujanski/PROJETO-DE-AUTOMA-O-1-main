describe('Login', () => {
  it('deve permitir login com credenciais válidas', () => {
  
    cy.visit('https://dev.erp.inovacarreira.com.br/login')
        cy.get('#login-input', { timeout: 5000 }).type('admin')
            cy.get('#password-input').type('7Y/6p0p\\iYd{')
                cy.get('button[type="submit"]').click()
                  cy.url({ timeout: 5000 }).should('include', '/dashboard')

    c



  })
})
