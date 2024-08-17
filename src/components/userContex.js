import {createContext} from 'react';

const UserStore = createContext({
    isLoggedIn: false,
    setIsloggedIn:(isLoggedIn)=>{}
});

export default UserStore;