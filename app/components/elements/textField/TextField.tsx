import React from 'react';
import MUITextField from '@material-ui/core/TextField';

interface Props {
  label: string;
  helperText?: string;
}

const TextField: React.FunctionComponent<Props> = ({ helperText, label }) => (
  <>
    <MUITextField
      label={label}
      helperText={helperText}
    />
  </>
);

export default TextField;
