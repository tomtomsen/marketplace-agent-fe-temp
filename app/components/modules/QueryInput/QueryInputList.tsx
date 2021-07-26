import React from 'react';
import { useUser } from '../../../context/User/UserProvider';
import { QueryConfiguration } from '../../../types';
import QueryInput from './QueryInput';
import QueryInputSkeleton from './QueryInputSkeleton';

type Properties = unknown;

const QueryInputList: React.FunctionComponent<Properties> = () => {
  const [userState] = useUser();
  const {
    loading,
    error,
    user,
  } = userState;

  if (loading || error) {
    return (
      <>
        <QueryInputSkeleton />
        <QueryInputSkeleton />
        <QueryInputSkeleton />
      </>
    );
  }

  if (!user.queries) {
    return (
      <><div>xxx</div></>
    );
  }

  if (user.queries.length === 0) {
    return (
      <>
        <div data-testid="query-input-list">
          empty
        </div>
      </>
    );
  }

  return (
    <>
      <div data-testid="query-input-list">
        {user.queries.map((query: QueryConfiguration) => (
          <div key={query.id}>
            <QueryInput query={query} />
          </div>
        ))}
      </div>
    </>
  );
};

export default QueryInputList;
