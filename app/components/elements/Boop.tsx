import React from 'react';
import { useSpring } from 'react-spring';
import usePrefersReducedMotion from '../../hooks/use-prefers-reduced-motion.hook';

export const useBoop = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    friction: 10,
    tension: 300,
  },
}): [React.CSSProperties, () => void] => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isBooped, setIsBooped] = React.useState(false);
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
  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);
  const appliedStyle = prefersReducedMotion ? {} : style;
  return [appliedStyle, trigger];
};

export default undefined;
