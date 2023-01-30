import { useState } from "react";

import iconWifi from "../../assets/iconWifi.png"
import iconCCTV from "../../assets/iconCCTV.png"
import iconPolice from "../../assets/iconPolice.png"
import iconHospital from "../../assets/iconHospital.png"
import iconTrafficLight from "../../assets/iconTrafficLight.png"
import iconElectricPlan from "../../assets/iconElectricPlan.png"
import iconFireDept from "../../assets/iconFireDept.png"
import iconOffice from "../../assets/iconOffice.png"
import iconRHTP from "../../assets/iconRHTP.png"
import iconSchool from "../../assets/iconSchool.png"
import iconStreetLight from "../../assets/iconStreetLight.png"
import iconTransportation from "../../assets/iconTransportation.png"
import iconDefault from "../../assets/iconDefault.png"

const ChooseIcon = ({setIcon}) => {
    const Icons = [
        { name: "cctv", src: iconCCTV },
        { name: "traffic light", src: iconTrafficLight },
        { name: "street light", src: iconStreetLight },
        { name: "wifi", src: iconWifi },
        { name: "hospital", src: iconHospital },
        { name: "police", src: iconPolice },
        { name: "fire fighter", src: iconWifi },
        { name: "rhtp", src: iconRHTP },
        { name: "school", src: iconSchool },
        { name: "office", src: iconOffice },
        { name: "gardu", src: iconElectricPlan },
        { name: "transportation", src: iconTransportation },
        { name: "default", src: iconDefault },
    ]
    const choosedIcon = (src) => {
        setFileToBase(src)
    }
    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file)
    }
    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setIcon(reader.result);
        }
    }
    return (
        <div className="w-full flex-row justify-between">
            <div className="mb-4 flex flex-wrap">
                {Icons.map((icon, index) => (
                    <div className="mr-4">
                        <img
                            src={icon.src}
                            onClick={(e) => choosedIcon(icon.src)}
                            alt="" />
                    </div>
                ))}
            </div>
            <div>
                <label>Custom Icon : </label>
                <input
                    type={'file'}
                    onChange={handleImage}
                    accept="image/png, image/jpeg"
                ></input>
            </div>
        </div>
    );
}

export default ChooseIcon;