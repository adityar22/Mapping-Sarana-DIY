import React, { useState } from "react";
import {
    Marker,
    Popup
} from "react-leaflet";
import L from "leaflet/dist/leaflet";

const MarkerView = ({ filter, category, setMarker, infoPopup }) => {  
    const showDetail=(item)=>{
        infoPopup(true)
        setMarker(item)
    }
    console.log(filter)
    var icon = L.icon({
        iconUrl: category[0].icon,

        iconSize:     [38, 38],
        iconAnchor:   [22, 94],
        popupAnchor:  [-3, -76]
    })

    return (
        <div>
            {filter && filter.map(item => (
                <Marker position={item.coordinat} icon={icon} >
                    <Popup on>
                        <div className="flex-col items-center inline-flex">
                            <span>{item.name}</span>
                            <span onClick={(e)=>showDetail(item)} className="text-orange cursor-pointer"> Detail Info</span>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </div>
    );
}

export default MarkerView;