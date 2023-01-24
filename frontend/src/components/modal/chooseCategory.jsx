import { useState } from "react";

import CatList from "../category/catList";

const ChooseCategory = ({ categories, setCatName, selfPopup, addFacPopUp, addCatPopUp, setLoading, setError }) => {
    console.log(categories)

    const addFacility = () => {
        addFacPopUp(true);
        selfPopup(false);
    }

    const addCategory = () => {
        addCatPopUp(true);
        selfPopup(false);
    }

    return (
        <div>
            <div>
                <form>
                    <button onClick={(e)=>selfPopup(false)}>x</button>
                    <h3>Pilih Kategori</h3>
                    <div>
                        <label>
                            Kategori
                        </label>
                        <select onChange={(e) => setCatName(e.target.value)}>
                            {categories && categories.map(category => (
                                <CatList key={category.name} category={category} setLoading={setLoading} setError={setError} />
                            ))}
                        </select>
                    </div>
                    <div>
                        <label onClick={addCategory}>
                            Tambah Kategori
                        </label>
                    </div>
                    <button
                        onClick={addFacility}>
                        Berikutnya
                    </button>
                </form>
            </div>
        </div>
    )
}
export default ChooseCategory;