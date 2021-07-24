import { IconButton } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
import React from 'react';

type Properties = {
  onConfirm: () => void,
  onCancel: () => void,
};

const ConfirmButtons: React.FunctionComponent<Properties> = ({
  onCancel = () => {},
  onConfirm = () => {},
}) => {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <>
      <div data-testid="confirm-buttons">
        <IconButton
          data-testid="confirm-button"
          onClick={() => handleConfirm()}>
          <Check style={{ color: 'green' }} />
        </IconButton>
        <IconButton
          data-testid="cancel-button"
          color={'primary'}
          onClick={() => handleCancel()}
        >
          <Close />
        </IconButton>
      </div>
    </>
  );
};

export default ConfirmButtons;
