import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Skeleton from '@material-ui/lab/Skeleton';
import { QueryConfiguration } from '../../../types';
import { Box, Button, Collapse, Link, Typography } from '@material-ui/core';
import ResetButton from '../../elements/Button/ResetButton';

interface Properties {
  query: QueryConfiguration,
}

const TextFieldSkeleton = () => (
  <Skeleton variant="rect" height={40} width="100%" style={{ marginBottom: '0px', marginTop: '7px' }} />
);

const QueryInput: React.FunctionComponent<Properties> = ({ query }) => {
  const [loading, setLoading] = React.useState(true);
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleLoading = () => {
    const newLoading = !loading;
    setLoading(newLoading);
  };

  const toggleCollapse = (event: MouseEvent<HTMLLinkElement>) => {
    event.preventDefault();
    const newCollapse = !collapsed;
    setCollapsed(newCollapse);
    return false;
  };

  return (
    <>
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
            />
          )}
        </Grid>

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
                <Typography>
                  {loading ? (
                    <Skeleton variant="rect" width={70} />
                  ) : (
                    <Link href="#" onClick={toggleCollapse}>
                      { collapsed ? (<>Weniger</>) : (<>Weitere</>) }
                    </Link>
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <Box>
                  {loading ? (
                    <Skeleton variant="circle" width={32} height={32} style={{ margin: '8px' }} />
                  ) : (
                    <ResetButton />
                  )}
                </Box>
                <Box margin={1}>
                  {loading ? (
                    <Skeleton variant="circle" width={32} height={32} style={{ margin: '8px' }} />
                  ) : (
                    <ResetButton />
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Collapse in={collapsed} unmountOnExit>
            <Box>
              <TextField
                label="von"
              />
              <TextField
                label="bis"
              />
            </Box>
          </Collapse>
        </Grid>
      </Grid>
      <Button onClick={() => toggleLoading()}>x</Button>
    </>
  );
};

export default QueryInput;
