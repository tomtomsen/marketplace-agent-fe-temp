import React, { ChangeEventHandler } from 'react';
import MUITextField from '@material-ui/core/TextField';

interface Props {
  label: string;
  helperText?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
  defaultValue?: string;
}

const TextField: React.FunctionComponent<Props> = ({
  helperText,
  label,
  onChange,
  defaultValue,
}) => (
  <>
    <MUITextField
      defaultValue={defaultValue}
      label={label}
      helperText={helperText}
      onChange={onChange}
    />
  </>
);

export default TextField;
