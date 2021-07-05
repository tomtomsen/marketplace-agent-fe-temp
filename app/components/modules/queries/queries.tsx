import React from 'react';
import Button from '../../elements/button/Button';
import Header1 from '../../elements/text/heading1/heading1';
import TextField from '../../elements/textField/TextField';
import styles from './queries.module.css';

const Queries: React.FunctionComponent<{}> = () => {
    return (
        <>
            <div className={styles.root}>
                <Header1>Suchen</Header1>
                <div>
                    <TextField label="Suchbegriff" helperText={"zB: Auto, Lupe, ..."} />
                    <Button>Speichern</Button>
                </div>
            </div>
        </>
    );
}

export default Queries;