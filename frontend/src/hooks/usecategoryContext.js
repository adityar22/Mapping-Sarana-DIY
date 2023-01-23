import { useContext } from "react";
import { categoryContext } from "../context/categoryContext";

export const useCategoryContext=()=>{
    const context = useContext(categoryContext);

    if(!context){
        throw Error('Something bad occured on useCategoryContext')
    };

    return context;
}