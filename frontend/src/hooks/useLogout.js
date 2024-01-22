import { UseAuthContext } from "./useAuthContext";

export const useLogout = ()=>{

    const {dispatch} = UseAuthContext();

    const logout = ()=>{
        //remove user from localstorage

        localStorage.removeItem('user');

        //dispatch logout action
        dispatch({type:'LOGOUT'});
    }

    return {logout};
}