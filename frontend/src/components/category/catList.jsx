import { useState } from "react";

const catList=({category, setLoading, seterror})=>{
    return(
        <>
            <option key={category.catID}>
                {category.catName}
            </option>
        </>
    )
}

export default catList;