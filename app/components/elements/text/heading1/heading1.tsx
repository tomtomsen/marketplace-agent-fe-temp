import React from 'react';

interface Props {
    children: string,
};

const Heading1: React.FunctionComponent<Props> = (props) => {
    const { children } = props;

    return (
        <>
            <h1>{children}</h1>
        </>
    );
}

export default Heading1;