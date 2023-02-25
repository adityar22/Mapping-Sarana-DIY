import { useState } from "react";
import { useCategoryContext } from "../../hooks/usecategoryContext";
import { useCategoryHandleAdd } from "../../hooks/useCategoryHandleAdd";
import ChooseIcon from "./chooseIcon";

const AddCategory = ({ url, selfPopUp, chooseCatPopUp, addButtonVisible, setLoading, setError, notify }) => {
    const { dispatch2 } = useCategoryContext();

    const [name, setName] = useState("")
    const [icon, setIcon] = useState("")
    const [atribut, setAtribut] = useState([])
    const [atributType, setAtributType] = useState([])

    const [iconName, setIconName] = useState("")

    const [addAtribut, setAddAtribut] = useState(false)
    const [atributTotal, setAtributTotal] = useState(0);
    function delAtr(index) {
        setAtribut(atribut.filter((el, i) => i !== index))
        setAtributType(atributType.filter((el, i) => i !== index))
        setAtributTotal(prevTotal => prevTotal - 1)
    }
    function changeAtrType(e, index) {
        e.stopPropagation();

        const value = e.target.value
        const newAtrType = [...atributType]
        newAtrType[index] = value
        setAtributType(newAtrType)

        e.preventDefault();
    }
    function changeAtr(e, index) {
        e.stopPropagation();

        const value = e.target.value
        const newAtr = [...atribut]
        newAtr[index] = value
        setAtribut(newAtr)
        console.log(atribut)
        console.log(index)

        e.preventDefault();
    }
    function handleKeyDown(e) {
        e.stopPropagation();

        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setAtribut([...atribut, value])
        setAtributType([...atributType, "text"])
        e.target.value = ''
        setAtributTotal(prevTotal => prevTotal + 1)
        console.log(atributTotal)
        e.preventDefault();
        console.log(atribut)
        console.log(atributType)
    }

    const [displayIcon, setDisplayIcon] = useState(false)
    const toggleChooseIcon = () => {
        { displayIcon == true ? setDisplayIcon(false) : setDisplayIcon(true) }
        console.log(displayIcon)
    }

    const backChooseCat = () => {
        selfPopUp(false)
        chooseCatPopUp(true)
    }
    const closeAdd = () => {
        selfPopUp(false)
        addButtonVisible(true)
    }

    const newCategory = { name, icon, atribut, atributType };
    const { handleAdd: handleSubmit } = useCategoryHandleAdd({ url, type: 'ADD_CATEGORIES', dispatch2, data: newCategory, setLoading, setError, closePopUp: backChooseCat, notify })

    return (
        <>
            <div className="overlay z-20"></div>
            <div className="container w-fit mx-auto absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <form className="w-screen max-w-xl mx-8 bg-white shadow-xl rounded-3xl px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                        <button className="" onClick={(e) => backChooseCat()}>kembali</button>
                        <button className="" onClick={(e) => closeAdd()}>x</button>
                    </div>
                    <h3 className="text-center text-2xl font -bold mb-12">Tambah Kategori</h3>
                    <div className="mb-4">
                        {name != "" && <label className="">Nama : </label>}
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Nama kategori"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="mb-4">
                        <div className="flex justify-between">
                            <input
                                required
                                className="shadow appearance-none border rounded mr-2 w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                value={iconName}
                                placeholder="Pilih icon..."
                                readOnly
                            />
                            <div className="items-center py-2">
                                <label onClick={(e) => toggleChooseIcon()}>Cari Icon</label>
                            </div>
                        </div>

                    </div>
                    {displayIcon &&
                        <div className="mb-4">
                            <ChooseIcon setIcon={setIcon} setIconName={setIconName} />
                        </div>
                    }
                    <div id="inputAtr" className="mb-4">
                        {atributTotal != 0 && atribut.map((atr, index) => (
                            <div className="flex mb-4" key={index}>
                                <input
                                    required
                                    type='text'
                                    value={atribut[index]}
                                    className="shadow appearance-none border rounded mr-2 w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={(e) => changeAtr(e, index)}
                                />
                                <select
                                    onChange={(e) => changeAtrType(e, index)}
                                    className="shadow appearance-none border rounded mr-2 w-1/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value={'text'}>Text</option>
                                    <option value={'number'}>Number</option>
                                    <option value={'date'}>Date</option>
                                </select>
                                <label onClick={(e) => delAtr(index)}>x</label>
                            </div>
                        ))}
                    </div>
                    {atributTotal != 5 &&
                        <div>
                            <input
                                onKeyDown={handleKeyDown}
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="type and enter to add new atribut "
                            />
                        </div>
                    }
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-lightblue mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddCategory;