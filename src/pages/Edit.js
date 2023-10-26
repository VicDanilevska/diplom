import React, {useRef, useState} from 'react';
import {motion} from "framer-motion";
import {useUserContext} from "../context/UserContextProvider";
import {Link} from "react-router-dom";
import {FaCloudUploadAlt, FaPlusCircle, FaTrash} from "react-icons/fa";
import NewServiceForm from "../components/NewServiceForm";
import Service from "../components/Service";

const Edit = () => {

    const user = useUserContext();
    const userData = user.data;
    const [newLogo, setNewLogo] = useState(userData.logoUrl);
    const [currentImages, setCurrentImages] = useState(userData.imagesUrl)
    const [currentServices, setCurrentServices] = useState(userData.services);
    const [newMedia, setNewMedia] = useState(userData.media);
    const [newFullDescription, setNewFullDescription] = useState(userData.fullDescription)
    const [newShortDescription, setNewShortDescription] = useState(userData.shortDescription)
    const [newName, setNewName] = useState(userData.name);
    const [currentImagesToDelete, setCurrentImagesToDelete] = useState([]);
    const [newImages, setNewImages] = useState([]);
    const [logoFile, setLogoFile] = useState(null);
    const [newServices, setNewServices] = useState([]);
    const [currentServicesToDelete, setCurrentServicesToDelete] = useState([]);
    const [isNewServiceFormVisible, setIsNewServiceFormVisible] = useState(false);

    const imagesInputRef = useRef(null);
    const logoFileUploadRef = useRef(null);
    const addNewServiceRef = useRef(null);

    const handleNewServiceSubmit = ({title, description, price, image}) => {
        addNewServiceRef.current.style.display = 'grid';
        setIsNewServiceFormVisible(false);
        setNewServices(prev => ([...prev,
            ({title, description, price, image, owner: user.uid, id: Math.random().toString(36).substring(2)})]))
    }

    const handleNewServiceDecline = () => {
        addNewServiceRef.current.style.display = 'grid';
        setIsNewServiceFormVisible(false);
    }

    const handleCurrentServiceDelete = (id) => {
        setCurrentServicesToDelete(prev => [...prev, id]);
        setCurrentServices(currentServices.filter(service => service.id !== id));
    }

    const handleNewServiceDelete = (id) => {
        setNewServices(newServices.filter(service => service.id !== id));
    }

    return <motion.div
        exit={{x: '-100%', transition: {duration: 0.5}}}
        className={`flex flex-row justify-end relative`}>

        <motion.div
            initial={{
                y: '100%'
            }}
            animate={{
                y: '0',
                transition: {
                    duration: 0.5
                }
            }}
            className={'w-2/5 flex flex-col gap-5 h-full py-4 shadow-md shadow-blue-400 fixed overflow-y-scroll left-0 top-0'}>

            <div className={'flex flex-col items-center justify-center'}>
                <div className={'shadow-blue-200 shadow-md w-full px-3'}>
                    <h1 className={'text-5xl text-justify'}>Додайте або змініть назву</h1>
                    <input type="text"
                           className={'w-full text-3xl rounded-s my-3 border border-blue-300 active:border-blue-400'}
                           value={newName}
                           onChange={e => {
                               setNewName(e.target.value)
                           }}
                    />
                </div>

                <div className={'flex flex-col justify-center items-center w-full shadow-blue-200 shadow-md py-3'}>
                    <h1 className={'text-4xl text-center'}>Додайте або змініть логотип</h1>
                    <div className={'flex flex-col justify-center items-center w-1/3 my-3'}>
                        <h1 className={'text-2xl'}>Старий логотип</h1>
                        <img alt="" src={userData.logoUrl} className={'w-4/5'}/>
                    </div>
                    <div className={'flex gap-3 px-2 h-60 justify-center'}>
                        <div>
                            <h1 className={'text-2xl text-center'}>Новий логотип</h1>
                            <img src={newLogo}  alt="" className={'h-4/5 max-w-full'}/>
                        </div>

                        <div
                            className={"relative p-4 grid place-content-center cursor-pointer bg-blue-50 text-blue-500 rounded-lg hover:bg-blue-100 border-4 border-dashed border-blue-100 hover:border-blue-500 transition-colors"}
                            onClick={() => {
                                logoFileUploadRef.current.click();
                            }
                            }
                            onDrop={e => {
                                e.preventDefault();
                                const file = e.dataTransfer.files[0];
                                const imageUrl = URL.createObjectURL(file);
                                setNewLogo(imageUrl);
                                setLogoFile(file);

                            }
                            }
                            onDragOver={e => {
                                e.preventDefault();
                            }
                            }
                        >
                            <div className="flex flex-col items-center">
                                <FaCloudUploadAlt className="w-10 h-10"/>
                                <span className={'text-center'}>Оберіть або  перетягніть логотип сюди</span>
                                <input ref={logoFileUploadRef} onChange={e => {
                                    e.preventDefault();
                                    const file = e.target.files[0];
                                    const imageUrl = URL.createObjectURL(file);
                                    setNewLogo(imageUrl);
                                    setLogoFile(file);
                                }
                                } type="file" accept={'image/png, image/jpeg'} hidden/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className={'text-3xl flex flex-col justify-center items-center'}>

                {currentImages.map((imageUrl, index) => {
                    return <div key={index} className={'my-2 relative grid place-items-center group cursor-pointer'}
                                onClick={() => {
                                    setCurrentImagesToDelete(prev => [...prev, imageUrl]);
                                    setCurrentImages(prev => prev.filter(item => item !== imageUrl))
                                }
                                }
                    >
                        <motion.img src={imageUrl} alt="" initial={{opacity: 0}}
                                    animate={{opacity: 1, transition: {duration: 0.5}}}/>
                        <div
                            className={'bg-black absolute opacity-0 group-hover:opacity-20 w-full h-full transition-all duration-150'}></div>
                        <FaTrash className={'opacity-0 group-hover:opacity-100 text-red-600 place-self-center text-4xl absolute transition-all duration-150'}/>
                    </div>
                })}

                {newImages.map((image, index) => {
                    return <div key={index} className={'my-2 relative grid place-items-center group cursor-pointer'}
                                onClick={() => {
                                    setNewImages(prevState => {
                                        return [...(prevState.filter(item => item.url !== image.url))];
                                    })
                                }
                                }
                    >
                        <motion.img src={image.url} alt="" initial={{opacity: 0}}
                                    animate={{opacity: 1, transition: {duration: 0.5}}}/>
                        <div
                            className={'bg-black absolute opacity-0 group-hover:opacity-20 w-full h-full transition-all duration-150'}></div>
                        <FaTrash
                            className={'opacity-0 group-hover:opacity-100 text-red-600 place-self-center text-4xl absolute transition-all duration-150'}></FaTrash>
                    </div>
                })}

                <div
                    onClick={() => {
                        imagesInputRef.current.click();
                    }
                    }
                    onDrop={e => {
                        e.preventDefault();
                        const file = e.dataTransfer.files[0];
                        const imageUrl = URL.createObjectURL(file);
                        setNewImages(prev => [...prev, {url: imageUrl, file}]);
                    }
                    }
                    onDragOver={e => {
                        e.preventDefault();
                    }
                    }
                    className={'relative mt-3 w-4/5 p-4 grid place-content-center cursor-pointer bg-blue-50 text-blue-500 rounded-lg hover:bg-blue-100 border-4 border-dashed border-blue-100 hover:border-blue-500 transition-colors'}>
                    <div className="flex flex-col items-center">
                        <FaCloudUploadAlt className="w-10 h-10"/>
                        <span className={'text-center'}>Оберіть або  перетягніть фотографію сюди</span>
                        <input
                            ref={imagesInputRef} multiple={true} onChange={e => {
                            e.preventDefault();
                            const file = e.target.files[0];
                            const imageUrl = URL.createObjectURL(file);
                            setNewImages(prev => [...prev, {url: imageUrl, file}]);
                        }
                        }
                            type="file" accept={'image/png, image/jpeg'} hidden/>
                    </div>
                </div>
            </div>

            <div className={'mx-auto flex flex-col gap-3 w-7/12 justify-center items-center'}>

                <h1>Instagram</h1>
                <div className={'rounded-lg px-2 py-2 bg-gradient-to-r from-amber-600 via-pink-500 to-blue-700'}>
                    <input
                        type="text"
                        value={newMedia.instagram} onChange={e => {
                            setNewMedia(prev => ({...prev, instagram: e.target.value}))
                        }
                        }
                        className={'rounded-sm text-3xl'}/>
                </div>

                <h1>Twitter</h1>
                <div className={'rounded-lg px-2 py-2 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700'}>
                    <input
                        type="text"
                        value={newMedia.twitter} onChange={e => {
                            setNewMedia(prev => ({...prev, twitter: e.target.value}))
                        }
                        }
                        className={'rounded-sm text-3xl'}/>
                </div>

                <h1>Facebook</h1>
                <div className={'rounded-lg px-2 py-2 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700'}>
                    <input
                        type="text"
                        value={newMedia.facebook} onChange={e => {
                            setNewMedia(prev => ({...prev, facebook: e.target.value}))
                        }
                        }
                        className={'rounded-sm text-3xl'}/>
                </div>

                <h1>Telegram</h1>
                <div className={'rounded-lg px-2 py-2 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700'}>
                    <input
                        type="text"
                        value={newMedia.telegram} onChange={e => {
                            setNewMedia(prev => ({...prev, telegram: e.target.value}))
                        }
                        }
                        className={'rounded-sm text-3xl'}/>
                </div>

            </div>

        </motion.div>
        <div className={'h-full w-3/5 py-4 px-5'}>

            <div className={'flex justify-center items-center py-3 w-full top-0'}>
                <button className={'rounded-sm border border-green-700 bg-green-500 text-black text-4xl px-8 py-4 mx-5'}>
                    Зберегти зміни
                </button>
                <Link
                    className={'rounded-sm border border-red-700 bg-red-500 text-black text-4xl px-8 py-4 mx-5'}
                    to={`/users/${user.uid}`}>
                    Повернутись
                </Link>
            </div>

            <motion.div
                initial={{
                    y: '200%',
                    opacity: 0,
                }}
                animate={{
                    y: '0',
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                    }
                }}
                className={'py-4 px-2 shadow-sm shadow-blue-200 my-5'}>
                <h1 className={'text-4xl mb-2'}>Додайте або змініть повний опис</h1>
                <h2 className={'text-xl mb-5 text-blue-500'}>Підтримується MD-формат</h2>
                <textarea
                    onChange={({target}) => {
                        setNewFullDescription(target.value)
                    }}
                    value={newFullDescription}
                    className={'border border-blue-400 rounded-sm w-full px-4 py-2 text-2xl h-60'}/>
            </motion.div>

            <motion.div
                initial={{
                    y: '200%',
                    opacity: 0,
                }}
                animate={{
                    y: '0',
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        delay: 0.25
                    }
                }}
                className={'py-4 px-2 shadow-sm shadow-blue-200 my-5'}>
                <h1 className={'text-4xl mb-2'}>Додайте або змініть короткий опис</h1>
                <h2 className={'text-xl mb-5 text-blue-500'}>Підтримується MD-формат</h2>
                <textarea
                    onChange={({target}) => {
                        setNewShortDescription(target.value)
                    }}
                    value={newShortDescription}
                    className={'border border-blue-400 rounded-sm w-full px-4 py-2 text-2xl h-60'}/>
            </motion.div>


            <motion.div
                initial={{
                    y: '200%',
                    opacity: 0,
                }}
                animate={{
                    y: '0',
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        delay: 0.5
                    }
                }} className={'py-4 px-2 shadow-sm shadow-blue-200 my-5'}>
                <h1 className={'text-4xl mb-2'}>Додайте або змініть послуги</h1>
                <div className={'flex gap-3 flex-wrap justify-center '}>

                    {currentServices.map((service, index) => {
                        return <Service key={index} service={service} handleDelete={handleCurrentServiceDelete}></Service>
                    })}

                    {newServices.map((service, index) => {
                        return <Service key={index} service={service} handleDelete={handleNewServiceDelete}></Service>
                    })}

                    <NewServiceForm handleSubmit={handleNewServiceSubmit} handleDecline={handleNewServiceDecline}
                                    isVisible={isNewServiceFormVisible}></NewServiceForm>

                    <div
                        ref={addNewServiceRef}
                        onClick={e => {
                            addNewServiceRef.current.style.display = 'none';
                            setIsNewServiceFormVisible(true);
                        }
                        }
                        className={'cursor-pointer rounded-md border border-blue-400 px-4 py-2 w-64 grid group hover:border-blue-600 hover:bg-blue-50 transition-all duration-250'}>
                        <FaPlusCircle className={'text-blue-500 place-self-center h-28 w-28 group-hover:text-blue-600 transition-all duration-250'}/>
                    </div>
                </div>
            </motion.div>

        </div>

    </motion.div>
};

export default Edit;