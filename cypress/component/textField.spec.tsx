/// <reference types="cypress" />
import { mount } from '@cypress/react'
import TextField from '../../app/components/elements/textField/TextField'

describe('<TextField />', () => {
    it('renders help text', () => {
        const helperText = "my helper text";
        
        mount(<TextField helperText={helperText}/>)
        
        cy.get('div').should('contain', helperText);
    });

    it('renders input', () => {
        mount(<TextField />)

        cy.get('input');
    });

    it('is typeable', () => {
        mount(<TextField />);

        cy.get('input').type('hello world');
        cy.get('input').should('have.value', 'hello world');
    });
});