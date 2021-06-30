/// <reference types="cypress" />
import { mount } from '@cypress/react'
import Posts from '../../app/components/elements/posts/posts'
import { locators } from '../../app/components/elements/posts/posts.locators'

const posts = [
  {
    id: 1,
    title: 'Introduction to Cypress',
    userId: 1,
    body: 'Fast, easy and reliable testing for anything that runs in a browser.'
  },
  {
    id: 2,
    title: 'Introduction to Next.js',
    userId: 2,
    body: 'Next.js is an open-source React front-end development web framework created by Vercel that enables functionality such as server-side rendering and generating static websites for React based web applications'
  },
]

const users = [
  {
    id: 1,
    name: 'cypress-io',
  },
  {
    id: 2,
    name: 'next-js'
  }
]

describe('<Posts />', () => {
  beforeEach(() => {
    // given
    mount(<Posts posts={posts} users={users} />)
  })

  it('renders post title', () => {
    // when, then
    console.log(cy.get(`[data-testid=${locators.title}`));
    cy.get(`[data-testid=${locators.title}`).should('have.length', posts.length)
    cy.get(`[data-testid=${locators.title}`).first().should('have.text', posts[0].title)
    cy.get(`[data-testid=${locators.title}`).eq(1).should('have.text', posts[1].title)
  })

  it('renders post username', () => {
    // when, then
    cy.get(`[data-testid=${locators.userName}]`).should('have.length', users.length)
    cy.get(`[data-testid=${locators.userName}]`).first().should('have.text', `By: ${users[0].name}`)
    cy.get(`[data-testid=${locators.userName}]`).eq(1).should('have.text', `By: ${users[1].name}`)
  })

  it('renders post body', () => {
    // when, then
    cy.get(`[data-testid=${locators.body}]`).should('have.length', posts.length)
    cy.get(`[data-testid=${locators.body}]`).first().should('have.text', posts[0].body)
    cy.get(`[data-testid=${locators.body}]`).eq(1).should('have.text', posts[1].body)
  })
})