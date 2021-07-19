import React from 'react';
import styles from './globalError.module.css';
// import MUIAlert from '@material-ui/lab/Alert';
import MUISnackbar from '@material-ui/core/Snackbar';
import Slide, { SlideProps } from '@material-ui/core/Slide';
import MUIIconButton from '@material-ui/core/IconButton';

export type ErrorType = 'error' | 'warning' | 'success';

export interface ErrorProps {
  type?: ErrorType;
  message?: string;
}

interface GlobalErrorProps extends ErrorProps {
    children?: string;
}

const SlideTransition = (props: SlideProps) => {
    return <Slide {...props} direction="up" />;
}

const GlobalError: React.FunctionComponent<GlobalErrorProps> =
    ({type, message, children}) => {
    const [open, setOpen] = React.useState(true);
    React.useEffect(() => {
      setOpen(!!message);
    }, [message]);

    if (!type) {
        type = 'error';
    }

    if (!message) {
        message = children;
    }

    if (!message) {
        return null;
    }

    const handleClose = (event: any, reason: any) => {
      setOpen(false);
    };

    const handleClick = () => {
      setOpen(false);
    }

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
    )
}

export default GlobalError;
