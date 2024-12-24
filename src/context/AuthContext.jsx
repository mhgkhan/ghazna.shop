import { createContext, useContext, useEffect, useState } from "react";


export const AppContext = createContext()


export const AppContextProvider = ({ children }) => {


    const [authToken,setToken] = useState(localStorage.getItem("authToken"));

    const storeToken = tok => setToken(localStorage.setItem("authToken", tok))
    const removeToken = () => setToken(localStorage.removeItem("authToken"))


    useEffect(() => {
        setToken(localStorage.getItem("authToken"))
    }, [authToken])
    

    return <AppContext.Provider value={{
        token: authToken,
        storeToken,
        removeToken
    }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    const createCtx = useContext(AppContext)

    if (!createCtx) {
        // console.log()
        throw new Error("You are using ctx outside of provider ")
    }

    return createCtx;
}