describe('landing view / home page', () => {
  beforeEach(() => {
    cy.fixture('nytResponse').then((nytResponse) => {
      cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4bxWhQUEJsgqskrAo23GYzh6xYoBnPOE', {
        statusCode: 200,
        body: nytResponse
      })
    })

    cy.visit('http://localhost:3000/')
  })

  it('should have a header with an h1', () => {
    cy.get('header h1').contains('NYT NEWS READER')
  })

  it('should have a form to select a news category', () => {
    cy.get('main form').should('exist')

    cy.get('form label').contains('Want articles in a certain category?')

    cy.get('form select').should('exist')

    cy.get('.form-select').find('option').should('have.length', 26)

    cy.get('.form-button').should('exist')
    cy.get('.form-button').contains('See articles in this category!')
  })

  it('should have a container with the correct category note and 2 news articles', () => {
    cy.get('.news-articles-container').should('exist')

    cy.get('.home-page-note').contains('The following articles are from the Home Page of the New York Times')

    cy.get('.news-article').should('have.length', 2)
  })

  it('should have the correct details for the first news article', () => {
    cy.get('.news-article').eq(0).contains('For Many Russians, a Deep Unease Over Gathering Specter of War')

    cy.get('.news-article').eq(0).find('p').eq(0).contains('By Anton Troianovski')

    cy.get('.news-article').eq(0).find('p').eq(1).contains('Published on: 2022-02-23')
  })

  it('should have the correct details for the second news article', () => {
    cy.get('.news-article').eq(1).contains('More Trouble for a Troubled Market')

    cy.get('.news-article').eq(1).find('p').eq(0).contains('By Jeff Sommer')

    cy.get('.news-article').eq(1).find('p').eq(1).contains('Published on: 2022-02-23')
  })
})

describe('network error', () => {
  it('should give an error to the user if the network is down', () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4bxWhQUEJsgqskrAo23GYzh6xYoBnPOE', {
      statusCode: 404,
    })

    cy.visit('http://localhost:3000/')

    cy.get('.error-url-path').should('exist')

    cy.get('.error-url-path').contains('Uh Oh! There was an error connecting to the NYT database.')
  })
})

describe('navigation', () => {
  beforeEach(() => {
    cy.fixture('nytResponse').then((nytResponse) => {
      cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4bxWhQUEJsgqskrAo23GYzh6xYoBnPOE', {
        statusCode: 200,
        body: nytResponse
      })
    })

    cy.visit('http://localhost:3000/')
  })

  it('should navigate to a detailed view if an article link is clicked', () => {
    cy.get('.news-article').should('have.length', 2)
    cy.get('.detailed-container').should('not.exist')

    cy.get('.news-article').eq(1).click()

    cy.get('.news-article').should('have.length', 0)
    cy.get('.detailed-container').should('exist')
  })
})