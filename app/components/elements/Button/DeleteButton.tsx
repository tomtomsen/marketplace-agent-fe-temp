import React from 'react';
import MUIDeleteIcon from '@material-ui/icons/Delete';
import MUIIconButton from '@material-ui/core/IconButton';
import { animated } from 'react-spring';
import ConfirmButtons from '../../modules/ConfirmButtons/ConfirmButtons';
import { useBoop } from '../Boop';

type Properties = {
  onDelete?: () => void;
  disabled?: boolean;
};

const DeleteButton: React.FunctionComponent<Properties> = ({
  onDelete = () => {},
  disabled = false,
}) => {
  // const [styleHi, triggerHi] = useBoop({ rotation: 10 });
  const [isConfirm, setIsConfirm] = React.useState(false);

  const handleClick = () => {
    setIsConfirm(true);
  };

  const handleConfirm = () => {
    setIsConfirm(false);
    onDelete();
  };

  const handleCancel = () => {
    setIsConfirm(false);
  };

  if (isConfirm) {
    return (
      <ConfirmButtons
        onConfirm={() => handleConfirm()}
        onCancel={() => handleCancel()} />
    );
  }

  return (
    <MUIIconButton
      data-testid="delete-button"
      // onMouseEnter={() => triggerHi()}
      aria-label="delete"
      color="secondary"
      onClick={() => handleClick()}
      disabled={disabled}
    >
      <animated.span
        // style={styleHi}
      >
        <MUIDeleteIcon />
      </animated.span>
    </MUIIconButton>
  );
};

export default DeleteButton;
