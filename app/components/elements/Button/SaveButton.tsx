import React from 'react';
import MUISaveIcon from '@material-ui/icons/Save';
import MUIIconButton from '@material-ui/core/IconButton';

type Properties = {
  onSave?: () => void;
  disabled?: boolean;
};

const SaveButton: React.FunctionComponent<Properties> = ({
  onSave = () => {},
  disabled = false,
}) => {
  const handleClick = () => {
    onSave();
  };

  return (
    <MUIIconButton
      data-testid="save-button"
      aria-label="save"
      color="primary"
      onClick={() => handleClick()}
      disabled={disabled}
      type="submit"
    >
      <MUISaveIcon />
    </MUIIconButton>
  );
};

export default SaveButton;
