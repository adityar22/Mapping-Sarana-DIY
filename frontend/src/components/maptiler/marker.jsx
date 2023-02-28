import React from "react";
import {
    Marker,
    Popup
} from "react-leaflet";
import L from "leaflet/dist/leaflet";

const MarkerView = ({ filter, category, setMarker, infoPopup }) => {
    const showDetail = (item) => {
        infoPopup(true)
        setMarker(item)
    }
    const cat = category.filter((item)=>{
        return item.name === filter.category;
    })
    var icon = L.icon({
        iconUrl: cat[0].icon,

        iconSize: [38, 38],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    })

    return (
        <div>
            <Marker position={filter.coordinat} icon={icon} >
                <Popup on>
                    <div className="flex-col items-center inline-flex">
                        <span>{filter.name}</span>
                        <span onClick={(e) => showDetail(filter)} className="text-orange cursor-pointer"> Detail Info</span>
                    </div>
                </Popup>
            </Marker>
        </div>
    );
}

export default MarkerView;