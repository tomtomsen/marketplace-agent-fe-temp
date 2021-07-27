import styles from './Footer.module.css';

type Properties = unknown;

const Footer: React.FunctionComponent<Properties> = () => (
  <>
    <footer className={styles.root}>
                written by tomtomsen
    </footer>
  </>
);

export default Footer;
