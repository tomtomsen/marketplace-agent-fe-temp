/// <reference types="cypress" />
import { mount } from '@cypress/react';
import GlobalErrorProvider, { useError } from '../../../context/GlobalError/GlobalErrorProvider';

const MyButton = ({ onClick }: { onClick: () => string }) => {
  const { setError } = useError();

  const handleClick = () => {
    setError({ message: onClick(), severity: 'error' });
  };

  return (
    <button onClick={handleClick} id="button">click</button>
  );
};

describe('<GlobalError />', () => {
  it('if not triggered, error should not be visible', () => {
    mount((
      <GlobalErrorProvider>
        <MyButton onClick={() => 'XXXX'} />
      </GlobalErrorProvider>
    ));

    cy.get('body').find('[data-testid="global-error"]').should('have.length', 0);
  });

  it('renders', () => {
    const message = 'my random error message';

    mount((
      <GlobalErrorProvider>
        <MyButton onClick={() => message} />
      </GlobalErrorProvider>
    ));

    cy.get('#button').click();
    cy.get('[data-testid="global-error"]').isInViewport();
    cy.get('[data-testid="global-error"]').should('contain', message);
  });

  it('should be visible on long pages', () => {
    const message = 'my random error message';

    mount((
      <GlobalErrorProvider>
        <div id="contentX" style={{ height: '10000px' }} />
        <MyButton onClick={() => message} />
      </GlobalErrorProvider>
    ));

    cy.get('#button').scrollIntoView();
    cy.get('#button').click();

    cy.get('[data-testid="global-error"]').isInViewport();
    cy.get('[data-testid="global-error"]').should('contain', message);
  });

  it('can be closed', () => {
    mount((
      <GlobalErrorProvider>
        <MyButton onClick={() => 'some error'} />
      </GlobalErrorProvider>
    ));

    cy.get('#button').click();
    cy.get('[data-testid="global-error-close"]').click();

    cy.get('body').find('[data-testid="global-error"]').should('have.length', 0);
  });

  it('updates on multiple errors', () => {
    let index = 0;
    const onClick = () => {
      index += 1;
      return `error-count: ${index}`;
    };

    mount((
      <GlobalErrorProvider>
        <div id="contentX" />
        <MyButton onClick={onClick} />
      </GlobalErrorProvider>
    ));

    cy.get('#button').scrollIntoView();
    cy.get('#button').click();
    cy.get('[data-testid="global-error-close"]').click();
    cy.get('#button').click();

    cy.get('[data-testid="global-error"]').isInViewport();
    cy.get('[data-testid="global-error"]').should('contain', 'error-count: 2');
  });
});
