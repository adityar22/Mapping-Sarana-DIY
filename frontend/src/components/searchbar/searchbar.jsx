import { useState } from "react";
import { useFilter } from "../../hooks/useFilter";
import CatList from "../category/catList";

const SearchBar = ({ categories, setLoading, setError, open, setOpen, filterTerm, getFilterTerm, inputEl, searchTerm, getSearchTerm, searchEl }) => {
    return (
        <div className=" relative flex justify-end sm:justify-start rounded-lg w-full">
            <div className="z-20 sm:w-1/5 pl-3 py-3">
                {/* <select
                    ref={inputEl}
                    onChange={getFilterTerm}
                    className="bg-orange px-4 w-full flex justify-between font-bold text-base rounded-2xl tracking-wider border-transparent active:border-white duration-300 text-white z-10 py-3 object-fit"  
                >
                    <option value="">Pilih Kategori</option>
                    {categories && categories.map(category => (
                        <CatList key={category.name} category={category} setLoading={setLoading} setError={setError} />
                    ))}
                </select> */}
                <button
                    onClick={(e) => setOpen(!open)}
                    className=" bg-orange px-4 w-full flex justify-end sm:justify-between font-bold text-base rounded-2xl tracking-wider border-transparent active:border-white duration-300 text-white z-10 py-3 object-fit"
                >Pilih Kategori
                </button>
            </div>
            <div className="flex justify-between py-3 px-3 pr-6 bg-gray-50 border-none z-0 w-4/5 hidden sm:block">
                <div className="w-full">
                    <input
                        ref={searchEl}
                        value={searchTerm}
                        onChange={getSearchTerm}
                        type='text'
                        name="search"
                        placeholder="Search Facility"
                        autoComplete="off"
                        aria-label="Search Facility"
                        className="px-3 py-3 font-semibold rounded-lg border-transparent w-full text-lg"
                    >
                    </input>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;