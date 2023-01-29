import { useState } from "react";
import { useCategoryContext } from "../../hooks/usecategoryContext";
import { useCategoryHandleAdd } from "../../hooks/useCategoryHandleAdd";
import ChooseIcon from "./chooseIcon";

const AddCategory = ({ url, selfPopUp, chooseCatPopUp, addButtonVisible, setLoading, setError }) => {
    const { dispatch2 } = useCategoryContext();

    const [name, setName] = useState("")
    const [icon, setIcon] = useState("")
    const [atribut, setAtribut] = useState([""])
    const [atributType, setAtributType] = useState([""])

    const [atributTotal, setAtributTotal] = useState(0);
    function delAtr() {
        this.parentElement.remove()

        setAtributTotal(prevTotal => prevTotal - 1)
    }
    const addAtribut = () => {
        var inputAtrField = document.getElementById('inputAtr')

        var newAtribut = document.createElement('input')
        newAtribut.setAttribute('type', 'text')
        newAtribut.setAttribute('placeholder', 'Nama Atribut...')
        newAtribut.className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2 my-2"

        var newAtributType = document.createElement('select')
        newAtributType.className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"

        var typeOptText = document.createElement('option')
        typeOptText.value = ('text')
        typeOptText.text = ('text')
        var typeOptNumber = document.createElement('option')
        typeOptNumber.value = ('number')
        typeOptNumber.text = ('number')
        var typeOptDate = document.createElement('option')
        typeOptDate.value = ('date')
        typeOptDate.text = ('date')

        var delAtrBtn = document.createElement('a')
        delAtrBtn.innerHTML = "&times"
        delAtrBtn.addEventListener('click', delAtr)

        var divAtr = document.createElement('div')
        divAtr.className = "flex"

        inputAtrField.appendChild(divAtr)
        divAtr.appendChild(newAtribut)
        divAtr.appendChild(newAtributType)
        divAtr.appendChild(delAtrBtn)
        newAtributType.appendChild(typeOptText)
        newAtributType.appendChild(typeOptNumber)
        newAtributType.appendChild(typeOptDate)

        console.log(newAtributType.value)
        setAtributTotal(prevTotal => prevTotal + 1)
        console.log(atributTotal)
    }

    const [displayIcon, setDisplayIcon] = useState(false)
    const toggleChooseIcon = ()=>{
        {displayIcon==true ? setDisplayIcon(false) : setDisplayIcon(true)}
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
    const { handleAdd: handleSubmit } = useCategoryHandleAdd({ url, type: 'ADD_CATEGORIES', dispatch2, data: newCategory, setLoading, setError, closePopUp: backChooseCat })

    return (
        <>
            {/* <div className="overlay z-100"></div> */}
            <div className="container w-fit mx-auto">
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
                        {name != "" && <label className="">Icon : </label>}
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Pilih icon..."
                            onChange={(e) => setIcon(e.target.value)}
                            value={icon}
                            onClick={(e) => toggleChooseIcon}
                            readOnly
                        />
                    </div>
                    {displayIcon &&
                        <div className="mb-4">
                            <ChooseIcon setIcon={setIcon}/>
                        </div>
                    }
                    <div id="inputAtr" className="mb-4">

                    </div>
                    {atributTotal != 5 &&
                        <div className="mb-4">
                            <label onClick={(e) => addAtribut()}>
                                +Tambah Atribut
                            </label>
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