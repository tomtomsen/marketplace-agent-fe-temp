import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';

type Properties = unknown;

const QueryInputSkeleton: React.FunctionComponent<Properties> = () => (
  <>
    <Box pt={0.5}>
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  </>
);

export default QueryInputSkeleton;
