import React, {createContext, useContext, useReducer} from "react";
import { ADD_VALUE, SUBTRACT_VALUE } from "../actions";
import { FirstReducer } from "../reducers/FirstReducer";



export const FirstContext = createContext();

const FirstContextProvider = (props) => {
    const [state, dispatch] = useReducer ( FirstReducer, {value: 0})
    const addValue =() => {
        dispatch ({type:ADD_VALUE})
    }
    const subValue = () => {
        dispatch({type:SUBTRACT_VALUE})
    }

    return(
        <FirstContext.Provider value={{
            state, addValue, subValue
        }
        }>
            {props.children}
        </FirstContext.Provider>
    )
}
export default FirstContextProvider