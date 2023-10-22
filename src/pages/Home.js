import React from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {HomeAuthorImageUrl} from "../images/images";
import {HomeGuestImageUrl} from "../images/images";

const Home = () => {
    return (
        <section className={'h-full w-full absolute top-0 left-0 overflow-y-hidden grid grid-cols-2 grid-rows-1'}>
            <motion.div
                className={'h-full flex flex-col items-center'}>
                <motion.img src={HomeGuestImageUrl} alt="" className={'max-w-[60%] mt-20'}/>
                <motion.p className={'text-2xl font-semibold text-center rounded-s shadow-md shadow-green-300 max-w-[70%] px-4 py-2'}>
                    Ти знаходишся у пошуку професійної студії, кваліфікованого персоналу, досконало виконаних процедур
                </motion.p>
                <motion.div className={'mt-auto mb-10'}>
                    <Link to={'/list'} className={'text-5xl block border-black py-5 w-fit px-10 text-center hover:bg-blue-400 hover:text-white hover:border-blue-300 transition duration-200 ease-linear'}>Я - гість !</Link>
                </motion.div>
            </motion.div>

            <motion.div className={''}>
                <motion.img src={HomeAuthorImageUrl} alt="" className={''}/>
                <motion.p className={''}>
                    Ти бажаєш зарекомедувати себе або свою компанію як професіонала у своїй сфері
                </motion.p>
                <motion.div className={''}></motion.div>
                <Link to={'/login'}>Я - автор !</Link>
            </motion.div>
        </section>
    );
};

export default Home;