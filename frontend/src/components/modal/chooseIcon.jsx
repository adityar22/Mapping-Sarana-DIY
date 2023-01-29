import { useState } from "react";

import iconWifi from "../../assets/iconWifi.png"
import iconCCTV from "../../assets/iconCCTV.png"
import iconPolice from "../../assets/iconPolice.png"
import iconHospital from "../../assets/iconHospital.png"
import iconTrafficLight from "../../assets/iconTrafficLight.png"

const ChooseIcon = (setIcon) => {
    const Icons=[
        {name:"cctv", src:iconCCTV},
        {name:"traffic light", src:iconTrafficLight},
        {name:"street light", src:iconWifi},
        {name:"wifi", src:iconWifi},
        {name:"hospital", src:iconHospital},
        {name:"police", src:iconPolice},
        {name:"fire fighter", src:iconWifi},
        {name:"rhtp", src:iconWifi},
        {name:"school", src:iconWifi},
        {name:"office", src:iconWifi},
        {name:"gardu", src:iconWifi},
        {name:"transportation", src:iconWifi},
        {name:"default", src:iconWifi},
    ]
    return (
        <div className="w-full flex-row justify-between">
            <div className="mb-4 flex flex-wrap">
                {Icons.map((icon, index)=>(
                    <div className="mr-4">
                        <img src={icon.src} alt=""/>
                    </div>
                ))}
            </div>
            <div>
                <label>Custom Icon : </label>
                <input
                    type={'file'}
                ></input>
            </div>
        </div>
    );
}

export default ChooseIcon;