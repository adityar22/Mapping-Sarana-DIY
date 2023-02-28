import { useState } from "react";

import CatList from "../category/catList";

const ChooseCategory = ({ categories, setChoosedCat, selfPopup, addFacPopUp, addCatPopUp, setLoading, setError }) => {
    const addFacility = () => {
        addFacPopUp(true);
        selfPopup(false);
    }

    const addCategory = () => {
        addCatPopUp(true);
        selfPopup(false);
    }
    const chooseCategory = (cat) => {
        try{
            setChoosedCat(JSON.parse(cat))
            console.log(JSON.parse(cat))
            document.querySelector('.btnNext').disabled = false;
        }
        catch{
            document.querySelector('.btnNext').disabled = true;
        }
    }

    return (
        <div >
            <div className="overlay z-20"></div>
            <div className="container w-fit mx-auto absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <form className="w-screen max-w-xl mx-8 bg-white shadow-xl rounded-3xl px-8 pt-6 pb-8 mb-4" onSubmit={addFacility} >
                    <div className="flex justify-end">
                        <button className="" onClick={(e) => selfPopup(false)}>x</button>
                    </div>
                    <h3 className="text-center text-2xl font -bold mb-12">Pilih Kategori</h3>
                    <div className="mb-4">
                        <label>
                            Kategori
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={(e) => chooseCategory(e.target.value)}
                        >
                            <option>Pilih Kategori</option>
                            {categories && categories.map(category => (
                                <CatList key={category.name} category={category} setLoading={setLoading} setError={setError} />
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label onClick={addCategory} className="text-orange cursor-pointer">
                            + Tambah Kategori
                        </label>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="btnNext bg-orange mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline disabled:bg-slate-400"
                            onClick={addFacility}
                            disabled
                            type="submit"
                        >
                            Berikutnya
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ChooseCategory;