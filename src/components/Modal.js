import React from 'react';

import {motion} from "framer-motion";
import {BiError, BiCheck} from "react-icons/bi";

const Modal = ({text, isError}) => {
    return (
        <motion.div className={''}>
            <h1 className={''}>
                {text}
            </h1>
            {isError ?
                <BiError className={''}/>
                :
                <BiCheck className={''}/>
            }
        </motion.div>
    );
};

export default Modal;