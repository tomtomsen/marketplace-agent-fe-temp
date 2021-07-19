import React from 'react';
import Header1 from '../../elements/text/heading1/heading1';
import { useUser } from '../../../context/User/UserProvider';
import QueryInput from '../QueryInput/QueryInput';
import QueryInputSkeleton from '../QueryInput/QueryInputSkeleton';

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

  const output = user.queries.map((query: any) => (
    <QueryInput key={query.id} query={query} />
  ));

  return (
    <>
      <Header1>Suchen</Header1>
      {output}
    </>
  );
};

export default Queries;
