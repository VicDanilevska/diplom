import React, {useEffect, useState} from 'react';
import {getDocs, query, where} from "firebase/firestore";
import {servicesCollection, usersCollection} from "../firebase";

const UseFetchAll = () => {
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        getDocs(usersCollection).then(({docs}) => {
            docs.forEach(async (doc) => {
                const data = doc.data();
                const id = doc.id;
                const serviceQ = query(servicesCollection, where('owner', '==', id));

                data.services = await getDocs(serviceQ).then(({docs}) => {
                    return docs.map(doc => ({...doc?.data(), id: doc.id}));
                })

                setUsers(prev => [...prev, data]);
            })
        }).finally(() => {
            setIsFetching(false)
        })
    }, [])


    return {users, isFetching};
};

export default UseFetchAll;