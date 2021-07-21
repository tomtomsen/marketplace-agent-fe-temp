import React from 'react';
import MUICloseIcon from '@material-ui/icons/Close';
import MUIIconButton from '@material-ui/core/IconButton';
import { animated } from 'react-spring';
import { useBoop } from '../Boop';

type Properties = {
  onClick: () => void;
  disabled: boolean;
  ok: boolean;
};

const DeleteButton: React.FunctionComponent<Properties> = ({
  onClick = () => {},
  disabled = false,
  ok = true,
}) => {
  const [styleHi, triggerHi] = useBoop({ rotation: 10 });
  const [styleNo, triggerNo] = useBoop({ x: 3 });
  const handleClick = () => {
    triggerHi();
    onClick();
  };

  React.useEffect(() => {
    if (!ok) {
      triggerNo();
    }
  }, [ok, triggerNo]);

  return (
    <MUIIconButton
      onMouseEnter={() => triggerHi()}
      aria-label="delete"
      color="secondary"
      onClick={handleClick}
      disabled={disabled}
    >
      <animated.span style={{ ...styleHi, ...styleNo }}>
        <MUICloseIcon />
      </animated.span>
    </MUIIconButton>
  );
}

export default DeleteButton;
