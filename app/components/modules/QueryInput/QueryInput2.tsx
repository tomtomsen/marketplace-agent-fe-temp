import React from 'react';
import { deleteQuery, updateQuery } from '../../../context/User/UserAction';
import { useUser } from '../../../context/User/UserProvider';
import { QueryConfiguration } from '../../../types';
import DeleteButton from '../../elements/Button/DeleteButton';
import ResetButton from '../../elements/Button/ResetButton';
import SaveButton from '../../elements/Button/SaveButton';
import TextField from '../../elements/TextField/TextField';

interface Properties {
  query: QueryConfiguration,
}

const hasChanged = (a: string, b: string) => a !== b;

const QueryInput2: React.FunctionComponent<Properties> = ({ query }) => {
  const [, userDispatch] = useUser();
  const [searchTerm, setSearchTerm] = React.useState(query.searchTerm);
  const [changed, setChanged] = React.useState<boolean>(false);

  const handleReset = () => {
    setSearchTerm(query.searchTerm);
    setChanged(false);
  };

  const handleRemove = async () => {
    await deleteQuery(query.id, userDispatch);
  };

  const handleUpdate = async () => {
    await updateQuery({
      ...query,
      searchTerm,
    }, userDispatch);

    if (!query.error) {
      setSearchTerm(searchTerm);
      setChanged(false);
    }
  };

  const handleSearchTermChanged = (value: string) => {
    setChanged(hasChanged(value, query.searchTerm));
    setSearchTerm(value);
  };

  return (
    <>
      <TextField
        data-testid="search-term"
        label="Suchbegriff"
        helperText={query.id}
        value={searchTerm}
        onChange={(event) => handleSearchTermChanged(event.target.value)}
      />

      <SaveButton
        onSave={() => handleUpdate()} disabled={!changed || query.loading} />
      {(changed
        && <ResetButton onReset={() => handleReset()} disabled={query.loading} />)
        || <DeleteButton onDelete={() => handleRemove()} disabled={query.loading} />
      }
      {query.error && query.message}
    </>
  );
}

export default QueryInput2;
