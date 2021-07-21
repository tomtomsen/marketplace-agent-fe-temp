import React from 'react';
import { useSpring } from 'react-spring';
import usePrefersReducedMotion from '../../hooks/use-prefers-reduced-motion.hook';

type Properties = {
  x: number,
  y: number,
  rotation: number,
  scale: number,
  timing: number,
  springConfig: {
    friction: number,
    tension: number,
  },
};

export const useBoop = (properties: Properties): [React.CSSProperties, () => void] => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isBooped, setIsBooped] = React.useState(false);
  const {
    x,
    y,
    rotation,
    scale,
    timing,
    springConfig,
  } = properties;

  const style = useSpring({
    config: springConfig,
    transform: isBooped
      ? `translate(${x}px, ${y}px)
        rotate(${rotation}deg)
        scale(${scale})`
      : `translate(0px, 0px)
        rotate(0deg)
        scale(1)`,
  });
  const appliedStyle = prefersReducedMotion ? {} : style;
  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);

  React.useEffect(() => {
    if (!isBooped) {
      return () => {};
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  return [appliedStyle, trigger];
};

export default undefined;
