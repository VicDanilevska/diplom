import React, {useEffect, useState} from 'react';
import {doc, getDoc, getDocs, query, where} from "firebase/firestore";
import {db, servicesCollection} from "../firebase";

const UseFetch = (id = null) => {
    const [data, setData] = useState({});
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const docRef = doc(db, 'users', id);
        const serviceQ = query(servicesCollection, where('owner', '==', id));

        getDoc(docRef).then(doc => {
            setData(doc.data())
        }).catch(error => {
            setError(error)
        })

        getDocs(serviceQ).then(({docs}) => {
            setData((prev) => ({...prev, services: docs.map(doc => ({...doc?.data(), id: doc.id}))}))
        }).catch((error) => {
            setError(error);
        }).finally(() => {
            setIsFetching(false);
        })
    }, [id])


    return {data, isFetching, error};
};

export default UseFetch;