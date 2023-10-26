import React, {createContext, useContext, useEffect, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth, db} from '../firebase';
import {getDoc, doc} from 'firebase/firestore';

const UserContext = createContext(null);

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                const id = user.uid;

                const docRef = doc(db, 'users', id);
                getDoc(docRef).then(doc => {
                    setUser(() => ({...user, data: doc?.data()}))
                })

            } else {
                setUser(user);
            }
        })
    }, [])

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