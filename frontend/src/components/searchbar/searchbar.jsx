import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"
import CatList from "../category/catList";


const SearchBar = ({ categories, setChoosedCat, setLoading, setError }) => {
    const chooseCategory = (cat) => {
        setChoosedCat(JSON.parse(cat))
        console.log(JSON.parse(cat))
    }
    return (
        <div className="relative flex items-start rounded-lg w-full">
            <div className="z-10 w-1/5 pl-3 py-3">
                <select className=" bg-black px-4 w-full flex justify-between font-bold text-lg rounded-2xl tracking-wider border-transparent active:border-white duration-300 text-white z-10 py-3" onChange={(e) => chooseCategory(e.target.value)}>
                    {categories && categories.map(category => (
                        <CatList key={category.name} category={category} setLoading={setLoading} setError={setError} />
                    ))}
                </select>
            </div>
            <div className="flex justify-between py-3 px-3 pr-6 bg-gray-50 border-none z-0 w-4/5">
                <form action="" className="w-full">
                    <input
                        type='text'
                        name="search"
                        placeholder="Search Facility"
                        autoComplete="off"
                        aria-label="Search Facility"
                        className="px-3 py-3 font-semibold rounded-lg border-transparent w-full text-lg rounded-xl"
                    >

                    </input>
                </form>

            </div>

        </div>
    );
}

export default SearchBar;