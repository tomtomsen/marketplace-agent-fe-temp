import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useToggle from '../../../hooks/use-toggle';

export enum State {
  More = 1,
  Less,
}

type Properties = {
  state?: State;
  onToggle?: () => void;
};

const CollapseButton: React.FunctionComponent<Properties> = ({
  state = State.More,
  onToggle = () => {},
}) => {
  const [isMore, toggleState] = useToggle(state === State.More);

  const handleClick = () => {
    toggleState();
    onToggle();
  };

  return (
    <IconButton
      data-testid="collapse-button"
      onClick={handleClick}
    >
      { isMore ? (
        <ExpandMoreIcon
          data-testid="collapse-button-more"
        />
      ) : (
        <ExpandLessIcon
          data-testid="collapse-button-less"
        />
      )}
    </IconButton>
  );
};

export default CollapseButton;
