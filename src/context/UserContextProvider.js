import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext(null);

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(undefined);

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