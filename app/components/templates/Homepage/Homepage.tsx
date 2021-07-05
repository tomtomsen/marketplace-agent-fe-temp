import React from 'react';
import Queries from '../../modules/queries/queries';
import Settings from '../../modules/settings/settings';

const Homepage: React.FunctionComponent = () => {
    return (
        <>
            <Queries />
            <Settings />
        </>
    );
}

export default Homepage;