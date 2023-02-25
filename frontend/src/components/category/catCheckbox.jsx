const CatCheckbox = ({category, setLoading, setError}) => {
    const onChecked =(checked, cat)=>{
        
    }
    return (
        <>
            <div className="">
                <input
                    type="checkbox"
                    value={category.name}
                    onChange={(e)=>onChecked(this, e.target.value)}
                />
                <label>{category.name}</label>
            </div>
        </>
    );
}
 
export default CatCheckbox;