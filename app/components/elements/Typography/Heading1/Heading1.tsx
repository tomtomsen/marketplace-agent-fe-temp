import React from 'react';
import MUITypography from '@material-ui/core/Typography';

interface Properties {
  children: string,
}

const Heading1: React.FunctionComponent<Properties> = (props) => {
  const { children } = props;

  return (
    <>
      <MUITypography component="h1" variant="h2">{children}</MUITypography>
    </>
  );
};

export default Heading1;
