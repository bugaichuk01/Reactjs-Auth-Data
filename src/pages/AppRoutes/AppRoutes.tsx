import React from 'react';
import {Navigate, Route, Routes} from 'react-router'
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {Home} from "../Home/Home";
import {Login} from "../Login/Login";

export const AppRoutes = () => {
    const {auth} = useTypedSelector(state => state.auth)

    return (
        <>
            {auth
                ?
                <Routes>
                    <Route path='*' element={<Navigate to='/home'/>}/>
                    <Route path='/home' element={<Home/>}/>
                </Routes>
                :
                <Routes>
                    <Route path='*' element={<Navigate to='/login'/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            }
        </>
    );
}