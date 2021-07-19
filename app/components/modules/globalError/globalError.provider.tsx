import React from 'react';
import GlobalError, { ErrorProps } from './globalError';

export function createCtx<ContextType>(): readonly [any, any] {
  const ctx = React.createContext<ContextType | undefined>(undefined);
  const useCtx = () => {
    const c = React.useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  };
  return [useCtx, ctx.Provider] as const;
}

interface ErrorContext {
  error: ErrorProps;
  setError: (value: ErrorProps) => void;
}
const [useError, CtxProvider] = createCtx<ErrorContext>();

type Props = {
  children: React.ReactNode;
};

export const ErrorProvider = ({ children }: Props): React.ReactNode => {
  const [error, setError] = React.useState({ error: '', type: 'error' } as ErrorProps);

  return (
    <>
      <CtxProvider value={{ error, setError }}>
        <GlobalError message={error.message} type={error.type}></GlobalError>
        {children}
      </CtxProvider>
    </>
  );
};

export default useError;
