import { useState } from "react";
import { UseAuthContext } from "./useAuthContext";

export const useSignup = () =>{

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);


    const signup = async(email, password) =>{
        setIsLoading(true);
        setError(null);
        const {dispatch} = UseAuthContext();

        const response = await fetch('http://localhoost:4000/api/user/signup',
                                     {method:'POST', 
                                     headers:{'Content-type':'application/json'},
                                     body:JSON.stringify(email, password)});

        const json = await response.json();

        if(!response.ok)
        {
            setIsLoading(false);
            setError(json.error);
        }

        if(response.ok)
        {
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(json));
        }

        //update the authContext

        dispatch({type:'LOGIN', payload:json});
        setIsLoading(false);
    }
    return {signup, isLoading, error};
}