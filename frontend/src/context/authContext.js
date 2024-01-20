import {createContext, useReducer} from 'react';

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

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}