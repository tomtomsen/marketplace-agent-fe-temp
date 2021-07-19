import React from 'react';
import UserAPI from '../../../api/UserAPI';
import Button from '../../elements/button/Button';
import TextField from '../../elements/textField/TextField';

type TQuery = {
  id: string,
  query: string,
};

interface Props {
  query: TQuery,
}

const QueryInput: React.FunctionComponent<Props> = ({ query }) => {
  const [value, setValue] = React.useState(query.query);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const onSave = async () => {
    setLoading(true);
    try {
      await UserAPI.queries.put(query.id, value);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div key={query.id}>
        <TextField
          label="Suchbegriff"
          helperText={query.id}
          defaultValue={query.query}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={onSave} disabled={loading}>Speichern</Button>
        {error && <div>{error}</div>}
      </div>
    </>
  );
};

export default QueryInput;
