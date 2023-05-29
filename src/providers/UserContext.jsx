import { createContext, useState } from "react";

export const UserContext = createContext();

const WithUserContext = ({ children }) => {
    const [isSignIn, setIsSingIn] = useState(false);

    const value = {
        isSignIn, setIsSingIn
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )

}
export default WithUserContext;