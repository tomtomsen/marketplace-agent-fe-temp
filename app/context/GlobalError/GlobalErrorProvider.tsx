import React from 'react';
import GlobalError from '../../components/modules/globalError/GlobalError';
import GlobalErrorContext, { TGlobalErrorState, TGlobalErrorContext } from './GlobalErrorContext';

export const useError = (): TGlobalErrorContext => React.useContext(GlobalErrorContext);

type Properties = {
  children: React.ReactChild | Array<React.ReactChild>;
};

const GlobalErrorProvider: React.FunctionComponent<Properties> = ({ children }) => {
  const [error, setError] = React.useState<TGlobalErrorState>({ message: '', type: 'error' });

  return (
    <GlobalErrorContext.Provider value={{ setError, state: error }}>
      <GlobalError message={error.message} type={error.type}></GlobalError>
      {children}
    </GlobalErrorContext.Provider>
  );
};

export default GlobalErrorProvider;
