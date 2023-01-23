import { useState } from "react";
import { useFacilityContext } from "../../hooks/useFacilityContext";
import {useFacilityHandleAdd} from "../../hooks/useFacilityHandleAdd";

const addfacility = ({openPopUp, closePopUp, setLoading, url, setError}) =>{
    const {dispatch} = useFacilityContext();

    const [facName, setFacName] = useState("");
    const [facCoordinat, setFacCoordinat] = useState("");
    const [timestamp, setTimestamp] = useState(new Date());
    const [imageURL, setImageURL] = useState("");
    const [condition, setCondition] = useState("");
    const [facAtr1, setFacAtr1] = useState("");
    const [facAtr2, setFacAtr2] = useState("");
    const [facAtr3, setFacAtr3] = useState("");
    const [facAtr4, setFacAtr4] = useState("");
    const [facAtr5, setFacAtr5] = useState("");

    const newfacility = {facName, facCoordinat, timestamp, imageURL, condition, facAtr1, facAtr2, facAtr3, facAtr4, facAtr5}
    const {handleAdd: handleSubmit} = useFacilityHandleAdd({url, type: 'ADD_FACILITIES', dispatch, data:newfacility, setLoading, setError, closePopUp: closePopUp})

    return(
        <div>

        </div>
    )
}
export default addfacility;