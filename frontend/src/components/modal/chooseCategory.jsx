import { useState } from "react";

import { useCategoryContext } from "../../hooks/useCategoryContext";
import { useDisplayContext } from "../../hooks/useDisplayContext";
import useFetch from "../../hooks/useFetch";

import CatList from "../category/catList";
import addFacility from "./addFacility";

const ChooseCategory=({categories, openPopup, closePopup, setLoading, url, setError})=>{
    const [addCatModal, setAddCatModal] = useState(false);
    const openAddCatModal = () =>{
        setAddCatModal(true);
    }
    const closeAddCatModal = () =>{
       setAddCatModal(false);
    }
    const [addFacModal, setAddFacModal] = useState(false);
    const openAddFacModal = () =>{
        setAddFacModal(true);
    }
    const closeAddFacModal = () =>{
       setAddFacModal(false);
    }

    const [catName, setCatName] = useState("");

    return(
        <div>
            <div>
                <form>
                    <h3>Pilih Kategori</h3>
                    <div>
                        <label>
                            Kategori
                        </label>
                        <select>
                            {categories && categories.map(category=>(
                                <CatList key={category.catID} category={category} setLoading={setLoading} setError={setError} />
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>
                            Tambah Kategori
                        </label>
                    </div>
                    <button
                        type="submit">
                        Berikutnya
                    </button>
                </form>
            </div>
        </div>
    )
}
export default ChooseCategory;