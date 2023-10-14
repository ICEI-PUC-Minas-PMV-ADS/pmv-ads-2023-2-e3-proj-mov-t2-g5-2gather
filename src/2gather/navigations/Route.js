import React from 'react';

import { useUser } from '../contexts/UserContext';

import MainNav from './Main';
import UnsignedViews from './UnsignedViews';


const Main = () => {

    const { signed } = useUser();
    return (
        <>
            {
                signed
                    ? <MainNav />
                    : <UnsignedViews />
            }
        </>
    )

}

export default Main;