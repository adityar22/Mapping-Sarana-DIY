import { useState } from "react";

const CatList=({category, setLoading, seterror})=>{
    return(
        <>
            <option key={category.catID}>
                {category.catName}
            </option>
        </>
    )
}

export default CatList;