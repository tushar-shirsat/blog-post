import { createContext, useReducer, useContext } from 'react';
import {reducer, initialState} from './reducer';


export const context = createContext();
export const useProvider = () =>{
    return useContext(context);
}


const StateProvider = ({children}) =>{
    return(
        <context.Provider value={useReducer(reducer,initialState)}>
            {children}
        </context.Provider>
    );
}
export default StateProvider;
