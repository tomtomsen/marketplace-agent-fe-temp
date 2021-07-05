import React from 'react';
import Footer from '../../modules/footer/footer';
import Header from '../../modules/header/header';

interface Props {
    children: React.ReactNode;
}

const Default: React.FunctionComponent<Props> = 
    ({ children }) => (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )

export default Default;