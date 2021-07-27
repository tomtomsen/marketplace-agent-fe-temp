import React from 'react';
import MUIReloadIcon from '@material-ui/icons/Replay';
import MUIIconButton from '@material-ui/core/IconButton';
import { animated } from 'react-spring';

type Properties = {
  onReset?: () => void;
  disabled?: boolean;
};

const ResetButton: React.FunctionComponent<Properties> = ({
  onReset = () => {},
  disabled = false,
}) => {
  const handleClick = () => {
    onReset();
  };

  return (
    <MUIIconButton
      data-testid="reset-button"
      aria-label="reset"
      color="primary"
      onClick={() => handleClick()}
      disabled={disabled}
    >
      <MUIReloadIcon />
    </MUIIconButton>
  );
};

export default ResetButton;
