/// <reference types="cypress" />
import { mount } from '@cypress/react';
import CollapseButton, { State } from './CollapseButton';

describe('<CollapseButton />', () => {
  it('triggers onToggle', () => {
    const spy = {
      handleToggle: () => {},
    };

    const toggleSpy = cy.spy(spy, 'handleToggle');

    mount(<CollapseButton
      onToggle={() => spy.handleToggle()}
    />);

    cy.get('[data-testid="collapse-button"]')
      .click()
      .should(() => {
        expect(toggleSpy).to.be.called;
      });
  });

  it('default to collapsed', () => {
    mount(<CollapseButton />);

    cy.get('[data-testid="collapse-button-more"]')
      .should('have.length', 1);
  });

  it('setting uncollapsed state', () => {
    mount(<CollapseButton state={State.Less} />);

    cy.get('[data-testid="collapse-button-less"]')
      .should('have.length', 1);
  });

  it('click changes button', () => {
    mount(<CollapseButton />);

    cy.get('[data-testid="collapse-button-more"]')
      .click();

    cy.get('[data-testid="collapse-button-less"]')
      .should('have.length', 1);
  });
});
