import React, { FC } from 'react';
import {Route, Routes} from 'react-router-dom';
import {PATH} from "./routes";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Contacts from "../Pages/Contacts/Contacts";
import Objects from "../Pages/Objects/Objects";

const AppRoutes: FC = () => {
    return (
            <Routes>
                <Route key={PATH.HOME} path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.NEWS} element={<News/>}/>
                <Route path={PATH.OBJECTS} element={<Objects/>}/>
                <Route path={PATH.CONTACTS} element={<Contacts/>}/>
            </Routes>
    );
};

export default AppRoutes;