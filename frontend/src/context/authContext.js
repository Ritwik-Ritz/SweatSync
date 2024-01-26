import {createContext, useReducer, useEffect} from 'react';

export const AuthContext = createContext();

export const AuthReducer = (state, action)=>{
    switch (action.type) {
        case 'LOGIN':  
            return{user: action.payload};

        case 'LOGOUT':
            return{user:null};

        default:
            return state;
    }
        
}


export const AuthContextProvider = (props)=>{

    const [state, dispatch] = useReducer(AuthReducer, {user:null})

    //keeps the authcontext updated with login details even if page is refreshed
    // by dispatching login action as soon as page is refreshed
    useEffect( ()=>{
        const user = JSON.parse(localStorage.getItem('user'))

        if(user)
        {
            dispatch({type:'LOGIN', payload: user})
        }
    }, [])

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}