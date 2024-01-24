"use client"

import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined)

export function AppWrapper({ children }: {
    children: React.ReactNode
}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState('')
    
    return (
        <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser}}>
            {children}
        </AppContext.Provider>
    )
}

export function handleLoggedUser(isLoggedInStatus: boolean | ((prevState: boolean) => boolean)) {
    return isLoggedInStatus
}

export function useAppContext() {
    return useContext(AppContext)
}