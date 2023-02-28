import { createContext, useReducer } from "react";

export const FacilityContext = createContext();

export const facilityReducer = (state, action) => {
    console.log(state)
    console.log(action.payload)
    switch(action.type){
        case 'GET_FACILITIES':
            return{
                facilities: action.payload
            }
        case 'ADD_FACILITIES':
            return{
                facilities:[action.payload, ...state.facilities]
            }
        case 'EDIT_FACILITIES':
            return{
                facilities: state.facilities.map((item)=>{
                    console.log(item)
                    return item.id !== action.payload.id ? item:action.payload
                })
            }
        case 'DELETE_FACILITIES':
            return{
                facilities: state.facilities.filter((item)=>{
                    return item.id !== action.payload.id
                })
            }
        default:
            return state
    }
}

const FacilitesContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(facilityReducer, {
        facilities: null
    })

    return(
        <FacilityContext.Provider value={{ ...state, dispatch}}>
            {children}
        </FacilityContext.Provider>
    )
}

export default FacilitesContextProvider