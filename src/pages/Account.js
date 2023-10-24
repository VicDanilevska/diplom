import React, {useState} from 'react';
import {AnimatePresence} from "framer-motion";
import {Link, useParams} from "react-router-dom";
import {useUserContext} from "../context/UserContextProvider";
import useFetch from "../hooks/useFetch";
import PreLoader from "../components/PreLoader";
import {motion} from "framer-motion";
import MarkDown from 'react-markdown';

const Account = () => {
    const user = useUserContext();
    const [currentImage, setCurrentImage] = useState(0);
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
                    <img src={data.logoUrl} alt="" className={''}/>
                    <h1 className={''}>{data.name}</h1>
                </div>

                <div className={''}>
                    {
                        data.imagesUrl.length !== 1
                        &&
                        <button onClick={(e) => {
                            setCurrentImage(prev => prev === 0 ? data.imagesUrl.length - 1 : prev - 1)
                            e.target.disabled = 'true';
                            setTimeout(() => {
                                e.target.disabled = '';
                            }, 500);
                        }
                        } className={''}>{'<'}</button>
                    }
                    <AnimatePresence initial={true} mode={'wait'}>

                        <motion.img
                            key={currentImage}
                            src={data.imagesUrl[currentImage]}
                            alt=""
                            className={''}
                        />
                    </AnimatePresence>

                    {
                        data.imagesUrl.length !== 1
                        &&
                        <button onClick={(e) => {
                            setCurrentImage(prev => prev === data.imagesUrl.length - 1 ? 0 : prev + 1)
                            e.target.disabled = 'true';
                            setTimeout(() => {
                                e.target.disabled = '';
                            }, 500);
                        }
                        } className={''}>{'>'}</button>
                    }
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
                    <MarkDown className={''}>
                        {data.fullDescription}
                    </MarkDown>
                </motion.div>

                <motion.div
                    className={''}>
                    <h1 className={''}>Короткий опис</h1>
                    <MarkDown className={''}>
                        {data.shortDescription}
                    </MarkDown>
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