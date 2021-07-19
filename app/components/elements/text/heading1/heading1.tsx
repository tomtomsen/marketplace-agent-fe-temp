import React from 'react';
import MUITypography from '@material-ui/core/Typography';

interface Props {
  children: string,
}

const Heading1: React.FunctionComponent<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <MUITypography component="h1" variant="h2">{children}</MUITypography>
    </>
  );
};

export default Heading1;
