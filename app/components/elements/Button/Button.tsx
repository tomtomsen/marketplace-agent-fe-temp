import React from 'react';
import MUIButton from '@material-ui/core/Button';

interface Properties {
  children: React.ReactNode | string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FunctionComponent<Properties> = ({ children, disabled, onClick }) => (
  <MUIButton
    variant="contained"
    color="primary"
    onClick={onClick}
    disabled={disabled}
  >{children}</MUIButton>
);

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
};

export default Button;
