import { useState } from "react";
import { useFacilityContext } from ".../hooks/useFacilityContext"

const MiniInfo = ({ facility, category, selfPopUp }) => {
    return (
        <div>

            <div className="container w-fit mx-auto absolute z-50 top-1/2 right-3/4 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <div>
                    <img alt=""></img>
                    <h3>{facility.name}</h3>
                    {category.atribut && category.atribut.map((item)=(
                        <div>
                            <label>{item} :</label>
                        </div>
                    ))}                  
                </div>
            </div>
        </div>
    );
}

export default MiniInfo;