import React from 'react';

export type TUserState = {
  user: any,
  loading: boolean,
  error: boolean,
  message: string,
};

type TUserContext = {
  state: TUserState;
  dispatch: any;
};

export const initialState = {
  error: false,
  loading: false,
  message: '',
  user: {},
};

const UserContext = React.createContext<TUserContext>({
  dispatch: () => {},
  state: initialState,
});

export default UserContext;
