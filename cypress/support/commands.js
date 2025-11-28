
Cypress.Commands.add('login', () => {
  cy.visit('https://hml.erp.inovacarreira.com.br/login')
  cy.get('#login-input', { timeout: 5000 }).type('admin')
  cy.get('#password-input').type('7Y/6p0p\\iYd{')
  cy.get('button[type="submit"]').click()
  cy.url({ timeout: 5000 }).should('include', '/dashboard')
})

Cypress.Commands.add('fillByLabel', (labelText, value) => {
  cy.contains(labelText).parent().find('input, textarea').clear().type(value)
})

Cypress.Commands.add('selectByLabel', (labelText, option) => {
  cy.contains(labelText).parent().find('select').select(option)
})


Cypress.Commands.add('waitForElement', (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.visible').should('not.be.disabled')
})

Cypress.Commands.add('clearAndType', (selector, value) => {
  cy.get(selector).clear().type(value)
})


Cypress.Commands.add('clickCustomDropdown', (triggerText, optionText) => {
  cy.contains(triggerText).click()
  cy.contains(optionText).click()
})


Cypress.Commands.add('selecionarOpcaoAleatoria', (labelTexto) => {
  cy.log(`🎲 Selecionando opção aleatória em: ${labelTexto}`)
  
  cy.contains(labelTexto)
    .scrollIntoView()
    .should('be.visible')
    .wait(300)
  
  cy.contains(labelTexto)
    .parent()
    .find('input, button, [role="combobox"]')
    .first()
    .click({ force: true })
    .wait(500)
  
  cy.wait(1000)
  
  cy.get('body').then($body => {
    let $options = $body.find('div[class*="cursor-pointer"][class*="rounded-lg"]:visible')
    
    if ($options.length === 0) {
      $options = $body.find('[role="option"]:visible')
    }
    
    if ($options.length === 0) {
      $options = $body.find('[role="dialog"]:visible div.cursor-pointer')
    }
    
    if ($options.length === 0) {
      $options = $body.find('div[class*="hover:bg-gray-100"]:visible')
    }
    
    if ($options.length === 0) {
      $options = $body.find('ul:visible li:visible')
    }
    
    if ($options.length > 0) {
      const validOptions = $options.filter((index, el) => {
        const text = Cypress.$(el).text().trim()
        return text.length > 0 && !text.includes('undefined')
      })
      
      if (validOptions.length > 0) {
        const randomIndex = Math.floor(Math.random() * validOptions.length)
        const selectedText = Cypress.$(validOptions[randomIndex]).text().trim()
        
        cy.log(`✅ Encontradas ${validOptions.length} opções`)
        cy.log(`📍 Selecionando: "${selectedText}" (opção ${randomIndex + 1})`)
        
        cy.wrap(validOptions[randomIndex])
          .scrollIntoView()
          .click({ force: true })
          .wait(500)
        
        cy.contains(labelTexto)
          .parent()
          .should('contain', selectedText)
          .then(() => {
            cy.log(`✔️ Opção "${selectedText}" selecionada com sucesso!`)
          })
      } else {
        cy.log('⚠️ Nenhuma opção válida encontrada após filtrar')
        throw new Error(`Nenhuma opção válida encontrada para: ${labelTexto}`)
      }
    } else {
      cy.log('❌ Nenhuma opção encontrada no dropdown')
      throw new Error(`Dropdown não abriu ou não há opções para: ${labelTexto}`)
    }
  })
  
  cy.wait(500)
})


Cypress.Commands.add('selecionarOpcaoAleatoriaDireto', (labelTexto) => {
  cy.log(`🎯 Selecionando opção (método direto) em: ${labelTexto}`)
  
  cy.contains(labelTexto)
    .scrollIntoView()
    .parent()
    .find('input, button, [role="combobox"]')
    .first()
    .click({ force: true })
  
  cy.wait(1000)
  
  cy.get('[role="dialog"]:visible')
    .find('div.cursor-pointer')
    .should('have.length.greaterThan', 0)
    .then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length)
      const selectedText = $options.eq(randomIndex).text().trim()
      
      cy.log(`✅ Selecionando: "${selectedText}"`)
      cy.wrap($options.eq(randomIndex)).click({ force: true })
    })
  
  cy.wait(500)
})