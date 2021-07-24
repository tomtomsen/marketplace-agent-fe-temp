import React from 'react';
import GlobalError from '../../components/modules/globalError/GlobalError';
import { ErrorType } from '../../types';
import GlobalErrorContext, { TGlobalErrorContext } from './GlobalErrorContext';

export const useError = (): TGlobalErrorContext => React.useContext(GlobalErrorContext);

type Properties = {
  children: React.ReactChild | Array<React.ReactChild>;
};

const GlobalErrorProvider: React.FunctionComponent<Properties> = ({ children }) => {
  const [error, setError] = React.useState<ErrorType>({ message: '', severity: 'error' });

  return (
    <GlobalErrorContext.Provider value={{ setError, state: error }}>
      <GlobalError message={error.message} severity={error.severity}></GlobalError>
      {children}
    </GlobalErrorContext.Provider>
  );
};

export default GlobalErrorProvider;
