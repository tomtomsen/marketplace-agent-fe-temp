import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MUIAlert from '@material-ui/lab/Alert';
import MUISnackbar from '@material-ui/core/Snackbar';
import MUICloseIcon from '@material-ui/icons/Close';
import MUIIconButton from '@material-ui/core/IconButton';
import Slide, { SlideProps } from '@material-ui/core/Slide';

export type ErrorType = 'error' | 'warning' | 'success';

export interface ErrorProps {
  type?: ErrorType;
  message?: string;
}

type GlobalErrorProps = ErrorProps;

const SlideTransition = (props: SlideProps) => <Slide {...props} direction="up" />;

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

const GlobalError: React.FunctionComponent<GlobalErrorProps> = ({ message, type }) => {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  React.useEffect(() => {
    setOpen(!!message);
  }, [message]);

  if (!message) {
    return null;
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MUISnackbar
      data-testid="global-error"
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
      TransitionComponent={SlideTransition}
    >
      <MUIAlert
        variant="filled"
        onClose={handleClose}
        severity={type}
        action={
          <MUIIconButton
            data-testid="global-error-close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <MUICloseIcon />
          </MUIIconButton>
        }
      >
        {message}
      </MUIAlert>
    </MUISnackbar>
  );
};

GlobalError.defaultProps = {
  type: 'error',
};

export default GlobalError;
