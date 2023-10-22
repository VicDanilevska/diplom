import React from 'react';
import {AnimatePresence} from "framer-motion";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Account from "../pages/Account";
import List from "../pages/List";
import Edit from "../pages/Edit";

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