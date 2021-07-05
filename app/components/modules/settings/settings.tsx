import React from 'react';
import Header1 from '../../elements/text/heading1/heading1';
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