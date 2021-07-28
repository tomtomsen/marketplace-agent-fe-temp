import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

type Properties = {
  children: any,
  loading: boolean;
};

const IconButtonSkeleton: React.FunctionComponent<Properties> = ({
  children,
  loading,
}) => {
  if (loading) {
    return (<Skeleton variant="circle" width={32} height={32} style={{ margin: '8px' }} />);
  }

  return children;
};

export default IconButtonSkeleton;
