import React from 'react';
import { deleteQuery } from '../../../context/User/UserAction';
import { useUser } from '../../../context/User/UserProvider';
import { QueryConfiguration } from '../../../types';
import Button from '../../elements/Button/Button';
import DeleteButton from '../../elements/Button/DeleteButton';

type Properties = {
  query: QueryConfiguration;
  changed?: boolean;
};

const handleUpdate = async () => {
  await updateQuery(query.id, userDispatch);
};

const handleReset = () => {
  console.log(reset);
};

const QueryInputActions: React.FunctionComponent<Properties> = ({
  query,
  changed = false,
}) => {
  const [, userDispatch] = useUser();

  const handleRemove = async () => {
    await deleteQuery(query.id, userDispatch);
  };

  return (
    <>
      <Button onClick={() => handleUpdate()} disabled={query.loading}>Speichern</Button>
      {(changed
        && <Button onClick={() => handleReset()} disabled={query.loading}>Reset</Button>)
        || <DeleteButton onDelete={() => handleRemove} disabled={false} />
      }
      {query.error && query.message}
    </>
  );
};

export default QueryInputActions;
