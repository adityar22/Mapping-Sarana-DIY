import { useState } from "react";
import { useCategoryContext } from "../../hooks/useCategoryContext";
import { useFacilityContext } from "../../hooks/useFacilityContext";
import { useFacilityHandleAdd } from "../../hooks/useFacilityHandleAdd";
import useFetch from "../../hooks/useFetch";

const AddFacility = ({ url, category, selfPopUp, chooseCatPopUp, setLoading, setError }) => {
    const [name, setName] = useState("")
    const [coordinat, setCoordinat] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [atr1, setAtr1] = useState("")
    const [atr2, setAtr2] = useState("")
    const [atr3, setAtr3] = useState("")
    const [atr4, setAtr4] = useState("")
    const [atr5, setAtr5] = useState("")

    const { categories, dispatch2 } = useCategoryContext();
    const url2 = 'http://localhost:3100/api/category/'+category;
    useFetch({ url: url2, dispatch: dispatch2, setError, setLoading, type: 'GET_CATEGORIES' });
    console.log(categories)

    return (
        <>
            <form>
                <h3>Tambah Fasilitas</h3>
                <div>
                    <label>Kategori</label>
                    <label>{category.name}</label>
                </div>
                <div>
                    <label>Nama</label>
                    <input
                        required
                        id="name"
                        type="text"
                        placeholder="Nama fasilitas"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <label>Koordinat</label>
                    <input
                        required
                        id="coordinat"
                        type="text"
                        placeholder="Koordinat fasilitas"
                        onChange={(e) => setCoordinat(e.target.value)}
                        value={coordinat}
                    />
                </div>
                <div>
                    <label>Image</label>
                    <input
                        required
                        id="coordinat"
                        type="file"
                        accept="image/png, image/jpeg"
                    />
                </div>

            </form>
        </>
    )
}
export default AddFacility;