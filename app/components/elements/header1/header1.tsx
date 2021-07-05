import React from 'react';

interface Header1Props {
    children: string,
};

const Header1: React.FunctionComponent<Header1Props> = (props) => {
    const { children } = props;

    return (
        <>
            <h1>{children}</h1>
        </>
    );
}

export default Header1;