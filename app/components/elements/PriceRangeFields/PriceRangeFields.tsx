import React from 'react';
import Grid from '@material-ui/core/Grid';
import PriceField from '../PriceField/PriceField';
import ToggleableField from '../ToggleableField/ToggleableField';

type Properties = unknown;

const PriceRangeFields: React.FunctionComponent<Properties> = () => (
  <>
    <Grid container spacing={1}>
      <Grid item>
        <ToggleableField
          enabled={false}
          input={(
            <PriceField
              label="Preis von"
            />
          )}
        />
      </Grid>
      <Grid item>
        <ToggleableField
          enabled={false}
          input={(
            <PriceField
              label="Preis bis"
            />
          )}
        />
      </Grid>
    </Grid>
  </>
);

export default PriceRangeFields;
