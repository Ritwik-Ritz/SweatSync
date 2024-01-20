import { AuthContext } from "../context/authContext";
import { useContext } from "react";


export const UseAuthContext = () =>{
    const context = useContext(AuthContext);

    if(!context)
    {
        throw Error("AuthContext must be used inside AuthContextProvider");
    }

    return context;
}
