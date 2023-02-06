import React, { useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents,
    Popup,
} from "react-leaflet";
import L from "leaflet/dist/leaflet";

const MarkerView = ({ filter }) => {   
    const miniInfo=()=>{
        console.log("console here")
    }

    return (
        <div>
            {filter && filter.map(item => (
                <Marker position={item.coordinat} >
                    <Popup on>
                        <div className="flex-column">
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