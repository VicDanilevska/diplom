import React, {createContext, useContext, useEffect, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase';

const UserContext = createContext(null);

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
    }, [])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

function useUserContext() {
    return useContext(UserContext);
}

export {UserContextProvider, useUserContext};