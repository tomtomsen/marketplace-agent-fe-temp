import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

type Properties = unknown;

const QueryInputSkeleton: React.FunctionComponent<Properties> = () => (
  <>
    <Skeleton variant="text" />
    <Skeleton variant="circle" width={40} height={40} />
    <Skeleton variant="rect" width={210} height={118} />
  </>
);

export default QueryInputSkeleton;
