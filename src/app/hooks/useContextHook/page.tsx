"use client"
import React, {createContext, useState} from 'react'

export const LoginContext = createContext(false);

function UseContextHook({children}: {children: React.ReactNode}) {
    const [userDetails, setUserDetails] = useState(true);
    return (
        <LoginContext.Provider value={userDetails}>
        <div>{children}</div>
        </LoginContext.Provider>
    )
}

export default UseContextHook