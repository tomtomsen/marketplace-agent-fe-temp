import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import logo from './logo.svg';

type Props = unknown;

const Header: React.FunctionComponent<Props> = () => (
  <>
    <header className={styles.root}>
      <Image src={logo} className={styles.logo} height={'100vmin'} alt="logo" />
    </header>
  </>
);

export default Header;
