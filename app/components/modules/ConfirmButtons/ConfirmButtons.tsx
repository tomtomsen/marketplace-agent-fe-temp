import { IconButton } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
import React from 'react';

type Properties = {
  onConfirm?: () => void,
  onCancel?: () => void,
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
      <IconButton
        data-testid="confirm-button"
        onClick={() => handleConfirm()}>
        <Check style={{ color: 'green' }} />
      </IconButton>
      <IconButton color={'primary'} onClick={() => handleCancel()}>
        <Close />
      </IconButton>
    </>
  );
};

export default ConfirmButtons;
