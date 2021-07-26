import React, { ChangeEventHandler } from 'react';
import MUITextField from '@material-ui/core/TextField';

interface Properties {
  label: string;
  helperText?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
  defaultValue?: string;
  value?: string;
}

const TextField: React.FunctionComponent<Properties> = ({
  helperText,
  label,
  onChange,
  defaultValue,
  value,
}) => (
  <>
    <MUITextField
      data-testid="search-term" // TODO(tomtomsen): move up
      defaultValue={defaultValue}
      label={label}
      helperText={helperText}
      onChange={onChange}
      value={value}
    />
  </>
);

export default TextField;
