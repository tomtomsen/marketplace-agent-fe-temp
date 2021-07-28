import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Skeleton from '@material-ui/lab/Skeleton';
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Typography,
} from '@material-ui/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { QueryConfiguration } from '../../../types';
import ResetButton from '../../elements/Button/ResetButton';
import PriceRangeFields from '../../elements/PriceRangeFields/PriceRangeFields';
import useToggle from '../../../hooks/use-toggle';
import CollapseButton, { State } from '../../elements/Button/CollapseButton';
import IconButtonSkeleton from '../../elements/Skeleton/IconButtonSkeleton';
import SaveButton from '../../elements/Button/SaveButton';

interface Properties {
  loading: boolean,
  query: QueryConfiguration,
}

const TextFieldSkeleton = () => (
  <Skeleton variant="rect" height={40} width="100%" style={{ marginBottom: '0px', marginTop: '7px' }} />
);

type Inputs = {
  searchTerm: string,
};

const onSubmit: SubmitHandler<Inputs> = (data) => {
  console.log(data);
};

const QueryInput: React.FunctionComponent<Properties> = ({ query, loading }) => {
  const [showOptions, toggleShowOptions] = useToggle(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      ...query,
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          direction="row"
          spacing={1}
        >
          <Grid item xs={12}>
            {loading ? (
              <TextFieldSkeleton />
            ) : (
              <TextField
                fullWidth
                label="searchTerm"
                defaultValue={query.searchTerm}
                {...register('searchTerm', { required: true })}
                error={!!errors?.searchTerm}
              />
            )}
          </Grid>

          <Collapse in={showOptions}>
            <Grid item xs={12}>
              <PriceRangeFields />
            </Grid>
          </Collapse>

          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={false} sm={4}></Grid>
              <Grid item xs={6} sm={4}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <IconButtonSkeleton loading={loading}>
                    <CollapseButton
                      state={showOptions ? State.Less : State.More}
                      onToggle={toggleShowOptions}
                    />
                  </IconButtonSkeleton>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                  <Box>
                    <IconButtonSkeleton loading={loading}>
                      <SaveButton />
                    </IconButtonSkeleton>
                  </Box>
                  <Box margin={1}>
                    <IconButtonSkeleton loading={loading}>
                      <ResetButton />
                    </IconButtonSkeleton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default QueryInput;
