import React, {createContext, useContext, useEffect, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth, db, servicesCollection} from '../firebase';
import {getDoc, doc, query, where, getDocs, onSnapshot} from 'firebase/firestore';
import PreLoader from "../components/PreLoader";

const UserContext = createContext(null);

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                const id = user.uid;
                const serviceQ = query(servicesCollection, where('owner', '==', id));

                const docRef = doc(db, 'users', id);
                getDoc(docRef).then(doc => {
                    setUser(() => ({...user, data: doc?.data()}))
                })

                getDocs(serviceQ).then(({docs}) => {
                    setUser((prev) => ({
                        ...prev, data: {
                            ...(prev.data),
                            services: docs.map(doc => ({...doc?.data(), id: doc.id}))
                        }
                    }))
                })
            } else {
                setUser(user);
            }
        })
    }, [])

    useEffect(() => {
        if (user){
            onSnapshot(doc(db, 'users', user.uid), doc => {
                const id = user.uid;
                const serviceQ = query(servicesCollection, where('owner', '==', id));

                setUser(() => ({...user, data: doc?.data()}))

                getDocs(serviceQ).then(({docs}) => {
                    setUser((prev) => ({
                        ...prev, data: {
                            ...(prev.data),
                            services: docs.map(doc => ({...doc?.data(), id: doc.id}))
                        }
                    }))
                })
            })
        }
    }, [user?.uid])

    return (
        <UserContext.Provider value={user}>
            {user !== undefined ? children : <PreLoader></PreLoader>}
        </UserContext.Provider>
    );
};

function useUserContext() {
    return useContext(UserContext);
}

export {UserContextProvider, useUserContext};