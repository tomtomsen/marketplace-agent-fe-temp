import React from 'react';
import UserContext, { initialState } from './UserContext';
import UserReducer from './UserReducer';

export const useUser = () => {
  const { state, dispatch } = React.useContext(UserContext);
  return [state, dispatch];
};

type Properties = {
  children: React.ReactChild | Array<React.ReactChild>;
};

const UserProvider: React.FunctionComponent<Properties> = ({ children }) => {
  const [state, dispatch] = React.useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ dispatch, state }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
