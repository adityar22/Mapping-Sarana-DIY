import { useState, useRef } from "react";

export const useFilter=(data)=>{
    const [filterTerm, setFilterTerm] = useState("");
    const inputEl = useRef("");
    const [filterResult, setFilterResult] = useState([]);

    const filterHandler=(filterTerm)=>{
        setFilterTerm(filterTerm);
        if(filterTerm!==""){
            const newDataList = data.filter((item)=>{
                return item.category==filterTerm;
            });
            setFilterResult(newDataList)
        }
        else{
            setFilterResult(data)
        }
    };
    const getFilterTerm=()=>{
        filterHandler(inputEl.current.value);
    }
    return{filterResult, filterHandler, getFilterTerm, inputEl, searchTerm}
}
