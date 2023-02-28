import React from "react";
import { useRef, useState } from "react";

import { useFacilityContext } from "../hooks/useFacilityContext";
import { useCategoryContext } from "../hooks/usecategoryContext";
import { useDisplayContext } from "../hooks/useDisplayContext";
import useFetch from "../hooks/useFetch";

import { useFilter } from "../hooks/useFilter";
import { useCheckFilter } from "../hooks/useCheckFilter";

import SearchBar from "../components/searchbar/searchbar";
import FacilityCard from "../components/facility/facilityCard";
import CatCheckbox from "../components/category/catCheckbox";

export default function LocationList() {
  const { facilities, dispatch } = useFacilityContext();
  const { categories, dispatch2 } = useCategoryContext();
  const { notify, isPending, error, setLoading, setError } = useDisplayContext();
  const [open, setOpen] = useState(false)

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

  const { filterResult, getFilterTerm, inputEl, filterTerm } = useFilter(facilities, categories);
  const { checkResult, category, getCheckTerm, checkTerm, setCheckTerm } = useCheckFilter(facilities, categories)

  return (
    <>
      <div className="top-0 sticky flex justify-end z-10 bg-white">
        <SearchBar
          categories={categories}
          setLoading={setLoading}
          setError={setError}
          filterTerm={filterTerm}
          getFilterTerm={getFilterTerm}
          inputEl={inputEl}
          open={open}
          setOpen={setOpen}
        />
      </div>

      <div className="p-2 bg-gray min-h-full lg:min-h-full flex">
        <CatCheckbox
          category={categories}
          open={open}
          checkTerm={checkTerm}
          setCheckTerm={setCheckTerm}
          getCheckTerm={getCheckTerm}
        />
        <div className="mx-9 my-10 md:mx-[100px] flex flex-col">
          <div className="flex flex-col md:w-68">
            {inputEl == "" &&
              <>
                <p className="font-poppins text-sm">Pilih kategori untuk memfilter data</p>
                {/* {facilities &&
                  facilities.map((facility) => (
                    <>
                      <FacilityCard facility={facility} category={category} url={url} setLoading={setLoading} setError={setError} notify={notify} />
                    </>
                  ))} */}
              </>
            }
            {checkResult.length != 0 &&
              checkResult.map((facility) => (
                <>
                  <FacilityCard facility={facility} category={category} url={url} setLoading={setLoading} setError={setError} notify={notify} />
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
