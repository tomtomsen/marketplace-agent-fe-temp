import React from 'react';
import Queries from '../../modules/queries/queries';
import Settings from '../../modules/settings/settings';
import { useUser } from '../../../context/User/UserProvider';
import { getUser } from '../../../context/User/UserAction';

const Homepage: React.FunctionComponent = () => {
  const [userState, userDispatch] = useUser();
  const {
    loading,
  } = userState;

  React.useEffect(() => {
    const getUserInfoHandler = async () => {
      await getUser(userDispatch);
    };

    getUserInfoHandler();
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
