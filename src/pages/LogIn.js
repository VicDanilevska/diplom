import React, {useRef, useState} from 'react';
import {motion} from "framer-motion";
import {getAnimation} from "../utils/utils";
import {Link} from "react-router-dom";
import {useUserContext} from '../context/UserContextProvider';
import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';
import Modal from '../components/Modal';
import {AnimatePresence} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {FaHome, FaUser} from "react-icons/fa";

const LogIn = () => {

    const user = useUserContext();
    const navigation = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [modalState, setModalState] = useState({
        isOpen: false,
        text: '',
        isError: true
    })

    const handleRequestError = (text) => {
        setModalState(prev => ({
            ...prev,
            text: text
        }))
    }

    return (
        <motion.section
            initial={{x: '100%'}}
            animate={{x: 0, transition: {duration: 0.5}}}
            exit={{x: '-100%', transition: {duration: 0.5}}}
            className={'flex flex-col justify-center items-center h-screen w-full overflow-x-hidden'}>

            <AnimatePresence initial={true} mode={'wait'}>
                {modalState.isOpen && <Modal text={modalState.text} isError={modalState.isError}/>}
            </AnimatePresence>

            <div className={'w-2/6'}>

                <div>
                    <Link to={`/list`} className={''}>
                        <FaHome className={''}></FaHome>
                    </Link>
                    {user
                        &&
                    <Link to={`/users/${user.uid}`} className={''}>
                        <FaUser className={''}></FaUser>
                    </Link>}
                </div>

                <form className={'bg-white shadow-md rounded px-8 pt-6 pb-8'}>
                    <div className={'mb-4'}>
                        <motion.label
                            variants={getAnimation(1)}
                            initial={'initial'}
                            animate={'animate'}
                            htmlFor="Email"
                            className={'block text-gray-700 text-4xl font-bold mb-2'}>
                            Логін
                        </motion.label>
                        <motion.input
                            variants={getAnimation(2)}
                            initial={'initial'}
                            animate={'animate'}
                            type="text"
                            id={'Email'}
                            placeholder={'Email'}
                            ref={emailRef}
                            className={'shadow border text-3xl rounded w-full py-2 px-3 text-gray-700'}
                            onChange={e => {
                                setUserInfo(prev => ({
                                    ...prev,
                                    email: e.target.value
                                }));
                            }}/>
                    </div>
                    <div className={'mb-6'}>
                        <motion.label
                            variants={getAnimation(3)}
                            initial={'initial'}
                            animate={'animate'}
                            htmlFor="Password"
                            className={'block text-gray-700 text-4xl font-bold mb-2'}>
                            Пароль
                        </motion.label>
                        <motion.input
                            variants={getAnimation(4)}
                            initial={'initial'}
                            animate={'animate'}
                            type="password"
                            id={'Password'}
                            className={'shadow border rounded w-full py-2 px-3 text-3xl text-gray-700 mb-3'}
                            placeholder="Пароль"
                            ref={passwordRef}
                            onChange={e => {
                                setUserInfo(prev => ({
                                    ...prev,
                                    password: e.target.value
                                }));
                            }}/>
                    </div>
                    <div className={'flex items-center justify-between'}>
                        <button
                            onClick={async () => {
                                await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password).then(() => {
                                    setModalState(prev => ({
                                        ...prev,
                                        isError: false,
                                        isOpen: true,
                                        text: 'Вхід виконано успішно !'
                                    }))
                                    passwordRef.current.style.border = '1px solid green';
                                    emailRef.current.style.border = '1px solid green';

                                    setTimeout(() => {
                                        onAuthStateChanged(auth, (user) => {
                                            navigation(`/users/${user.uid}`)
                                        })
                                    }, 1500)
                                }).catch((reason) => {
                                    const code = reason.code;
                                    switch (code) {
                                        case 'auth/invalid-email':
                                            emailRef.current.style.border = '1px solid red';
                                            passwordRef.current.style.border = '';
                                            handleRequestError('Email введено неправильно !')
                                            return;
                                        case 'auth/invalid-login-credentials':
                                            emailRef.current.style.border = '1px solid red';
                                            passwordRef.current.style.border = '1px solid red';
                                            handleRequestError('Неправильно введені дані користувача !')
                                            return;
                                        case 'auth/user-not-found':
                                            emailRef.current.style.border = '1px solid red';
                                            passwordRef.current.style.border = '';
                                            handleRequestError('Користувача з таким email не знайдено !')
                                            return;
                                        case 'auth/wrong-password':
                                        case 'auth/missing-password':
                                            passwordRef.current.style.border = '1px solid red'
                                            emailRef.current.style.border = '';
                                            handleRequestError('Пароль вказано неправильно !')
                                            return;
                                        case 'auth/too-many-requests':
                                            passwordRef.current.style.border = '1px solid red';
                                            emailRef.current.style.border = '1px solid red';
                                            handleRequestError('Забагато запитів, спробуйте трохи пізніше !')
                                            return;
                                    }
                                }).finally(async () => {
                                    setModalState(prev => ({
                                        ...prev,
                                        isOpen: true
                                    }));
                                    setTimeout(() => {
                                        setModalState(prev => ({
                                            ...prev,
                                            isOpen: false
                                        }));
                                    }, 2000)
                                });
                            }}
                            className={'relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}
                            type={'button'}>
                            Увійти
                            <motion.div
                                animate={{
                                    left: '100%',
                                    width: '0',
                                    transition: {
                                        delay: 1,
                                        duration: 0.5
                                    }
                                }}
                                className={'bg-white absolute w-full h-full left-0 top-0 pointer-events-none'}>
                            </motion.div>
                        </button>
                        <Link
                            to={'/signup'}
                            className={'relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:-bottom-1 before:left-0 before:bg-black before:transition-all before:duration-500 hover:before:w-full hover:scale-110'}>
                            {'Ще не маєте аккаунту ?'.split('').map((letter, index) => {
                                return <motion.span key={index}
                                                    initial={{
                                                        y: '-10px',
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        y: '0px',
                                                        opacity: 1,
                                                        transition: {
                                                            delay: (index + 2) * 0.05,
                                                            duration: 0.2,
                                                        }
                                                    }}
                                                    className={'inline-block'}>
                                    {letter === ' ' ? '\u00A0' : letter}
                                </motion.span>
                            })}
                        </Link>

                    </div>
                </form>

            </div>


        </motion.section>
    );
};

export default LogIn;