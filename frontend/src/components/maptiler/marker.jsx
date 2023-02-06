import React, { useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents,
    Popup,
} from "react-leaflet";
import L from "leaflet/dist/leaflet";

const MarkerView = ({ filter, category }) => {  
    
    const miniInfo=()=>{
        console.log("console here")
    }
    var icon = L.icon({
        iconUrl: category[0].icon,

        iconSize:     [38, 38],
        iconAnchor:   [22, 94],
        popupAnchor:  [-3, -76]
    })
    console.log(category[0].icon) 

    return (
        <div>
            {filter && filter.map(item => (
                <Marker position={item.coordinat} icon={icon} >
                    <Popup on>
                        <div className="flex-col items-center inline-flex">
                            <span>{item.name}</span>
                            <span onClick={miniInfo}> Detail Info</span>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </div>
    );
}

export default MarkerView;