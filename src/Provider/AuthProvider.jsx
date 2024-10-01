import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext=createContext(null)

const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
     return createUserWithEmailAndPassword(auth, email, password)
    
    }
    const logedIn=(email,password)=>{
        setLoading(true)
      return   signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        setLoading(true)
     return signOut(auth)
    }
 
    useEffect(()=>{
        const subscribe=onAuthStateChanged(auth,currentUser=>{
            
            console.log(currentUser)
            setLoading(false)
            setUser(currentUser)
            
        })
     return ()=>{ 
        subscribe()
     }
    },[])

    console.log(user)

    const info={
   
        createUser,
        logedIn,
        user,
        setUser,
        loading,
        logOut,
     
    }


    return (
        <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;