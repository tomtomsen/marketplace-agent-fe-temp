import React from 'react';
// import MUIAlert from '@material-ui/lab/Alert';
import MUISnackbar from '@material-ui/core/Snackbar';
import Slide, { SlideProps } from '@material-ui/core/Slide';
import MUIIconButton from '@material-ui/core/IconButton';

export type ErrorType = 'error' | 'warning' | 'success';

export interface ErrorProps {
  type?: ErrorType;
  message?: string;
}

type GlobalErrorProps = ErrorProps;

const SlideTransition = (props: SlideProps) => <Slide {...props} direction="up" />;

const GlobalError: React.FunctionComponent<GlobalErrorProps> = ({ message }) => {
  const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    setOpen(!!message);
  }, [message]);

  if (!message) {
    return null;
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <MUISnackbar
      data-testid="global-error"
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
      message={message}
      TransitionComponent={SlideTransition}
      action={
        <React.Fragment>
          <MUIIconButton size="small" aria-label="close" color="inherit" onClick={handleClick} data-testid="global-error-close">
                  x
          </MUIIconButton>
        </React.Fragment>
      }
    />
  );
};

GlobalError.defaultProps = {
  type: 'error',
};

export default GlobalError;
