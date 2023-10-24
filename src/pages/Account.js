import React, {useState} from 'react';
import {AnimatePresence} from "framer-motion";
import {Link, useParams} from "react-router-dom";
import {useUserContext} from "../context/UserContextProvider";
import useFetch from "../hooks/useFetch";
import PreLoader from "../components/PreLoader";
import {motion} from "framer-motion";
import MarkDown from 'react-markdown';
import {FaFacebook, FaInstagram, FaTelegram, FaTwitter} from "react-icons/fa";
import MediaLink from "../components/MediaLink";

const Account = () => {
    const user = useUserContext();
    const [currentImage, setCurrentImage] = useState(0);
    const {id} = useParams();
    const {data, error, isFetching} = useFetch(id)

    const mediaIcons = {
        instagram: {
            icon: <FaInstagram/>,
            style: 'bg-gradient-to-r from-amber-600 via-pink-500 to-violet-700',
        },
        facebook: {
            icon: <FaFacebook/>,
            style: 'bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700',
        },
        telegram: {
            icon: <FaTelegram/>,
            style: 'bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700',
        },
        twitter: {
            icon: <FaTwitter/>,
            style: 'bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700',
        },
    };

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

                <div className={'flex items-center justify-center'}>
                    <img src={data.logoUrl} alt="" className={'w-1/5'}/>
                    <h1 className={'text-5xl ml-3'}>{data.name}</h1>
                </div>

                <div className={'text-3xl flex flex-row justify-around px-2 items-center h-96'}>
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
                        } className={'hover:shadow-md hover:shadow-blue-200 rounded-md py-2 px-4'}>{'<'}</button>
                    }
                    <AnimatePresence initial={true} mode={'wait'}>

                        <motion.img
                            key={currentImage}
                            src={data.imagesUrl[currentImage]}
                            alt=""
                            className={'w-3/4 max-h-full'}
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
                        } className={'hover:shadow-md hover:shadow-blue-200 rounded-md py-2 px-4'}>{'>'}</button>
                    }
                </div>

                <div className={'mx-auto flex gap-3 w-7/12 justify-center items-center'}>
                    {Object.entries(mediaIcons).map(([key, {icon, style}], index) => {
                        if (data.media[key] !== '') {
                            return <MediaLink key={index} className={mediaIcons[key].style}
                                              icon={mediaIcons[key].icon} href={data.media[key]}/> ;
                        }
                    })}
                </div>
            </motion.div>
            <div className={'h-full w-3/5 py-4 px-5'}>
                {
                    (user && id === user.uid)
                    &&
                    <Link to={'/edit'}
                          className={'text-4xl hover:scale-105 block text-black mx-auto py-5 w-fit px-10 border border-black py-5 text-center hover:border-blue-500 hover:bg-blue-400 hover:text-white transition duration-200 ease-linear'}>Редагувати
                        сторінку</Link>
                }
                <motion.div
                    className={'py-4 px-2 shadow-sm shadow-blue-200 my-5'}>
                    <h1 className={'text-3xl text-center'}>Про нас</h1>
                    <MarkDown className={'text-2xl prose'}>
                        {data.fullDescription}
                    </MarkDown>
                </motion.div>

                <motion.div
                    className={'py-4 px-2 shadow-sm shadow-blue-200 my-5'}>
                    <h1 className={'text-3xl text-center'}>Короткий опис</h1>
                    <MarkDown className={'text-2xl prose'}>
                        {data.shortDescription}
                    </MarkDown>
                </motion.div>


                <motion.div

                    className={'py-4 px-2 shadow-sm shadow-blue-200 my-5'}>
                    <h1 className={'text-3xl text-center'}>Наші послуги</h1>
                    <div className={'flex gap-3 flex-wrap justify-center'}>

                    </div>
                </motion.div>

            </div>

        </motion.section>
    );
};

export default Account;