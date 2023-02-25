import { useState, useRef } from "react"

export const useSearch=(data)=>{
    const [searchTerm, setSearchTerm] = useState("");
    const searchEl = useRef("");
    const [searchResult, setSearchResult] = useState([]);

    const searchHandler = (searchTerm)=>{
        setSearchTerm(searchTerm);
        if(searchTerm!==""){
            const newDataList = data.filter((item)=>{
                return Object.values(item)
                    .join(" ")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });
            setSearchResult(newDataList)
        }
        else{
            setSearchResult(data)
        }
    };
    const getSearchTerm=()=>{
        searchHandler(searchEl.current.value);
    }
    return{searchResult, searchHandler, getSearchTerm, searchEl, searchTerm};
}