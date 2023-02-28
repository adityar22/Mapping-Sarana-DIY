import { useContext } from "react";
import { FacilityContext } from "../context/facilityContext";

export const useFacilityContext = () => {
    const context = useContext(FacilityContext);

    if (!context) {
        throw Error('Something bad occured on useFacilityContext')
    };

    return context;
}