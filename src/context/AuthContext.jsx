
import { createContext,useState } from "react";
//import { Children } from "react";
export const AuthContext =createContext();

export const AuthProvider =({Children}) => {
    const [isAuthenticated,setIsAuthenticated] =useState(false);
    const [user,setUser] =useState(null);
    const login = (username) =>{
        setUser(username);
        setIsAuthenticated(true);
    }

        const logout =() => {
            setUser(null);
            setIsAuthenticated(false);
        }
   
       
    return(
        <AuthContext.Provider value={{isAuthenticated,user,login,logout}}>
            {Children}
        </AuthContext.Provider>
    )
   
}
