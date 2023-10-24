import React, {useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion';
import Modal from "../components/Modal";
import {FaHome, FaUser} from "react-icons/fa";
import {useUserContext} from "../context/UserContextProvider";
import {getAnimation} from "../utils/utils";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../firebase";

const SignUp = () => {

    const user = useUserContext();
    const navigation = useNavigate();


    const [modalState, setModalState] = useState({
        isOpen: false,
        text: '',
        isError: true
    });

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        rePassword: '',
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const rePasswordRef = useRef(null);

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
                        ref={emailRef}
                        className={"block border border-grey-light w-full p-3 rounded mb-4 text-3xl"}
                        placeholder="Email"
                        onChange={(e) => {
                            setUserInfo(prev => ({
                                ...prev,
                                email: e.target.value
                            }))
                        }}
                    />

                    <motion.input
                        type="password"
                        ref={passwordRef}
                        className={"block border border-grey-light w-full p-3 rounded mb-4 text-3xl"}
                        variants={getAnimation(4)}
                        initial={'initial'}
                        animate={'animate'}
                        placeholder="Пароль"
                        onChange={(e) => {
                            setUserInfo(prev => ({
                                ...prev,
                                password: e.target.value
                            }))
                        }}
                    />

                    <motion.input
                        type="password"
                        ref={rePasswordRef}
                        className={"block border border-grey-light w-full p-3 rounded mb-4 text-3xl"}
                        variants={getAnimation(5)}
                        initial={'initial'}
                        animate={'animate'}
                        placeholder="Підтвердіть пароль"
                        onChange={(e) => {
                            setUserInfo(prev => ({
                                ...prev,
                                rePassword: e.target.value
                            }))
                        }}
                    />

                    <button
                        type={'button'}
                        className={"w-full relative text-center text-2xl py-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1"}
                        onClick={async () => {
                            if (userInfo.password === userInfo.rePassword)
                                await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password).then((userCredentials) => {
                                    setModalState(prev => ({
                                        ...prev,
                                        isError: false,
                                        text: 'Вхід виконано успішно !'
                                    }))
                                    passwordRef.current.style.border = '1px solid green';
                                    emailRef.current.style.border = '1px solid green';
                                    rePasswordRef.current.style.border = '1px solid green';

                                    setTimeout(() => {
                                        navigation('/edit');
                                    }, 1500);
                                }).catch((reason) => {
                                    const code = reason.code;

                                    switch (code) {
                                        case 'auth/invalid-email':
                                            emailRef.current.style.border = '1px solid red';
                                            passwordRef.current.style.border = '';
                                            rePasswordRef.current.style.border = '';
                                            setModalState(prev => ({
                                                ...prev,
                                                text: 'Email введено неправильно !'
                                            }))
                                            return;
                                        case 'auth/email-already-in-use':
                                            emailRef.current.style.border = '1px solid red';
                                            passwordRef.current.style.border = '';
                                            rePasswordRef.current.style.border = '';
                                            setModalState(prev => ({
                                                ...prev,
                                                text: 'Користувача з таким email вже є !'
                                            }))
                                            return;
                                        case 'auth/wrong-password':
                                        case 'auth/missing-password':
                                            passwordRef.current.style.border = '1px solid red';
                                            rePasswordRef.current.style.border = '1px solid red';
                                            emailRef.current.style.border = '';
                                            setModalState(prev => ({
                                                ...prev,
                                                text: 'Пароль вказано неправильно !'
                                            }))
                                            return;
                                        case 'auth/weak-password':
                                            passwordRef.current.style.border = '1px solid red';
                                            rePasswordRef.current.style.border = '1px solid red';
                                            emailRef.current.style.border = '';
                                            setModalState(prev => ({
                                                ...prev,
                                                text: 'Слабкий пароль (мінімум 6 символів) !'
                                            }))
                                            return;
                                        case 'auth/too-many-requests':
                                            passwordRef.current.style.border = '1px solid red';
                                            emailRef.current.style.border = '1px solid red';
                                            rePasswordRef.current.style.border = '1px solid red';
                                            setModalState(prev => ({
                                                ...prev,
                                                text: 'Забагато запитів, спробуйте трохи пізніше !'
                                            }))
                                            return;
                                    }
                                }).finally(async () => {
                                    setModalState(prev => ({
                                        ...prev,
                                        isOpen: true
                                    }))
                                    setTimeout(() => {
                                        setModalState(prev => ({
                                            ...prev,
                                            isOpen: false
                                        }))
                                    }, 2000)
                                });
                            else {
                                emailRef.current.style.border = '';
                                passwordRef.current.style.border = '1px solid red';
                                rePasswordRef.current.style.border = '1px solid red';
                                setModalState(prev => ({
                                    ...prev,
                                    text: 'Паролі не співдпадають !',
                                    isOpen: true,
                                }))
                                setTimeout(() => {
                                    setModalState(prev => ({
                                        ...prev,
                                        isOpen: false,
                                    }))
                                }, 2000)
                            }
                        }}
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