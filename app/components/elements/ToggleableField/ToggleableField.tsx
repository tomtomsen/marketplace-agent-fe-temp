import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import useToggle from '../../../hooks/use-toggle';

type Properties = {
  enabled?: boolean
  input: any
};

const ToggleableField: React.FunctionComponent<Properties> = ({
  enabled = true,
  input,
}) => {
  const [isEnabled, setEnabled] = useToggle(enabled);

  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item>
        <Checkbox
          checked={isEnabled}
          color="primary"
          onClick={setEnabled}
        />
      </Grid>
      <Grid item>
        {React.cloneElement(input, { disabled: !isEnabled })}
      </Grid>
    </Grid>
  );
};

export default ToggleableField;
