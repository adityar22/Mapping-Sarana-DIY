import { useState, useRef } from "react";

export const useCheckFilter = (data, data2) => {
    const [checkTerm, setCheckTerm] = useState([]);
    const [checkResult, setCheckResult] = useState([]);
    const [category, setCategory] = useState([]);

    const filterHandler = (checkTerm) => {
        setCheckTerm(checkTerm);
        if (checkTerm[0] !== "Tampilkan Semua") {
            const newDataList = data.filter((item) => {
                return item.category === checkTerm;
            });
            setCheckResult([...checkResult, newDataList])
            console.log(newDataList);
            const choosedCategory = data2.filter((item)=>{
                return item.name === checkTerm;
            });
            setCategory([...category, choosedCategory]);
            console.log(choosedCategory);
        }
        else if(checkTerm[0] === "Tampilkan Semua"){
            setCheckResult(data)
            setCategory(data2)
        }
        console.log(checkTerm)
    };
    const getCheckTerm = () => {
        if (checkTerm.length !== 0) {
            checkTerm.forEach((item)=>(
                filterHandler(item)
            ));
        }
        else{
            setCheckResult([])
            setCategory([])
        }
    }
    return { checkResult, category, filterHandler, getCheckTerm, checkTerm, setCheckTerm }
}
