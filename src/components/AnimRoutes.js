import React from 'react';
import {AnimatePresence} from "framer-motion";
import {Route, Routes, useLocation} from "react-router-dom";

const AnimRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence initial={true} mode={'wait'}>
            <Routes key={location.pathname} location={location}>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/login'} element={<LogIn/>}></Route>
                <Route path={'/signup'} element={<SignUp/>}></Route>
                <Route path={'/users/:id'} element={<Account/>}></Route>
                <Route path={'/list'} element={<List/>}></Route>
                <Route path={'/edit'} element={<Edit/>}></Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimRoutes;