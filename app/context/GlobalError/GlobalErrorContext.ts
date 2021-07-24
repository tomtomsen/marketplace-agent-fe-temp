import React from 'react';
import { ErrorType } from '../../types';

export type TGlobalErrorContext = {
  state: ErrorType;
  setError: (value: ErrorType) => void;
};

export const initialState: ErrorType = {
  message: '',
  severity: 'error',
};

const GlobalErrorContext = React.createContext<TGlobalErrorContext>({
  setError: () => {},
  state: initialState,
});

export default GlobalErrorContext;
