import React from 'react';

import {motion} from "framer-motion";
import {BiError, BiCheck} from "react-icons/bi";

const Modal = ({text, isError}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: '100%',
            }}
            animate={{
                opacity: 1,
                x: '0',
                transition: {
                    duration: 0.5,
                    type: 'ease-in-out'
                },
            }}
            exit={{
                opacity: 0,
                x: '-100%',
                transition: {
                    duration: 0.5,
                    type: 'ease-in-out'
                },
            }}
            className={`absolute top-20 border shadow-md ${isError ? 'shadow-red-400' : 'shadow-green-400'} px-4 py-2 ${isError ? 'border-red-400' : 'border-green-400'} bg-white flex`}>
            <h1 className={'text-2xl'}>
                {text}
            </h1>
            {isError ?
                <BiError className={'text-4xl text-red-500 ml-2'}/>
                :
                <BiCheck className={'text-4xl text-green-500 ml-2'}/>
            }
        </motion.div>
    );
};

export default Modal;