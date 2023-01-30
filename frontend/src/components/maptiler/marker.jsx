import React, { useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents,
    Popup,
} from "react-leaflet";

const MarkerView = ({ filter }) => {
    console.log(filter)
    console.log(filter.map(item=>(item.coordinat)))
    return (
        <div>
            {/* {filter && filter.map(item => (
                <Marker position={item.coordinat}>
                    <Popup on>
                        <span>{item.name}</span>
                        <span>Detail Info</span>
                    </Popup>
                </Marker>
            ))} */}
        </div>
    );
}

export default MarkerView;