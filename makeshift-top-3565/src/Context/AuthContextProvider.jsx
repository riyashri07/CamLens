import React,{useState} from 'react'
import {createContext} from "react";

export const AuthContext = createContext ();

export const AuthContextProvider = ({children}) => {

    const[isAuth,setIsAuth]  = useState(false);
    const[token,setToken] = useState("");

    const Signin = (token)=>{
        setIsAuth(true);
        setToken(token);
    }
    const Signup = ()=>{
        setIsAuth(false);
        setToken(null);
    }


  return (
 <AuthContext.Provider  value = {{ isAuth , token , Signin , Signup}}>
   {children}
 </AuthContext.Provider>
    
  )
}

