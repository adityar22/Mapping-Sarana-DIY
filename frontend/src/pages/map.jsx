import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import osm from "../components/maptiler/osm-providers";
import { useRef } from "react";
import axios from 'axios';


import { useFacilityContext } from "../hooks/useFacilityContext";
import { useCategoryContext } from "../hooks/useCategoryContext";
import { useDisplayContext } from "../hooks/useDisplayContext";
import useFetch from "../hooks/useFetch";

import Navbar from "../components/public/Navbar";
import SearchBar from "../components/searchbar/searchbar";
import ChooseCategory from "../components/modal/chooseCategory";

export default function BasicMap() {
  const { facilities, dispatch } = useFacilityContext();
  const { categories, dispatch2 } = useCategoryContext();
  const { notify, isPending, error, setLoading, setError } = useDisplayContext();

  const [chooseCatModal, setChooseCatModal] = useState(false);
  const openChooseCat = () => {
    setChooseCatModal(true);
  }
  const closeChooseCat = () => {
    setChooseCatModal(false);
  }

  const [miniInfo, setMiniInfo] = useState(false);
  const openMiniInfo = () => {
    setMiniInfo(true);
  }
  const closeMiniInfo = () => {
    setMiniInfo(false);
  }

  const url = 'http://localhost:3100/api/mapping';
  const url2 = 'http://localhost:3100/api/category';
  useFetch({ url, dispatch, setError, setLoading, type: 'GET_FACILITIES' });
  useFetch({ url2, dispatch2, setError, setLoading, type: 'GET_CATEGORIES' });

  // const getMapping = async (e) => {
  //   // e.preventDefault();
  //   try {
  //     // GET request for products from fakestore API
  //     await axios({
  //       method: "get",
  //       baseURL: "https://localhost:3100",
  //       url: "/mapping/",
  //     })
  //       .then(function (response) {
  //         // handle success
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };
  // getMapping();

  const [center] = useState({
    lat: -7.795425632583776,
    lng: 110.36814965123658,
  });
  const ZOOM_LEVEL = 14;
  const mapRef = useRef();

  return (
    <>
      <SearchBar></SearchBar>
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
        style={{ width: "100vw", height: "100vh" }}
      >
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
      </MapContainer>
      <div className="align-middle" >
        <button
          type="button"
          className="button p-3 mb-10 sm:mb-12 mr-7 relative"
          onClick={openChooseCat}
        > Add Task + </button>
      </div>
      {chooseCatModal && <ChooseCategory />}
    </>
  );
}

// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// const center = [-7.79517159918859, 110.36797836775261];
// export default function App() {
//   return (
//     <MapContainer
//       center={center}
//       zoom={300}
//       style={{ width: "100vw", height: "100vh" }}
//     >
//       <TileLayer
//         url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=bAw0nCk1tkpX6xjoL9u0"
//         attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
//       />
//       <Marker position={center}>
//         <Popup>
//           Yeay we did it. <br /> wadidaw.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// }
