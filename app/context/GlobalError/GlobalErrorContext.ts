import React from 'react';

export type TErrorType = 'error' | 'warning' | 'success' | 'info';

export type TGlobalErrorState = {
  message: string,
  type: TErrorType,
};

export type TGlobalErrorContext = {
  state: TGlobalErrorState;
  setError: (value: TGlobalErrorState) => void;
};

export const initialState: TGlobalErrorState = {
  message: '',
  type: 'error',
};

const GlobalErrorContext = React.createContext<TGlobalErrorContext>({
  setError: () => {},
  state: initialState,
});

export default GlobalErrorContext;
