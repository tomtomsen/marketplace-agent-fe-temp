/// <reference types="cypress" />
import { mount } from '@cypress/react';
import useError, { ErrorProvider } from '../../app/components/modules/globalError/globalError.provider';

const MyButton = ({onClick}: {onClick: () => string}) => {
    const { setError } = useError();

    const handleClick = () => {
        setError({message: onClick()});
    }

    return (
        <button onClick={handleClick} id="button">click</button>
    );
}

describe('<GlobalError />', () => {
    it('if not triggered, error should not be visible', () => {
        mount((
            <ErrorProvider>
                <MyButton onClick={() => "XXXX"} />
            </ErrorProvider>
        ));

        cy.get('body').find('[data-testid="global-error"]').should('have.length', 0)
    });

    it('renders', () => {
        const errorMsg = 'my random error message';

        mount((
            <ErrorProvider>
                <MyButton onClick={() => errorMsg} />
            </ErrorProvider>
        ));

        cy.get('#button').click();
        cy.get('[data-testid="global-error"]').isInViewport();
        cy.get('[data-testid="global-error"]').should('contain', errorMsg);
    });

    it('should be visible on long pages', () => {
        const errorMsg = 'my random error message';

        mount((
            <ErrorProvider>
                <div id="contentX" style={{height: "10000px"}} />
                <MyButton onClick={() => errorMsg} />
            </ErrorProvider>
        ));

        cy.get('#button').scrollIntoView();
        cy.get('#button').click();

        cy.get('[data-testid="global-error"]').isInViewport();
        cy.get('[data-testid="global-error"]').should('contain', errorMsg);
    });

    it('can be closed', () => {
        mount((
            <ErrorProvider>
                <MyButton onClick={() => "some error"} />
            </ErrorProvider>
        ));

        cy.get('#button').click();
        cy.get('[data-testid="global-error-close"]').click();

        cy.get('body').find('[data-testid="global-error"]').should('have.length', 0);
    });

    it('updates on multiple errors', () => {
        let i = 0;
        const onClick = () => {
            i += 1;
            return `error-count: ${i}`;
        }

        mount((
            <ErrorProvider>
                <div id="contentX" />
                <MyButton onClick={onClick} />
            </ErrorProvider>
        ));

        cy.get('#button').scrollIntoView();
        cy.get('#button').click();
        cy.get('[data-testid="global-error-close"]').click();
        cy.get('#button').click();

        cy.get('[data-testid="global-error"]').isInViewport();
        cy.get('[data-testid="global-error"]').should('contain', 'error-count: 2');
    });
});
