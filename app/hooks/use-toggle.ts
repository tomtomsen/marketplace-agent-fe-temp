import React from 'react';

const useToggle = (defaultState: boolean): [boolean, () => void] => {
  const [state, setState] = React.useState<boolean>(defaultState);

  const toggle = () => {
    const newState = !state;
    setState(newState);
  };

  return [state, toggle];
};

export default useToggle;
