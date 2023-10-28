import React from 'react';
import {Link} from "react-router-dom";
import Markdown from "react-markdown";

const CompanyCard = ({shortDescription, id, name, logoUrl, imagesUrl}) => {
    return (
        <Link to={`/users/${id}`} className={'block shadow-md shadow-green-300 w-full border border-blue-400 px-4 py-2 max-h-96'}>
            <div className={'flex h-1/4 px-4 py-1 items-center'}>
                <img src={logoUrl} alt="" className={'max-h-full mr-2'}/>
                <h1 className={'grow text-3xl overflow-clip'}>{name}</h1>
            </div>
            <div className={'h-0.5 w-full border border-blue-200 rounded-full my-2'}></div>
            <div className={'h-3/4 flex mt-2'}>
                <div className={'grow flex justify-center items-center w-1/2'}>
                    <img src={imagesUrl[0]} alt="" className={'max-h-full'}/>
                </div>
                <Markdown className={'grow prose text-2xl w-1/2'}>{shortDescription}</Markdown>
            </div>
        </Link>
    );
};

export default CompanyCard;