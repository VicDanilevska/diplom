import React from 'react';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import Markdown from "react-markdown";

const CompanyCard = ({shortDescription, id, name, logoUrl, imagesUrl}) => {
    return (
        <motion.section
            initial={{
                x: '50%',
                opacity: 0
            }}
            whileInView={{
                x: '0',
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            }}
            exit={{
                x: '50%',
                opacity: 0,
                transition: {
                    duration: 0.5
                }
            }}
            viewport={{once: true}}
        >
            <Link to={`/users/${id}`} className={'block shadow-md shadow-green-300 w-full border border-blue-400 px-4 py-2 h-96'}>
                <div className={'flex h-1/4 px-4 py-1 items-center border-b border-b-blue-300'}>
                    {logoUrl !== ''
                        ?
                        <img src={logoUrl} className={'max-h-full block mr-2'}/>
                        :
                        <div className={'min-w-1/5 bg-blue-600 p-2 flex justify-center items-center rounded-xl mr-2'}>
                            <h1 className={'text-white text-xl text-center'}>Зображення немає</h1>
                        </div>
                    }
                    <h1 className={'grow text-3xl overflow-clip'}>{name}</h1>
                </div>
                <div className={'h-3/4 flex pt-1'}>
                    <div className={'grow flex justify-center items-center w-1/2'}>
                        {imagesUrl.length
                            ?
                            <img src={imagesUrl[0]} alt={''} className={'h-3/4'}/>
                            :
                            <div className={'h-3/4 w-3/4 bg-blue-600 p-2 flex justify-center items-center rounded-xl mr-2'}>
                                <h1 className={'text-white text-xl text-center'}>Зображення немає</h1>
                            </div>
                        }
                    </div>
                    <Markdown className={'grow prose text-2xl w-1/2 block'}>{shortDescription}</Markdown>
                </div>
            </Link>
        </motion.section>
    );
};

export default CompanyCard;