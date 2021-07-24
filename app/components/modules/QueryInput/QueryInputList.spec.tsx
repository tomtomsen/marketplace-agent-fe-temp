/// <reference types="cypress" />
import { mount } from '@cypress/react';
import { QueryConfiguration } from '../../../types';
import QueryInputList from './QueryInputList';

describe('<QueryInputList />', () => {
  it('renders info when empty', () => {
    const items: Array<QueryConfiguration> = [];

    mount(<QueryInputList queries={items} />);

    cy.get('[data-testid="query-input-list"]').should('contain', 'empty');
  });

  it('renders all queries (no-pagination)', () => {
    const items: Array<QueryConfiguration> = [];
    for (let index = 0; index < 30; index += 1) {
      items.push({ id: `1111-2222-3333-${index}`, searchTerm: `search ${index}` });
    }

    mount(<QueryInputList queries={items} />);

    cy.get('[data-testid="query-input-list"] input').should('have.length', 30);
  });

  it('can remove an item', () => {
    const items: Array<QueryConfiguration> = [
      {
        id: '1111-2222-3333-4444',
        searchTerm: 'aaa',
      },
      {
        id: '2222-3333-4444-5555',
        searchTerm: 'bbb',
      },
    ];

    mount(<QueryInputList queries={items} />);

    cy.get('[data-testid="query-input-list"]')
      .find('[data-testid="delete-button"]')
      .first()
      .click();

    cy.get('[data-testid="query-input-list"]')
      .find('[data-testid="confirm-button"]')
      .first()
      .click();

    cy.get('[data-testid="query-input-list"]')
      .find('[data-testid="search-term"]')
      .should('have.length', 1);

    cy.get('[data-testid="query-input-list"]')
      .find('[data-testid="search-term"]')
      .first()
      .should('have.value', 'bbb');
  });

  it('can remove multiple items', () => {
    const items: Array<QueryConfiguration> = [
      {
        id: '1111-2222-3333-4444',
        searchTerm: 'aaa',
      },
      {
        id: '2222-3333-4444-5555',
        searchTerm: 'bbb',
      },
      {
        id: '3333-4444-5555-6666',
        searchTerm: 'ccc',
      },
    ];

    mount(<QueryInputList queries={items} />);

    cy.get('[data-testid="query-input-list"]')
      .find('[data-testid="delete-button"]')
      .first()
      .click();

    cy.get('[data-testid="query-input-list"]')
      .find('[data-testid="confirm-button"]')
      .first()
      .click();

    cy.get('[data-testid="query-input-list"]')
      .find('[data-testid="delete-button"]')
      .eq(2)
      .click();

    cy.get('[data-testid="query-input-list"]')
      .find('[data-testid="confirm-button"]')
      .first()
      .click();

    cy.get('[data-testid="query-input-list"]')
      .find('[data-testid="search-term"]')
      .should('have.length', 1);
  });
});
