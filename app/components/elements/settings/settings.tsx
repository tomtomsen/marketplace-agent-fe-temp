import React from 'react';
import Header1 from '../header1/header1';
import styles from './settings.module.css';

const Settings: React.FunctionComponent = () => {
    return (
        <>
            <div className={styles.root}>
                <Header1>Einstellungen</Header1>
            </div>
        </>
    )
}

export default Settings;