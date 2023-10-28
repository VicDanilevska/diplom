import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {AiOutlineSearch} from 'react-icons/ai';
import useFetchAll from "../hooks/useFetchAll";
import PreLoader from "../components/PreLoader";
import CompanyCard from "../components/CompanyCard";
import {useUserContext} from "../context/UserContextProvider";
import {Link} from "react-router-dom";
import {CgLogIn} from 'react-icons/cg';
import {FaUser} from 'react-icons/fa';


const List = () => {

    const {users, isFetching} = useFetchAll();
    const [searchBarQuery, setSearchBarQuery] = useState('');

    const user = useUserContext();

    return (
        isFetching ?
            <PreLoader/>
            :
            <motion.section
                className={'flex flex-col items-center h-screen w-full overflow-x-hidden relative'}>

                {
                    user ?
                        <Link className={'transition-all duration-250 fixed rounded-full text-black hover:border-blue-700 hover:bg-blue-400 hover:text-white p-5 border border-black top-10 right-10'} to={`/users/${user.uid}`}>
                            <FaUser className={'w-10 h-10'}/>
                        </Link>
                    :
                        <Link className={'transition-all duration-250 fixed rounded-full text-black hover:border-blue-700 hover:bg-blue-400 hover:text-white p-5 border border-black top-10 right-10'} to={'/login'}>
                            <CgLogIn className={'w-10 h-10'}/>
                        </Link>
                }


                <div className={'w-3/4 mt-20 relative flex items-center fixed'}>
                    <input
                        onChange={e => {
                            setSearchBarQuery(e.target.value.toLowerCase())
                        }}
                        type="text"
                        className={'pl-5 pr-14 py-2 leading-4 w-full rounded-full shadow-inner shadow-blue-600 text-4xl border border-blue-400'}
                        placeholder={'Введіть назву компанії'}/>
                    <AiOutlineSearch className={'absolute right-5 text-2xl text-blue-700 rounded-full'}/>
                </div>

                <div className={'w-3/4 flex flex-col gap-5 py-5'}>
                    <AnimatePresence>
                        {users.filter(user => user.name.toLowerCase().includes(searchBarQuery)).map(user => <CompanyCard key={user.id} {...user}/>)}
                    </AnimatePresence>
                </div>


            </motion.section>
    );
};

export default List;