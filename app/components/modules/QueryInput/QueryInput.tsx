import React from 'react';
import UserApi from '../../../api/UserApi';
import { QueryConfiguration } from '../../../types';
import Button from '../../elements/Button/Button';
import DeleteButton from '../../elements/Button/DeleteButton';
import TextField from '../../elements/TextField/TextField';

interface Properties {
  query: QueryConfiguration,
  onRemoved: () => void;
}

const QueryInput: React.FunctionComponent<Properties> = ({ onRemoved, query }) => {
  const [value, setValue] = React.useState(query.searchTerm);
  const [saving, setSaving] = React.useState<boolean>(false);
  const [deleting, setDeleting] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const handleRemove = async () => {
    setDeleting(true);
    setErrorMessage('');
    try {
      await UserApi.queries.delete(query.id);
      // throw new Error(`failed ${new Date()}`);
      onRemoved();
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setDeleting(false);
    }
  };

  const handleUpdate = async () => {
    setSaving(true);
    try {
      await UserApi.queries.put(query.id, value);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <TextField
        data-testid="search-term"
        label="Suchbegriff"
        helperText={query.id}
        defaultValue={query.searchTerm}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button onClick={handleUpdate} disabled={saving}>Speichern</Button>
      <DeleteButton onDelete={handleRemove} disabled={deleting} />
      {errorMessage && <div>{errorMessage}</div>}
    </>
  );
};

export default QueryInput;
