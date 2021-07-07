import React from 'react';
import MUIButton from '@material-ui/core/Button';

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FunctionComponent<Props> = 
    ({ children, onClick }) => (
        <MUIButton variant="contained" color="primary" onClick={onClick}>{children}</MUIButton>
    );

export default Button;
