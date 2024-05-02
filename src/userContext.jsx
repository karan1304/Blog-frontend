import { createContext, useState } from "react";

export const UserContextAPI = createContext({});

export const UserContextProvider  =({children})=>
{
    const [userInfo, setUserInfo] = useState({});
   return (
    <UserContextAPI.Provider value={{userInfo,setUserInfo}}>
        {children}
    </UserContextAPI.Provider>
)  
}

