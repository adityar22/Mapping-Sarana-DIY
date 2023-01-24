import { useState } from "react";

const CatList=({category, setLoading, seterror})=>{
    console.log(category.name)
    return(
        <>
            <option key={category.name}>
                {category.name}
            </option>
        </>
    )
}

export default CatList;