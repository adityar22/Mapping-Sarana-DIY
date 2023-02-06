import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
} from "react-leaflet";
import osm from "../components/maptiler/osm-providers";
import { useRef } from "react";
import L from "leaflet/dist/leaflet";

import { useFacilityContext } from "../hooks/useFacilityContext";
import { useCategoryContext } from "../hooks/useCategoryContext";
import { useDisplayContext } from "../hooks/useDisplayContext";
import useFetch from "../hooks/useFetch";

import Navbar from "../components/public/Navbar";
import SearchBar from "../components/searchbar/Searchbar";
import ChooseCategory from "../components/modal/chooseCategory";
import AddCategory from "../components/modal/addCategory";
import AddFacility from "../components/modal/addFacility";
import MarkerView from "../components/maptiler/marker";
import { useFilter } from "../hooks/useFilter";

export default function BasicMap() {
  const { facilities, dispatch } = useFacilityContext();
  const { categories, dispatch2 } = useCategoryContext();
  const { notify, isPending, error, setLoading, setError } = useDisplayContext();
  const [choosedCat, setChoosedCat] = useState({});

  const [editMode, setEditMode] = useState(false);
  const toggleMapMode = (mode) => {
    setEditMode(mode);
  };

  const [miniInfo, setMiniInfo] = useState(false);
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

  // console.log(facilities)
  // console.log(categories)

  const [center] = useState({
    lat: -7.795425632583776,
    lng: 110.36814965123658,
  });
  const ZOOM_LEVEL = 14;
  const mapRef = useRef();

  const [selectedPosition, setSelectedPosition] = useState(null);
  function ClickLocation() {
    const map = useMapEvents({
      click(e) {
        setSelectedPosition(e.latlng);
        console.log("selected: " + selectedPosition);
      },
    });
    return selectedPosition === null ? null : (
      <Marker position={selectedPosition}>
        <Popup on>
          <span onClick={(e) => chooseCatPopUp(true)}>+Tambah Lokasi</span>
        </Popup>
      </Marker>
    );
  }
  const [currentPos, setCurrentPos] = useState(null);
  function CurrentLocation() {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setCurrentPos(e.latlng);
        console.log("selected: " + currentPos);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
    return currentPos === null ? null : (
      <Marker position={currentPos}>
        <Popup on>
          <span onClick={(e) => chooseCatPopUp(true)}>+Tambah Lokasi</span>
        </Popup>
      </Marker>
    );
  }

  function ToggleButton() {
    return (
      <div className="mx-4 my-2">
        {editMode ?
          <div className="flex justify-end">
            <button
              className="bg-lightblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
              onClick={(e) => toggleMapMode(false)}>
              Edit Mode
            </button>
          </div>
          :
          <div className="flex justify-end">
            <button
              className="bg-lightblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
              onClick={(e) => toggleMapMode(true)}>
              View Mode
            </button>
          </div>
        }
      </div>
    );
  }

  const { filterResult, category, getFilterTerm, inputEl, filterTerm } = useFilter(facilities, categories);

  return (
    <div className="max-h-screen flex-col">
      <div className="top-0 sticky flex justify-end z-50">
        <SearchBar
          categories={categories}
          setLoading={setLoading}
          setError={setError}
          filterTerm={filterTerm}
          getFilterTerm={getFilterTerm}
          inputEl={inputEl}
        />
        <ToggleButton />
      </div>
      <div className="z-10">  
          {chooseCatModal && (
            <ChooseCategory
              categories={categories}
              selfPopup={chooseCatPopUp}
              addFacPopUp={addFacPopUp}
              addCatPopUp={addCatPopUp}
              choosedCat={choosedCat}
              setChoosedCat={setChoosedCat}
              setLoading={setLoading}
              setError={setError}
            />
          )}

          {addFacModal && (
            <AddFacility
              url={url}
              category={choosedCat}
              selfPopUp={addFacPopUp}
              chooseCatPopUp={chooseCatPopUp}
              addButtonVisible={toggleMapMode}
              setLoading={setLoading}
              setError={setError}
              pos={selectedPosition}
            />
          )}

          {addCatModal && <AddCategory
            url={url2}
            selfPopUp={addCatPopUp}
            chooseCatPopUp={chooseCatPopUp}
            addButtonVisible={toggleMapMode}
            setLoading={setLoading}
            setError={setError}
          />}
        </div>
      <div className="flex-col inline-flex">
        <div id="mapview" className="z-0 w-full items-center justify-center">
          <MapContainer
            id="maps"
            center={center}
            zoom={ZOOM_LEVEL}
            ref={mapRef}
            style={{ width: "90vw", height: "85vh" }}
            maxZoom={18}
            minZoom={2}
          >
            {editMode && <ClickLocation />}
            {!editMode && filterResult.length > 0 && 
              <MarkerView 
                filter={filterResult}
                category={category} 
                />}
            <TileLayer
              url={osm.maptiler.url}
              attribution={osm.maptiler.attribution}
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
