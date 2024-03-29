import { useState, useRef } from "react";
import { useCategoryContext } from "../../hooks/usecategoryContext";
import { useFacilityContext } from "../../hooks/useFacilityContext";
import { useFacilityHandleEdit } from "../../hooks/useFacilityHandleEdit"
import useFetch from "../../hooks/useFetch";

import AtributColumn from '../facility/atributColumn'

const EditLocation = ({ facility, url, category, togglePopup, setLoading, setError, notify }) => {
    const { dispatch } = useFacilityContext();

    const [name, setName] = useState(facility.name)
    const [cat, setCat] = useState(facility.category)
    const [coordinat, setCoordinat] = useState(facility.coordinat)
    const [imageURL, setImageURL] = useState(facility.imageURL)
    const [atr1, setAtr1] = useState(facility.atribut1)
    const [atr2, setAtr2] = useState(facility.atribut2)
    const [atr3, setAtr3] = useState(facility.atribut3)
    const [atr4, setAtr4] = useState(facility.atribut4)
    const [atr5, setAtr5] = useState(facility.atribut5)

    const atrVal = [
        atr1, atr2, atr3, atr4, atr5
    ]
    const atrSet = [
        setAtr1, setAtr2, setAtr3, setAtr4, setAtr5
    ]
    const [totalImage, setTotalImage] = useState(imageURL.length)

    const handleImage = (e) => {
        e.stopPropagation()
        const file = e.target.files[0];
        setFileToBase(file)
        e.target.files[0] = null;
        e.preventDefault();
    }
    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageURL([...imageURL, reader.result]);
        }
        setTotalImage(prevTotal => prevTotal + 1);
    }
    const handleClick = () => {
        const file = document.getElementById("imageEdit")
        file.click()
        console.log(imageURL)
    };
    const editImage = (e, index) => {
        e.stopPropagation()
        const file = e.target.files[0];
        setEditFile(file, index)
        e.target.files[0] = null;
        e.preventDefault();
    }
    const setEditFile = (file, index) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        const newURL = imageURL
        newURL[index] = reader.result
        reader.onloadend = () => {
            setImageURL(newURL);
        }
    }
    const deleteImage = (index) => {
        setImageURL(imageURL.filter((el, i) => i !== index))
        setTotalImage(prevTotal => prevTotal - 1)
    }

    const updatedData = { name, coordinat, imageURL, atr1, atr2, atr3, atr4, atr5 }
    const { handleEdit: handleSubmit } = useFacilityHandleEdit({ url, data: facility, updatedData, type: 'EDIT_FACILITIES', dispatch, setLoading, setError, closePopUp: togglePopup, notify })

    return (
        <>
            <div className="overlay z-20"></div>
            <div className="container w-fit mx-auto absolute z-50 top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <form className="w-screen max-w-xl mx-8 bg-white shadow-xl rounded-3xl px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="flex justify-end">
                        <button className="" onClick={togglePopup}>x</button>
                    </div>
                    <h3 className="text-center text-2xl font -bold mb-3">Tambah Fasilitas</h3>
                    <div className="mb-2">
                        <label>Kategori : </label>
                        <label>{cat}</label>
                    </div>
                    <div className="mb-2 inline-flex">
                        {imageURL.map((imgURL, index) => (
                            <div
                                key={index}
                                style={{ backgroundImage: `url(${imgURL})` }}
                                className="w-36 h-32 bg-cover bg-center mr-3"
                            >
                                <div className="inline-flex mr-1 justify-between w-full px-1">
                                    <input
                                        style={{ display: 'none' }}
                                        className=""
                                        id="imageEdit"
                                        type="file"
                                        onChange={(e)=>editImage(e, index)}
                                        accept="image/png, image/jpeg"
                                    />
                                    <span className="cursor-pointer mt-1 px-1 py-1 rounded bg-white border-2 border-orange text-orange" onClick={handleClick}>Edit</span>
                                    <span className="cursor-pointer mt-1 px-2 py-1 rounded bg-red-700 text-white" onClick={(e) => deleteImage(index)}>x</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {totalImage != 3 && (
                        <div className="mb-4">
                            <label>Tambah Gambar : </label>
                            <input
                                className=""
                                id="image"
                                type="file"
                                onChange={handleImage}
                                accept="image/png, image/jpeg"
                            />
                        </div>
                    )}
                    <div className="mb-2">
                        {name != "" && <label className="">Nama : </label>}
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Nama fasilitas"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="mb-2">
                        {coordinat != "" && <label>Koordinat : </label>}
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="coordinat"
                            type="text"
                            placeholder="Koordinat fasilitas"
                            onChange={(e) => setCoordinat(e.target.value)}
                            value={coordinat}
                            readOnly
                        />
                    </div>
                    {category[0].atribut.length > 0 && category[0].atribut.map((atribut, index) => (
                        <AtributColumn key={atribut} atribut={atribut} atrVal={atrVal[index]} atrSet={atrSet[index]} />
                    ))}
                    <div className="flex justify-end">
                        <button
                            onClick={togglePopup}
                            className="mr-4 bg-white mt-3 hover:bg-blue-700 text-orange border-2 border-orange font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="bg-lightblue mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default EditLocation;