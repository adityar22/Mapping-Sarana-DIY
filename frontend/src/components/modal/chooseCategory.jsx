import { useState } from "react";

import CatList from "../category/catList";

const ChooseCategory = ({ categories, choosedCat, selfPopup, addFacPopUp, addCatPopUp, setLoading, setError }) => {
    const addFacility = () => {
        addFacPopUp(true);
        selfPopup(false);
    }

    const addCategory = () => {
        addCatPopUp(true);
        selfPopup(false);
    }
    const chooseCategory=(cat)=>{
        choosedCat(cat)
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
                        <select onChange={(e) => chooseCategory(e.target.value)}>
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