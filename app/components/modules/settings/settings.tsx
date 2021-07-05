import React from 'react';
import TextField from '../../elements/textField/TextField';
import Header1 from '../../elements/text/heading1/heading1';
import styles from './settings.module.css';

const Settings: React.FunctionComponent = () => {
    return (
        <>
            <div className={styles.root}>
                <Header1>Einstellungen</Header1>
                <TextField label={"Username"} />
            </div>
        </>
    )
}

export default Settings;