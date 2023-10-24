import React from 'react';
import {Vortex} from "react-loader-spinner";

const PreLoader = () => {
    return (
        <div className={'h-screen w-screen grid place-content-center'}>
            <Vortex
                visible={true}
                height="500"
                width="500"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['lightblue', 'transparent', 'lightblue', 'transparent', 'transparent', 'lightblue']}
            />
        </div>
    );
};

export default PreLoader;