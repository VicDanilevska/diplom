import React from 'react';
import {AnimatePresence} from "framer-motion";
import {Link, useParams} from "react-router-dom";
import {useUserContext} from "../context/UserContextProvider";
import useFetch from "../hooks/useFetch";
import PreLoader from "../components/PreLoader";
import {motion} from "framer-motion";

const Account = () => {
    const user = useUserContext();
    const {id} = useParams();
    const {data, error, isFetching} = useFetch(id)

    return (
        isFetching ?
        <PreLoader></PreLoader>
            :
        <motion.section
            exit={{x: '-100%', transition: {duration: 0.5}}}
            className={`flex flex-row justify-end h-screen`}>
            <motion.div
                className={'w-2/5 flex flex-col gap-5 h-full py-4 shadow-md shadow-blue-400 fixed left-0 top-0'}
                initial={{
                    y: '100%'
                }}
                animate={{
                    y: '0',
                    transition: {
                        duration: 0.5
                    }
                }}>

                <div className={''}>
                    <img src={''} alt="" className={''}/>
                    <h1 className={''}></h1>
                </div>

                <div className={''}>

                    <AnimatePresence initial={true} mode={'wait'}>

                        <motion.img
                            key={''}
                            src={''}
                            alt=""
                            className={''}
                        />
                    </AnimatePresence>

                </div>

                <div className={''}>

                </div>
            </motion.div>
            <div className={''}>
                {
                    (user && id === user.uid)
                    &&
                    <Link to={'/edit'}
                          className={''}>Редагувати
                        сторінку</Link>
                }
                <motion.div

                    className={''}>
                    <h1 className={''}>Про нас</h1>

                </motion.div>

                <motion.div
                    className={''}>
                    <h1 className={''}>Короткий опис</h1>
                </motion.div>


                <motion.div

                    className={''}>
                    <h1 className={''}>Наші послуги</h1>
                    <div className={''}>

                    </div>
                </motion.div>

            </div>

        </motion.section>
    );
};

export default Account;