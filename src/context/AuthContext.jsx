import { createContext, useContext, useEffect, useState } from "react";
import { APIROUTES } from "../configs/ApiRoutes";


export const AppContext = createContext()


export const AppContextProvider = ({ children }) => {


    const [authToken, setToken] = useState(localStorage.getItem("authToken"));

    const storeToken = tok => setToken(localStorage.setItem("authToken", tok))
    const removeToken = () => setToken(localStorage.removeItem("authToken"))
    const [verified, setVerified] = useState(false)

    // api to check token the user is verified or unverified return false or true 
    const checkToken = async () => {
        // call to api to check token 
        try {
            // console.log("sending request ")
            const request = fetch(`${APIROUTES.BASE_URL}api/auth/users/checktoken`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token: authToken })
            })
            // console.log("responsed recieved")

            const response = (await request).json();
            console.log(response);

            if (response.success) {
                storeToken(response.data.token)
                setVerified(true)
                return true
            }
            else {
                setVerified(false)
                return false
            }
        } catch (error) {
            setVerified(false)
            // console.log("error occured")
            // console.log(error);
            return false;
        }
    }

    useEffect(() => {
        setToken(localStorage.getItem("authToken"))
        checkToken();
    }, [authToken, removeToken])


    return <AppContext.Provider value={{
        token: authToken,
        storeToken,
        removeToken,
        checkToken,
        verified
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