/// <reference types="cypress" />
import { mount } from '@cypress/react';
import TextField from '../../app/components/elements/textField/TextField';

describe('<TextField />', () => {
  it('renders help text', () => {
    const helperText = 'my helper text';

    mount(<TextField label="Hello" helperText={helperText}/>);

    cy.get('div').should('contain', helperText);
  });

  it('renders input', () => {
    mount(<TextField label="Hello" />);

    cy.get('input');
  });

  it('shows label when not focused', () => {
    const label = 'My Label';

    mount(<TextField label={label} />);

    cy.get('body').contains(label);
  });

  it('shows label when focused', () => {
    const label = 'My Label';

    mount(<TextField label={label} />);

    cy.get('input').click();
    cy.get('body').contains(label);
  });

  it('is typeable', () => {
    mount(<TextField label="Hello" />);

    cy.get('input').type('hello world');
    cy.get('input').should('have.value', 'hello world');
  });
});
