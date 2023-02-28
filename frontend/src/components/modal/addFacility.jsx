import { useState } from "react";
import { useFacilityContext } from "../../hooks/useFacilityContext";
import { useFacilityHandleAdd } from "../../hooks/useFacilityHandleAdd";

import AtributColumn from '../facility/atributColumn'

const AddFacility = ({ url, category, selfPopUp, chooseCatPopUp, addButtonVisible, setLoading, setError, pos, notify }) => {
    const { dispatch } = useFacilityContext();

    const [name, setName] = useState("")
    const [coordinat, setCoordinat] = useState([pos.lat, pos.lng])
    const [imageURL, setImageURL] = useState([])
    const [atr1, setAtr1] = useState("")
    const [atr2, setAtr2] = useState("")
    const [atr3, setAtr3] = useState("")
    const [atr4, setAtr4] = useState("")
    const [atr5, setAtr5] = useState("")
    const catName = JSON.stringify(category.name).replace(/"/g, '')

    const [totalImage, setTotalImage] = useState(0)

    const atrVal = [
        atr1, atr2, atr3, atr4, atr5
    ]
    const atrSet = [
        setAtr1, setAtr2, setAtr3, setAtr4, setAtr5
    ]

    const backChooseCat = () => {
        selfPopUp(false)
        chooseCatPopUp(true)
    }

    const closeAdd = () => {
        selfPopUp(false)
        addButtonVisible(true)
    }

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
    const deleteImage = (index)=>{
        setImageURL(imageURL.filter((el, i)=>i!==index))
        setTotalImage(prevTotal=>prevTotal-1)
    }

    const newFacility = { name, coordinat, category: catName, imageURL, atr1, atr2, atr3, atr4, atr5 }
    const { handleAdd: handleSubmit } = useFacilityHandleAdd({ url, type: 'ADD_FACILITIES', dispatch, data: newFacility, setLoading, setError, closePopUp: closeAdd, notify })

    return (
        <>
            <div className="overlay z-20"></div>
            <div className="container w-fit mx-auto absolute z-50 top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <form className="w-screen max-w-xl mx-8 bg-white shadow-xl rounded-3xl px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                        <button className="" onClick={(e) => backChooseCat()}>kembali</button>
                        <button className="" onClick={(e) => closeAdd()}>x</button>
                    </div>
                    <h3 className="text-center text-2xl font -bold mb-12">Tambah Fasilitas</h3>
                    <div className="mb-4">
                        <label>Kategori : </label>
                        <label>{category.name}</label>
                    </div>
                    <div className="mb-4">
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
                    <div className="mb-4">
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
                    <div className="mb-4">
                        <div className="flex-col inline-flex">
                            <label>Image : </label>
                            <div className="inline-flex mb-1">
                                {totalImage != 0 && imageURL.map((image, index) => (
                                    <div key={index} className="mr-2 flex-col inline-flex">
                                        <img
                                            class=" object-cover w-32 h-32 lg:w-32 rounded-xl border-2"
                                            src={image}
                                            alt="" />
                                        <div className="inline-flex mb-1 justify-end">
                                            <span className="text-red-700 cursor-pointer" onClick={(e)=>{deleteImage(index)}}>Delete</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {totalImage != 3 &&
                                <input
                                    required
                                    className=""
                                    id="image"
                                    type="file"
                                    onChange={handleImage}
                                    accept="image/png, image/jpeg"
                                />
                            }
                        </div>
                    </div>
                    {category.atribut.length > 0 && category.atribut.map((atribut, index) => (
                        <AtributColumn key={atribut} atribut={atribut} atrVal={atrVal[index]} atrSet={atrSet[index]} notify={notify} />
                    ))}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-orange mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default AddFacility;