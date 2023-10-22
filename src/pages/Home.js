import React from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <section className={'h-full w-full absolute top-0 left-0 overflow-y-hidden grid grid-cols-2 grid-rows-1'}>
            <motion.div className={''}>
                <motion.img src="" alt="" className={''}/>
                <motion.p className={''}></motion.p>
                <motion.div className={''}></motion.div>
            </motion.div>

            <motion.div className={''}>
                <motion.img src="" alt="" className={''}/>
                <motion.p className={''}></motion.p>
                <motion.div className={''}></motion.div>
            </motion.div>
        </section>
    );
};

export default Home;