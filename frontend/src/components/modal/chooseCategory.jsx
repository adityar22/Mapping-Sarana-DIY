import { useState } from "react";

import { useCategoryContext } from "../../hooks/usecategoryContext";
import { useDisplayContext } from "../../hooks/useDisplayContext";
import useFetch from "../../hooks/useFetch";

import catList from "../category/catList";
import addFacility from "./addFacility";

const chooseCategory=({openPopup, closePopup, setLoading, url, setError})=>{
    const {categories, dispatch} = useCategoryContext();
    const {notify, isPending, error, setLoading, setError} = useDisplayContext();

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

    const url = '/api/category';
    useFetch({url, dispatch, setError, setLoading, type:'GET_CATEGORIES'});

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
                                <catList key={category.catID} category={category} setLoading={setLoading} setError={setError} />
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