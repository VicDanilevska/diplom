import React from 'react';

const Service = ({service, handleDelete}) => {

    return (
        <div className={'rounded-md border border-blue-400 px-4 py-2 w-64 h-fit'}>
            <img src={service.image ? service.image.imageUrl : service.imageUrl} alt="" className={'w-full'}/>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <span className={'float-right'}>{service.price}</span>
            <button className={'w-full px-4 py-2 border border-red-900 bg-red-200 text-black text-3xl'}
                    onClick={() => {
                        handleDelete(service.id);
                    }}
            >Видалити</button>
        </div>
    );
};

export default Service;