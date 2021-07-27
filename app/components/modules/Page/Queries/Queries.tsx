import React from 'react';
import Header1 from '../../../elements/Typography/Heading1/Heading1';
import QueryInputList from '../../QueryInput/QueryInputList';

const Queries: React.FunctionComponent<Record<string, unknown>> = () => (
  <>
    <Header1>Suchen</Header1>
    <QueryInputList />
  </>
);

export default Queries;
