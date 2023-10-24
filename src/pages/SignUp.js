import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion';
import Modal from "../components/Modal";
import {FaHome, FaUser} from "react-icons/fa";
import {useUserContext} from "../context/UserContextProvider";
import {getAnimation} from "../utils/utils";

const SignUp = () => {

    const user = useUserContext();


    const [modalState, setModalState] = useState({
        isOpen: false,
        text: '',
        isError: true
    })

    return (
        <motion.section
            initial={{x: '100%'}}
            animate={{x: 0, transition: {duration: 0.5}}}
            exit={{x: '-100%', transition: {duration: 0.5}}}
            className={'h-screen w-full overflow-x-hidden flex items-center justify-center'}>

            <AnimatePresence initial={true} mode={'wait'}>
                {modalState.isOpen && <Modal text={modalState.text} isError={modalState.isError}/>}
            </AnimatePresence>

            <div className={'w-2/6'}>
                <div className={'flex'}>
                    <Link to={`/list`}
                          className={'transition-all duration-250 group hover:bg-blue-600 grow border border-t-blue-500 w-1/2 flex justify-center items-center px-4 py-2'}>
                        <FaHome
                            className={'transition-all duration-250 group-hover:text-white text-6xl text-blue-700'}></FaHome>
                    </Link>
                    {user
                        &&
                        <Link to={`/users/${user.uid}`}
                              className={'transition-all duration-250 group hover:bg-blue-600 grow border border-t-blue-500 w-1/2 flex justify-center items-center px-4 py-2'}>
                            <FaUser
                                className={'transition-all duration-250 group-hover:text-white text-6xl text-blue-700'}></FaUser>
                        </Link>}
                </div>

                <div className={'bg-white px-6 py-8 rounded shadow-md text-black'}>
                    <motion.h1
                        variants={getAnimation(1)}
                        initial={'initial'}
                        animate={'animate'}
                        className={"mb-8 text-4xl font-bold text-center"}>
                        Реєстрація
                    </motion.h1>

                    <motion.input
                        variants={getAnimation(3)}
                        initial={'initial'}
                        animate={'animate'}
                        type="text"
                        className={"block border border-grey-light w-full p-3 rounded mb-4 text-3xl"}
                        placeholder="Email"
                    />

                    <motion.input
                        type="password"
                        className={"block border border-grey-light w-full p-3 rounded mb-4 text-3xl"}
                        variants={getAnimation(4)}
                        initial={'initial'}
                        animate={'animate'}
                        placeholder="Пароль"
                    />

                    <motion.input
                        type="password"
                        className={"block border border-grey-light w-full p-3 rounded mb-4 text-3xl"}
                        variants={getAnimation(5)}
                        initial={'initial'}
                        animate={'animate'}
                        placeholder="Підтвердіть пароль"
                    />

                    <button
                        type={'button'}
                        className={"w-full relative text-center text-2xl py-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1"}
                    >Створити аккаунт
                        <motion.div
                            className={'bg-white absolute w-[105%] h-full left-0 top-0 pointer-events-none'}
                            animate={{
                                left: '100%',
                                width: 0,
                                transition: {
                                    delay: 1,
                                    duration: 0.5
                                },
                            }}>

                        </motion.div>
                    </button>

                </div>
            </div>

        </motion.section>
    );
};

export default SignUp;