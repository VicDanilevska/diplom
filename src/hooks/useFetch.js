import React, {useEffect, useState} from 'react';
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";

const UseFetch = (id = null) => {
    const [data, setData] = useState({});
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const docRef = doc(db, 'users', id);

        getDoc(docRef).then(doc => {
            setData(doc.data())
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setIsFetching(false);
        })
    }, [id])


    return {data, isFetching, error};
};

export default UseFetch;