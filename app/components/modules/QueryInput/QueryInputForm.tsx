import { TextField } from '@material-ui/core';
import React from 'react';
import { QueryConfiguration } from '../../../types';

type Properties = {
  query: QueryConfiguration;
};

const hasChanged = (a: string, b: string) => a !== b;

const QueryInputForm: React.FunctionComponent<Properties> = ({ query }) => {
  const [searchTerm, setSearchTerm] = React.useState(query.searchTerm);
  const [changed, setChanged] = React.useState<boolean>(false);

  const handleSearchTermChanged = (value: string) => {
    setChanged(hasChanged(value, query.searchTerm));
    setSearchTerm(value);
  };

  return (
    <TextField
      data-testid="search-term"
      label="Suchbegriff"
      helperText={query.id}
      defaultValue={searchTerm}
      onChange={(event) => handleSearchTermChanged(event.target.value)}
    />
  );
};

export default QueryInputForm;
