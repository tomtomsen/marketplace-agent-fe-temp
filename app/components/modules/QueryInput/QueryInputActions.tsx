import React from 'react';
import { deleteQuery } from '../../../context/User/UserAction';
import { useUser } from '../../../context/User/UserProvider';
import { QueryConfiguration } from '../../../types';
import Button from '../../elements/Button/Button';
import DeleteButton from '../../elements/Button/DeleteButton';

type Properties = {
  query: QueryConfiguration;
};

const handleUpdate = async () => {
  // await deleteQuery(query.id, userDispatch);
};

const QueryInputActions: React.FunctionComponent<Properties> = ({ query }) => {
  const [, userDispatch] = useUser();

  const handleRemove = async () => {
    await deleteQuery(query.id, userDispatch);
  };

  return (
    <>
      <Button onClick={handleUpdate} disabled={query.loading}>Speichern</Button>
      <DeleteButton onDelete={handleRemove} disabled={false} />
      {query.error && query.message}
    </>
  );
};

export default QueryInputActions;
