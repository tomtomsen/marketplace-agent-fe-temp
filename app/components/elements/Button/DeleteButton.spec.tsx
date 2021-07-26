/// <reference types="cypress" />
import { mount } from '@cypress/react';
import DeleteButton from './DeleteButton';

describe('<DeleteButton />', () => {
  it('triggers onDelete', () => {
    const spy = {
      handleDelete: () => {},
    };

    const deleteSpy = cy.spy(spy, 'handleDelete');

    mount(<DeleteButton
      onDelete={() => spy.handleDelete()}
    />);

    cy.get('[data-testid="delete-button"]')
      .click();

    cy.get('[data-testid="confirm-buttons"]')
      .find('[data-testid="confirm-button"]')
      .click()
      .should(() => {
        expect(deleteSpy).to.be.called;
      });
  });

  it('should not trigger onDelete if canceled', () => {
    const spy = {
      handleDelete: () => {},
    };

    const deleteSpy = cy.spy(spy, 'handleDelete');

    mount(<DeleteButton
      onDelete={() => spy.handleDelete()}
    />);

    cy.get('[data-testid="delete-button"]')
      .click();

    cy.get('[data-testid="confirm-buttons"]')
      .find('[data-testid="cancel-button"]')
      .click()
      .should(() => {
        expect(deleteSpy).to.not.be.called;
      });
  });

  it('shows delete button after cancel', () => {
    mount(<DeleteButton />);

    cy.get('[data-testid="delete-button"]')
      .click();

    cy.get('[data-testid="confirm-buttons"]')
      .find('[data-testid="cancel-button"]')
      .click();

    cy.get('[data-testid="delete-button"]')
      .should('have.length', 1);
  });

  it('shows delete button after confirm', () => {
    mount(<DeleteButton />);

    cy.get('[data-testid="delete-button"]')
      .click();

    cy.get('[data-testid="confirm-buttons"]')
      .find('[data-testid="confirm-button"]')
      .click();

    cy.get('[data-testid="delete-button"]')
      .should('have.length', 1);
  });
});
