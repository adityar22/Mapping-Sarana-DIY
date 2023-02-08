import React, { useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents,
    Popup,
} from "react-leaflet";

const MarkerView = ({ filter }) => {
    return (
        <div>
            {filter && filter.map(item => (
                <Marker position={item.coordinat}>
                    <Popup on>
                        <div className="flex-row">
                            <span>{item.name}</span>
                            <span>Detail Info</span>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </div>
    );
}

export default MarkerView;