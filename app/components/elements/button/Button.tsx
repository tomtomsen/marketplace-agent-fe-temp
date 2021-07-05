import React from 'react';
import MUIButton from '@material-ui/core/Button';

interface Props {
    children: React.ReactNode;
}

const Button: React.FunctionComponent<Props> = 
    ({ children }) => (
        <MUIButton variant="contained" color="primary">{children}</MUIButton>
    );

export default Button;
