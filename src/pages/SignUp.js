import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion';
import Modal from "../components/Modal";
import {FaHome, FaUser} from "react-icons/fa";
import {useUserContext} from "../context/UserContextProvider";

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

                <div className="">
                    <motion.h1
                        className="">
                        Реєстрація
                    </motion.h1>

                    <motion.input
                        type="text"
                        className=""/>

                    <motion.input
                        type="password"
                        className=""
                    />
                    <motion.input
                        type="password"
                        className=""
                    />

                    <button
                        type={'button'}
                        className=""
                    >Створити аккаунт
                        <motion.div className={''}></motion.div>
                    </button>

                </div>
            </div>

        </motion.section>
    );
};

export default SignUp;