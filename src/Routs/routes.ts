// import {FC} from 'react'
// import Contacts from '../Pages/Contacts/Contacts';
// import Home from "../Pages/Home/Home";
// import News from '../Pages/News/News';
// import Objects from "../Pages/Objects/Objects";
// import Header from "../Pages/Header/Header";

export enum PATH {
    HOME = '/',
    EMPTY = '',
    ERROR = '/404',
    NEWS = '/news',
    CONTACTS = '/contacts',
    OBJECTS = '/objects',
}

// type Routes = {
//     path: string,
//     element: FC
//     exact?: boolean
// }

// export const publicRoutes: Routes[] = [
//     {path: PATH.HOME, element: Home, exact: true},
//     {path: PATH.NEWS, element: News},
//     {path: PATH.CONTACTS, element: Contacts},
//     {path: PATH.OBJECTS, element: Objects},
// ]