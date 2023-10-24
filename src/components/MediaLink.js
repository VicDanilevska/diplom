import React from 'react';

const MediaLink = ({href, className, icon}) => {
    return (
        <div className={`hover:grow rounded-2xl py-2 px-4 ${className} relative flex items-center justify-center cursor-pointer transition-all duration-500`}>
            <a href={href} className={'text-4xl text-white rounded-xl z-10'}>{icon}</a>
        </div>
    );
};

export default MediaLink;