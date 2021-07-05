import React from 'react';
import styles from './globalError.module.css';

interface GlobalErrorProps {
    children: string,
    type?: 'error' | 'warning' | 'success';
}

const GlobalError: React.FunctionComponent<GlobalErrorProps> = (props: GlobalErrorProps) => {

    const { children, type } = props;

    return (
        <div className={styles.root}>
            {children}
        </div>
    )
}

export default GlobalError;