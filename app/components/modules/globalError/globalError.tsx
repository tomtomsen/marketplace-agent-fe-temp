import React from 'react';
import styles from './globalError.module.css';
// import MUIAlert from '@material-ui/lab/Alert';
import MUISnackbar from '@material-ui/core/Snackbar';
import Slide, { SlideProps } from '@material-ui/core/Slide';
import MUIIconButton from '@material-ui/core/IconButton';

interface GlobalErrorProps {
    type?: 'error' | 'warning' | 'success';
    children?: string;
    message?: string;
}


const SlideTransition = (props: SlideProps) => {
    return <Slide {...props} direction="up" />;
}

const GlobalError: React.FunctionComponent<GlobalErrorProps> = 
    ({type, message, children}) => {
    const [open, setOpen] = React.useState(true);

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
      if (reason === 'clickaway') {
        return;
      }
  
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
                <MUIIconButton size="small" aria-label="close" color="inherit" onClick={handleClick}>
                  x
                </MUIIconButton>
              </React.Fragment>
            }
        />
    )
}

export default GlobalError;