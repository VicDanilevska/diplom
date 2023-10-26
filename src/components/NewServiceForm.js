import React, {useRef, useState} from 'react';
import {FaCloudUploadAlt, FaCheck, FaBan} from "react-icons/fa";

const NewServiceForm = ({handleSubmit, isVisible, handleDecline}) => {
    return (
        <>
            {isVisible && <div className={'rounded-md border border-blue-400 px-4 py-2 w-64'}>
                <div
                    className={"relative mt-3 w-4/5 p-4 mx-auto grid place-content-center cursor-pointer bg-blue-50 text-blue-500 rounded-lg hover:bg-blue-100 border-4 border-dashed border-blue-100 hover:border-blue-500 transition-colors"}>
                    <div className="flex flex-col items-center pointer-events-none">
                        <FaCloudUploadAlt className="w-10 h-10"/>
                        <span className={'text-center'}>Оберіть або  перетягніть фотографію сюди</span>
                        <input type="file" hidden/>
                    </div>
                </div>

                <h2 className={'text-xl font-bold'}>Назва послуги</h2>
                <input type="text" className={'px-1 w-full border border-blue-400 rounded-sm text-xl'}/>

                <h2 className={'text-xl font-bold mt-2'}>Опис послуги</h2>
                <textarea className={'px-1 w-full border border-blue-400 rounded-sm text-xl overflow-y-scroll'} rows={5}></textarea>

                <div className={'flex justify-between items-center mt-2'}>
                    <span className={'font-bold text-xl'}>Ціна</span>
                    <input type="text" className={'px-1 w-1/3 border border-blue-400 rounded-sm text-xl ml-auto block'}/>
                </div>

                <div className={'flex justify-around items-center mt-2'}>
                    <button className={'border border-green-400 rounded-sm px-8 py-2 text-2xl hover:bg-green-50 transition-all duration-250 cursor-pointer text-green-600 hover:text-green-800'}>
                        <FaCheck></FaCheck>
                    </button>
                    <button  className={'border border-red-400 rounded-sm px-8 py-2 text-2xl hover:bg-red-50 transition-all duration-250 cursor-pointer text-red-600 hover:text-red-800'}>
                        <FaBan></FaBan>
                    </button>
                </div>
            </div>}
        </>
    );
};

export default NewServiceForm;