/// <reference types="cypress" />
import { mount } from '@cypress/react';
import TextField from '../../app/components/elements/textField/TextField';
import GlobalError from '../../app/components/modules/globalError/globalError';
import useError, { ErrorProvider } from '../../app/components/modules/globalError/globalError.provider';

const MyButton = ({msg}: {msg: string}) => {
    const { setError } = useError();

    const onClick = () => {
        setError(msg);
    }

    return (
        <button onClick={onClick} id="button">click</button>
    );
}

describe('<GlobalError />', () => {
    it('if not triggered, error should not be visible', () => {
        mount((
            <ErrorProvider>
                <MyButton msg="XXXX"/>
            </ErrorProvider>
        ));

        cy.get('body').find('[data-testid="global-error"]').should('have.length', 0)
    });

    it('renders', () => {
        const errorMsg = 'my random error message';

        mount((
            <ErrorProvider>
                <MyButton msg={errorMsg} />
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
                <MyButton msg={errorMsg} />
            </ErrorProvider>
        ));

        cy.get('#button').scrollIntoView();
        cy.get('#button').click();

        cy.get('[data-testid="global-error"]').isInViewport();
        cy.get('[data-testid="global-error"]').should('contain', errorMsg);
    });
});
