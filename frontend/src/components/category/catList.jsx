const CatList=({category, setLoading, seterror})=>{
    console.log(category.name)
    return(
        <>
            <option key={category.name} value={category.name}>
                {category.name}
            </option>
        </>
    )
}

export default CatList;