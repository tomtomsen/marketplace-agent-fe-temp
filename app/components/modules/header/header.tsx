import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import logo from './logo.svg';

const Header: React.FunctionComponent = () => {
    return (
        <>
            <header className={styles.root}>
                <Image src={logo} className={styles.logo} height={'100vmin'} alt="logo" />
            </header>
        </>
    );
}

export default Header;
