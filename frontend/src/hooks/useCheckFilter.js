import { useState} from "react";

export const useCheckFilter = (data, data2) => {
    const [checkTerm, setCheckTerm] = useState([]);
    const [checkResult, setCheckResult] = useState([]);
    const [category, setCategory] = useState([]);

    const filterHandler = (checkTerm) => {
        console.log(data2)
        console.log(checkTerm)
        if (checkTerm[0] !== "Tampilkan Semua") {
            const newDataList = data.filter((item) => {
                return item.category === checkTerm;
            });
            newDataList.map((item)=>{
                setCheckResult(state=>[...state, item])
            })
            console.log(newDataList);
            const choosedCategory = data2.filter((item)=>{
                return item.name === checkTerm;
            });
            choosedCategory.map((item)=>{
                setCategory(state=>[...state, item])
            })
        }
        else if(checkTerm[0] === "Tampilkan Semua"){
            setCheckResult(data)
            setCategory(data2)
        }
    };
    const getCheckTerm = () => {
        console.log(checkTerm)
        if (checkTerm.length !== 0) {
            checkTerm.map((item)=>(
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
