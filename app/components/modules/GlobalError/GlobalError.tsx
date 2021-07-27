import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MUIAlert from '@material-ui/lab/Alert';
import MUISnackbar from '@material-ui/core/Snackbar';
import MUICloseIcon from '@material-ui/icons/Close';
import MUIIconButton from '@material-ui/core/IconButton';
import Slide, { SlideProps } from '@material-ui/core/Slide';
import { ErrorType } from '../../../types';

type GlobalErrorProperties = ErrorType;

const SlideTransition = (properties: SlideProps) => <Slide {...properties} direction="up" />;

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

const GlobalError: React.FunctionComponent<GlobalErrorProperties> = ({ message, severity }) => {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  React.useEffect(() => {
    setOpen(!!message);
  }, [message]);

  if (!message) {
    return (<></>);
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
        severity={severity}
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
