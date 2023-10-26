import React, {useRef, useState} from 'react';
import {FaCloudUploadAlt, FaCheck, FaBan} from "react-icons/fa";

const NewServiceForm = ({handleSubmit, isVisible, handleDecline}) => {
    return (
        <>
            {isVisible && <div className={'rounded-md border border-blue-400 px-4 py-2 w-64'}>
                <div
                    className={""}
                >
                    <div className="">
                        <FaCloudUploadAlt className=""/>
                        <span className={''}>Оберіть або  перетягніть фотографію сюди</span>
                        <input type="file" hidden/>
                    </div>
                </div>

                <h2 className={''}>Назва послуги</h2>
                <input type="text" className={''}/>

                <h2 className={''}>Опис послуги</h2>
                <textarea className={''} rows={5}></textarea>

                <div className={''}>
                    <span className={''}>Ціна</span>
                    <input type="text" className={''}/>
                </div>

                <div className={''}>
                    <button className={''}>
                        <FaCheck></FaCheck>
                    </button>
                    <button className={''}>
                        <FaBan></FaBan>
                    </button>
                </div>
            </div>}
        </>
    );
};

export default NewServiceForm;