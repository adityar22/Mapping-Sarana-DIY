import { useState } from "react";

import { useCategoryContext } from "../../hooks/useCategoryContext";
import { useDisplayContext } from "../../hooks/useDisplayContext";
import useFetch from "../../hooks/useFetch";

import CatList from "../category/catList";
import AddCategory from "./addCategory";
import AddFacility from "./addFacility";

const ChooseCategory = ({ categories, selfPopup, setLoading, url, setError }) => {
    console.log(categories)
    const [addCatModal, setAddCatModal] = useState(false);
    const openAddCatModal = () => {
        setAddCatModal(true);
    }
    const closeAddCatModal = () => {
        setAddCatModal(false);
    }
    const [addFacModal, setAddFacModal] = useState(false);
    const openAddFacModal = () => {
        setAddFacModal(true);
    }
    const closeAddFacModal = () => {
        setAddFacModal(false);
    }

    const [catName, setCatName] = useState("");

    const onsubmit = () => {
        setAddFacModal(true);
        selfPopup();
    }
    const onAddcategory=()=>{
        setAddCatModal(true);
        selfPopup();
    }

    return (
        <div>
            <div>
                <form onSubmit={onsubmit}>
                    <button onClick={selfPopup}>x</button>
                    <h3>Pilih Kategori</h3>
                    <div>
                        <label>
                            Kategori
                        </label>
                        <select>
                            {categories && categories.map(category => (
                                <CatList key={category.name} category={category} setLoading={setLoading} setError={setError} />
                            ))}
                        </select>
                    </div>
                    <div>
                        <label onClick={onAddcategory}>
                            Tambah Kategori
                        </label>
                    </div>
                    <button
                        type="submit">
                        Berikutnya
                    </button>
                </form>
                {addFacModal && <AddFacility />}
                {addCatModal && <AddCategory/>}
            </div>
        </div>
    )
}
export default ChooseCategory;