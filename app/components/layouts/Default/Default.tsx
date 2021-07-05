import React from 'react';
import Footer from '../../elements/footer/footer';
import Header from '../../elements/header/header';

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