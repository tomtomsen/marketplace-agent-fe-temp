import React from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';
const isRenderingOnServer = typeof window === 'undefined';
const getInitialState = isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;

const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(getInitialState);
  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event: MediaQueryListEvent): any => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addEventListener<'change'>('change', listener);
    return () => {
      mediaQueryList.removeEventListener<'change'>('change', listener);
    };
  }, []);
  return prefersReducedMotion;
};

export default usePrefersReducedMotion;
