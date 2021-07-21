import React from 'react';
import MUIButton from '@material-ui/core/Button';

interface Properties {
  children: React.ReactNode | string;
  disabled?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  iconStart?: any;
}

const Button: React.FunctionComponent<Properties> = ({
  children,
  disabled,
  onClick,
  onMouseEnter,
  iconStart,
}) => (
  <MUIButton
    variant="contained"
    color="primary"
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    disabled={disabled}
    startIcon={iconStart}
  >{children}</MUIButton>
);

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
  onMouseEnter: () => {},
};

export default Button;
