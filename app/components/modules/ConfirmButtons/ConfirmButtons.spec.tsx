/// <reference types="cypress" />
import { mount } from '@cypress/react';
import ConfirmButtons from './ConfirmButtons';

describe('<ConfirmButtons />', () => {
  it('triggers onConfirm', () => {
    const spy = {
      handleCancel: () => {},
      handleConfirm: () => {},
    };

    const confirmSpy = cy.spy(spy, 'handleConfirm');
    const cancelSpy = cy.spy(spy, 'handleCancel');

    mount(<ConfirmButtons
      onConfirm={() => spy.handleConfirm()}
      onCancel={() => spy.handleCancel()} />);

    cy.get('[data-testid="confirm-buttons"]')
      .find('[data-testid="confirm-button"]')
      .click()
      .should(() => {
        expect(confirmSpy).to.be.called;
        expect(cancelSpy).to.not.be.called;
      });
  });

  it('triggers onCancel', () => {
    const spy = {
      handleCancel: () => {},
      handleConfirm: () => {},
    };

    const confirmSpy = cy.spy(spy, 'handleConfirm');
    const cancelSpy = cy.spy(spy, 'handleCancel');

    mount(<ConfirmButtons
      onConfirm={() => spy.handleConfirm()}
      onCancel={() => spy.handleCancel()} />);

    cy.get('[data-testid="confirm-buttons"]')
      .find('[data-testid="cancel-button"]')
      .click()
      .should(() => {
        expect(confirmSpy).to.not.be.called;
        expect(cancelSpy).to.be.called;
      });
  });
});
