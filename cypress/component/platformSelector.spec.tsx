/// <reference types="cypress" />
import { mount } from '@cypress/react'
import PlatformSelector from '../../app/components/elements/platformSelector/PlatformSelector'

describe('<PlatformSelector />', () => {
  beforeEach(() => {
    // given
    mount(<PlatformSelector />)
  })

  it('senders hello world', () => {
    cy.get('div').should('contain', 'Hello World, jo');
  })
})