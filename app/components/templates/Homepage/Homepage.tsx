import React from 'react';
import Queries from '../../modules/page/Queries/Queries';
import Settings from '../../modules/Settings/Settings';
import { useUser } from '../../../context/User/UserProvider';
import { getUser } from '../../../context/User/UserAction';

type Properties = unknown;

const Homepage: React.FunctionComponent<Properties> = () => {
  const [userState, userDispatch] = useUser();
  const {
    loading,
  } = userState;

  React.useEffect(() => {
    (async () => {
      await getUser(userDispatch);
    })();
  }, [userDispatch]);

  const children = (
    <>
      <Queries />
      <Settings />
    </>
  );

  if (loading) {
    return (
      <>
        <div style={{ backgroundColor: '#ccc', opacity: 0.5 }}>
          {children}
        </div>
      </>
    );
  }

  return (
    <>
      {children}
    </>
  );
};

export default Homepage;
