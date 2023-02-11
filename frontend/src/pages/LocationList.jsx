import React from "react";
import { useRef, useState } from "react";

import { useFacilityContext } from "../hooks/useFacilityContext";
import { useCategoryContext } from "../hooks/usecategoryContext";
import { useDisplayContext } from "../hooks/useDisplayContext";
import useFetch from "../hooks/useFetch";

import Navbar from "../components/public/Navbar";
import SearchBar from "../components/searchbar/searchbar";
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

      <div className=" p-4 bg-gray h-screen">
        <div className="mx-9 my-10 md:mx-[100px] flex flex-col">
          <div className="flex flex-col md:w-68">
            {filterResult &&
              filterResult.map((facility) => (
                <>
                  <div class="flex justify-between py-2 px-2 lg:py-[6px] lg:px-[6px] bg-blue mb-[25px] rounded-2xl">
                    <div className="justify-start flex-row inline-flex">
                      <img
                        class=" object-cover w-36 lg:w-36 h-auto rounded-xl"
                        src={facility.imageURL}
                        alt=""
                      />
                      <div class="justify-content-start p-8 flex flex-col ">
                        <h3 class="text-white text-2xl font-poppins font-semibold mb-3">{facility.name}</h3>
                          <p class="text-white text-xl text-poppins font-medium mb-3 w-1/2"> Koordinat : {facility.coordinat}</p>
                          <p class="text-white text-2xl text-poppins font-medium mb-3">{facility.atr1}</p>
                          <p class="text-white text-xl text-poppins font-medium mb-2">{facility.atr2}</p>
                          <p class="text-white text-xl text-poppins font-medium mb-2">{facility.atr3}</p>
                          <p class="text-white text-xl text-poppins font-medium mb-2">{facility.atr4}</p>
                          <p class="text-white text-xl text-poppins font-medium mb-2">{facility.atr5}</p>
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
