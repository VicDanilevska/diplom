import React from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {HomeAuthorImageUrl} from "../images/images";
import {HomeGuestImageUrl} from "../images/images";

const Home = () => {
    return (
        <section className={'h-full w-full absolute top-0 left-0 overflow-y-hidden grid grid-cols-2 grid-rows-1'}>
            <motion.div
                initial={{y: '100%'}}
                animate={{y: 0, transition: {duration: 0.5}}}
                exit={{y: '-100%', transition: {duration: 0.5}}}
                className={'h-full flex flex-col items-center'}>
                <motion.img
                    initial={{
                        y: '20px',
                        opacity: 0
                    }}
                    animate={{
                        y: '0px',
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            delay: 0.5,
                        }
                    }}
                    src={HomeGuestImageUrl}
                    alt=""
                    className={'max-w-[60%] mt-20'}/>
                <motion.p
                    initial={{
                        y: '20px',
                        opacity: 0
                    }}
                    animate={{
                        y: '0px',
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            delay: 0.75,
                        }
                    }}
                    className={'text-2xl font-semibold text-center rounded-s shadow-md shadow-green-300 max-w-[70%] px-4 py-2'}>
                    Ти знаходишся у пошуку професійної студії, кваліфікованого персоналу, досконало виконаних процедур
                </motion.p>
                <motion.div
                    initial={{
                        x: '-20px',
                        opacity: 0
                    }}
                    animate={{
                        x: '0px',
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            delay: 1,
                        }
                    }}
                    className={'mt-auto mb-10'}>
                    <Link to={'/list'} className={'text-5xl block border-black py-5 w-fit px-10 text-center hover:bg-blue-400 hover:text-white hover:border-blue-300 transition duration-200 ease-linear'}>Я - гість !</Link>
                </motion.div>
            </motion.div>

            <motion.div className={'h-full flex flex-col items-center bg-blue-500'}>
                <motion.img src={HomeAuthorImageUrl} alt="" className={'max-w-[60%] mt-20'}/>
                <motion.p className={'text-2xl text-white font-semibold text-center rounded-s shadow-md shadow-white max-w-[70%] px-4 py-2'}>
                    Ти бажаєш зарекомедувати себе або свою компанію як професіонала у своїй сфері
                </motion.p>
                <motion.div className={'mt-auto mb-10'}>
                    <Link to={'/login'} className={'text-5xl block text-white  py-5 w-fit px-10  border border-white py-5 text-center hover:bg-white hover:text-black transition duration-200 ease-linear'}>Я - автор !</Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Home;