import {FC} from 'react'
import Contacts from '../Pages/Contacts/Contacts';
import Home from "../Pages/Home/Home";
import News from '../Pages/News/News';
import Objects from "../Pages/Objects/Objects";

export enum PATH {
    HOME = '/',
    EMPTY = '',
    ERROR = '/404',
    NEWS = '/news',
    CONTACTS = '/contacts',
    OBJECTS = '/objects',
}

type Routes = {
    path: string,
    component: FC
    exact?: boolean
}

export const publicRoutes: Routes[] = [
    {path: PATH.HOME, component: Home, exact: true},
    {path: PATH.NEWS, component: News},
    {path: PATH.CONTACTS, component: Contacts},
    {path: PATH.OBJECTS, component: Objects},
]