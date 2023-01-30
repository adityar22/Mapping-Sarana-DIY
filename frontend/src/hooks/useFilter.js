import { useState, useRef } from "react";

export const useFilter = (data) => {
    const [filterTerm, setFilterTerm] = useState("");
    const inputEl = useRef("");
    const [filterResult, setFilterResult] = useState([]);

    const filterHandler = (filterTerm) => {
        setFilterTerm(filterTerm);
        if (filterTerm !== "") {
            const newDataList = data.filter((item) => {
                return item.category == filterTerm;
            });
            setFilterResult(newDataList)
            console.log(newDataList);
        }
        else {
            setFilterResult(data)
        }
        console.log(filterTerm)
    };
    const getFilterTerm = () => {
        if (inputEl.current.value != "Pilih Kategori :") {
            const val = JSON.parse(inputEl.current.value);
            const valFilter = val.name
            filterHandler(valFilter);
        }
        else{
            filterHandler("")
        }
    }
    return { filterResult, filterHandler, getFilterTerm, inputEl, filterTerm }
}
