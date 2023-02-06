import React from "react";
import { useRef, useState } from "react";

import { useFacilityContext } from "../hooks/useFacilityContext";
import { useCategoryContext } from "../hooks/useCategoryContext";
import { useDisplayContext } from "../hooks/useDisplayContext";
import useFetch from "../hooks/useFetch";

import Navbar from "../components/public/Navbar";
import SearchBar from "../components/searchbar/Searchbar";
import ChooseCategory from "../components/modal/chooseCategory";
import AddCategory from "../components/modal/addCategory";
import AddFacility from "../components/modal/addFacility";
import { useFilter } from "../hooks/useFilter";

import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";

export default function LocationList() {
  const { facilities, dispatch } = useFacilityContext();
  const { categories, dispatch2 } = useCategoryContext();
  const { notify, isPending, error, setLoading, setError } =
    useDisplayContext();
  const [choosedCat, setChoosedCat] = useState({});

  const [editMode, setEditMode] = useState(false);
  const toggleMapMode = (mode) => {
    setEditMode(mode);
  };

  const [chooseCatModal, setChooseCatModal] = useState(false);
  const chooseCatPopUp = (state) => {
    setChooseCatModal(state);
    toggleMapMode(false);
  };
  const [addCatModal, setAddCatModal] = useState(false);
  const addCatPopUp = (state) => {
    setAddCatModal(state);
  };
  const [addFacModal, setAddFacModal] = useState(false);
  const addFacPopUp = (state) => {
    setAddFacModal(state);
  };

  const url = "http://localhost:3100/api/mapping";
  useFetch({ url, dispatch, setError, setLoading, type: "GET_FACILITIES" });

  const url2 = "http://localhost:3100/api/category";
  useFetch({
    url: url2,
    dispatch: dispatch2,
    setError,
    setLoading,
    type: "GET_CATEGORIES",
  });

  const { filterResult, getFilterTerm, inputEl, filterTerm } =
    useFilter(facilities);

  return (
    <>
      <SearchBar
        categories={categories}
        setLoading={setLoading}
        setError={setError}
        filterTerm={filterTerm}
        getFilterTerm={getFilterTerm}
        inputEl={inputEl}
      />

      <div className=" bg-gray h-screen">
        <div className="mx-9 my-4 md:mx-[100px] md:my-[0px] flex flex-col">
          <div className="flex flex-col">
            {filterResult &&
              filterResult.map((facility) => (
                <>
                  <div class="flex justify-between py-2 px-4 lg:py-[5px] lg:px-[5px] bg-blue mb-[20px] rounded-[12px] hover:drop-shadow-xl transition">
                    <div className="justify-start flex-row inline-flex">
                      <img
                        class=" object-cover w-24 lg:w-36 h-auto"
                        src={facility.imageURL}
                        alt=""
                      />
                      <div class="justify-content-start p-10 flex flex-col ">
                        <h5 class="text-white text-3xl font-poppins font-bold mb-5">
                          {facility.name}
                        </h5>
                        <p class="text-white text-2xl text-poppins font-medium mb-4">
                          {facility.coordinat}
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <div className="inline-block cursor pointer">
                        <img src={Edit} className={`w-8 h-8`} alt=""></img>
                      </div>
                      <div className="inline-block ml-2 cursor pointer">
                        <img src={Delete} className={`w-8 h-8`} alt=""></img>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
