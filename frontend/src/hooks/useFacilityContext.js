import { useContext } from "react";
import { facilityContext } from "../context/facilityContext";

export const useFacilityContext=()=>{
    const context = useContext(facilityContext);

    if(!context){
        throw Error('Something bad occured on useFacilityContext')
    };

    return context;
}