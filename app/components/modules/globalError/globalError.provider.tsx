import React from 'react'
import GlobalError from './globalError';

export function createCtx<ContextType>() {
    const ctx = React.createContext<ContextType | undefined>(undefined);
    function useCtx() {
      const c = React.useContext(ctx);
      if (!c) throw new Error("useCtx must be inside a Provider with a value");
      return c;
    }
    return [useCtx, ctx.Provider] as const;
  }
  
  type ErrorContextType = {
    error: string;
    setError: (value: string) => void;
  };
  const [useError, CtxProvider] = createCtx<ErrorContextType>();

  type Props = {
    children: React.ReactNode;
  };

  export const ErrorProvider = ({ children }: Props) => {
    const [error, setError] = React.useState('');

    return (
        <>
            <CtxProvider value={{ error, setError }}>
                {error && <GlobalError message={error}></GlobalError>}
                {children}
            </CtxProvider>
        </>
    );
  };

export default useError;