import React from 'react';
import Header1 from '../../elements/text/heading1/heading1';
import { useUser } from '../../../context/User/UserProvider';
import QueryInput from '../QueryInput/QueryInput';
import QueryInputSkeleton from '../QueryInput/QueryInputSkeleton';
import QueryInputList from '../QueryInput/QueryInputList';

const Queries: React.FunctionComponent<Record<string, unknown>> = () => {
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

  return (
    <>
      <Header1>Suchen</Header1>
      <QueryInputList queries={user.queries} />
    </>
  );
};

export default Queries;
