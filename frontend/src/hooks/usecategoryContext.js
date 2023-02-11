import { useContext } from "react";
import { CategoryContext } from "../context/categoryContext";

export const useCategoryContext = () => {
    const context = useContext(CategoryContext);

    if (!context) {
        throw Error('Something bad occured on useCategoryContext')
    };

    return context;
}