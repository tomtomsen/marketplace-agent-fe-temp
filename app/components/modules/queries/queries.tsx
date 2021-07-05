import Header1 from '../../elements/text/heading1/heading1';
import TextField from '../../elements/textField/TextField';
import styles from './queries.module.css';

const Queries = () => {
    return (
        <>
            <div className={styles.root}>
                <Header1>Suchen</Header1>
                <div>
                    <TextField label="Suchbegriff" helperText={"zB: Auto, Lupe, ..."} />
                </div>
            </div>
        </>
    );
}

export default Queries;