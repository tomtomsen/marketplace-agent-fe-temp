import React from 'react';
import { QueryConfiguration } from '../../../types';
import QueryInputActions from './QueryInputActions';
import QueryInputForm from './QueryInputForm';

interface Properties {
  query: QueryConfiguration,
}

const QueryInput: React.FunctionComponent<Properties> = ({ query }) => (
  <>
    <QueryInputForm query={query} />
    <QueryInputActions query={query} />
  </>
);

export default QueryInput;
