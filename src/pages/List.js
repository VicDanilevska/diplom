import React from 'react';
import {motion} from "framer-motion";
import {AiOutlineSearch} from 'react-icons/ai';
import useFetchAll from "../hooks/useFetchAll";
import PreLoader from "../components/PreLoader";
import CompanyCard from "../components/CompanyCard";

const List = () => {

    const {users, isFetching} = useFetchAll();

    return (
        isFetching ?
            <PreLoader/>
            :
            <motion.section
                initial={{x: '100%'}}
                animate={{x: 0, transition: {duration: 0.5}}}
                exit={{x: '-100%', transition: {duration: 0.5}}}
                className={'flex flex-col items-center h-screen w-full overflow-x-hidden'}>

                <div className={'w-3/4 mt-20 relative flex items-center'}>
                    <input
                        type="text"
                        className={'pl-5 pr-14 py-2 w-full rounded-full shadow-inner shadow-blue-600 text-4xl border border-blue-400'}
                        placeholder={'Введіть назву компанії'}/>
                    <AiOutlineSearch className={'absolute right-5 text-2xl text-blue-700 rounded-full'}/>
                </div>

                <div className={'w-3/4 flex flex-col gap-5 py-5'}>
                    {users.map(user => <CompanyCard key={user.id} {...user}/>)}
                </div>
            </motion.section>
    );
};

export default List;