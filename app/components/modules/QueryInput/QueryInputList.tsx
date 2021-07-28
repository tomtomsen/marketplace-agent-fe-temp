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

  if (!loading && !user.queries) {
    return (<></>);
  }

  const defaultQuery = {
    error: false,
    id: '',
    loading: false,
    message: '',
    searchTerm: '',
  };
  let data: Array<QueryConfiguration> = [
    { ...defaultQuery, id: '1' },
    { ...defaultQuery, id: '2' },
    { ...defaultQuery, id: '3' },
  ];
  if (user.queries) {
    data = user.queries;
  }

  if (!loading && data.length === 0) {
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
        {data.map((query: QueryConfiguration) => (
          <div key={query.id}>
            <QueryInput query={query} loading={loading}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default QueryInputList;
