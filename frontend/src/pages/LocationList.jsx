import React from "react";
import { useRef, useState } from "react";

import { useFacilityContext } from "../hooks/useFacilityContext";
import { useCategoryContext } from "../hooks/usecategoryContext";
import { useDisplayContext } from "../hooks/useDisplayContext";
import { useHandleDelete } from "../hooks/useFacilityHandleDelete";
import useFetch from "../hooks/useFetch";


import SearchBar from "../components/searchbar/searchbar";
import { useFilter } from "../hooks/useFilter";
import FacilityCard from "../components/facility/facilityCard";

export default function LocationList() {
  const { facilities, dispatch } = useFacilityContext();
  const { categories, dispatch2 } = useCategoryContext();
  const { notify, isPending, error, setLoading, setError } =
    useDisplayContext();

  const url = "http://localhost:3100/api/mapping/";
  useFetch({ url, dispatch, setError, setLoading, type: "GET_FACILITIES" });

  const url2 = "http://localhost:3100/api/category/";
  useFetch({
    url: url2,
    dispatch: dispatch2,
    setError,
    setLoading,
    type: "GET_CATEGORIES",
  });

  const { filterResult, category, getFilterTerm, inputEl, filterTerm } =
    useFilter(facilities, categories);

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

      <div className=" p-2 bg-gray min-h-full lg:min-h-full">
        <div className="mx-9 my-10 md:mx-[100px] flex flex-col">
          <div className="flex flex-col md:w-68">
            {inputEl=='Category' ?? <p>Pilih kategori untuk menampilkan data</p>}
            {filterResult &&
              filterResult.map((facility) => (
                <>
                  <FacilityCard facility={facility} category={category} url={url} setLoading={setLoading} setError={setError} />
                </>
              ))}
          </div>
        </div>
      </div>

    </>
  );
}
