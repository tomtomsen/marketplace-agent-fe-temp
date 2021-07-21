import React from 'react';
import TextField from '../../elements/TextField/TextField';
import Header1 from '../../elements/Typography/Heading1/Heading1';
import styles from './Settings.module.css';

type Properties = unknown;

const Settings: React.FunctionComponent<Properties> = () => (
  <>
    <div className={styles.root}>
      <Header1>Einstellungen</Header1>
      <TextField label={'Username'} />
    </div>
  </>
);

export default Settings;
