import React from 'react';
import TextField from '@material-ui/core/TextField';

type Properties = {
  label: string
  disabled?: boolean
};

const PriceField: React.FunctionComponent<Properties> = ({
  label,
  disabled = false,
}) => (
  <TextField
    label={label}
    disabled={disabled}
  />
);

export default PriceField;
