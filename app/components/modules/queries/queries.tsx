import React from 'react';
import Button from '../../elements/button/Button';
import Header1 from '../../elements/text/heading1/heading1';
import TextField from '../../elements/textField/TextField';
import styles from './queries.module.css';
import useError from '../globalError/globalError.provider';

const Queries: React.FunctionComponent<Record<string, unknown>> = () => {
  const { setError } = useError();

  const onClick = () => {
    setError({ message: 'Fehler 101' });
  };

  return (
    <>
      <div className={styles.root}>
        <Header1>Suchen</Header1>
        <div>
          <TextField label="Suchbegriff" helperText={'zB: Auto, Lupe, ...'} />
          <Button onClick={onClick}>Speichern</Button>
        </div>
      </div>
    </>
  );
};

export default Queries;
