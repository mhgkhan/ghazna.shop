import { createContext, useContext, useEffect, useState } from "react";
import { APIROUTES } from "../configs/ApiRoutes";


export const AppContext = createContext()


export const AppContextProvider = ({ children }) => {


    const [authToken, setToken] = useState(localStorage.getItem("authToken"));

    const storeToken = tok => setToken(localStorage.setItem("authToken", tok))
    const removeToken = () => setToken(localStorage.removeItem("authToken"))

    // api to check token the user is verified or unverified return false or true 
    const checkToken = async () => {
        // call to api to check token 
        try {
            const request = fetch(`${APIROUTES.BASE_URL}api/auth/users/checktoken`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token: authToken })
            })

            const response = await request.json();
            if (response.success) return true
            else return false
        } catch (error) {
            return false;
        }
    }

    useEffect(() => {
        setToken(localStorage.getItem("authToken"))
    }, [authToken, removeToken])


    return <AppContext.Provider value={{
        token: authToken,
        storeToken,
        removeToken,
        checkToken
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