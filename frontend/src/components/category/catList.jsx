const CatList=({category, setLoading, seterror})=>{
    return(
        <>
            <option key={category.name} value={JSON.stringify(category)} className="text-sm text-blue bg-white hover:bg-blue">
                {category.name}
            </option>
        </>
    )
}

export default CatList;