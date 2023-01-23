import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import osm from "../components/maptiler/osm-providers";
import Navbar from "../components/public/Navbar";
import { useRef } from "react";

export default function BasicMap() {
  const [chooseCatModal, setChooseCatModal] = useState(false);
  const openChooseCat = () =>{
    setChooseCatModal(true);
  }
  const closeChooseCat = () =>{
    setChooseCatModal(false);
  }

  const [editFacModal, setEditFacModal] = useState(false);
  const [miniInfo, setMiniInfo] = useState(false);

  const [center] = useState({
    lat: -7.795425632583776,
    lng: 110.36814965123658,
  });
  const ZOOM_LEVEL = 14;
  const mapRef = useRef();

  return (
    <>
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
