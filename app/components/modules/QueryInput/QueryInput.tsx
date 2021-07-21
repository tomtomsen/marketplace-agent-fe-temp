import React from 'react';
import MUICloseIcon from '@material-ui/icons/Close';
import MUIIconButton from '@material-ui/core/IconButton';
import { animated } from 'react-spring';
import UserApi from '../../../api/UserApi';
import { useBoop } from '../../elements/Boop';
import Button from '../../elements/Button/Button';
import TextField from '../../elements/TextField/TextField';

type TQuery = {
  id: string,
  query: string,
};

interface Props {
  query: TQuery,
  onRemoved: () => void;
}

function SomeComponent() {
  const [style, trigger] = useBoop({ rotation: 10 });
  return (
    <MUIIconButton
      onMouseEnter={trigger}
      aria-label="close"
      color="inherit"
    >
      <animated.span style={style}>
        <MUICloseIcon />
      </animated.span>
    </MUIIconButton>
  );
}

const QueryInput: React.FunctionComponent<Props> = ({ onRemoved, query }) => {
  const [value, setValue] = React.useState(query.query);
  const [saving, setSaving] = React.useState<boolean>(false);
  const [deleting, setDeleting] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const handleRemove = async () => {
    setDeleting(true);
    try {
      await UserApi.queries.delete(query.id);
      onRemoved();
    } catch (e) {
      setError(e.message);
    } finally {
      setDeleting(false);
    }
  };

  const handleUpdate = async () => {
    setSaving(true);
    try {
      await UserApi.queries.put(query.id, value);
    } catch (e) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <SomeComponent />
      <TextField
        label="Suchbegriff"
        helperText={query.id}
        defaultValue={query.query}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleUpdate} disabled={saving}>Speichern</Button>
      <Button onClick={handleRemove} disabled={deleting}>x</Button>
      {error && <div>{error}</div>}
    </>
  );
};

export default QueryInput;
