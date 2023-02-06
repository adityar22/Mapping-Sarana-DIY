import { useState } from "react";
import { useFacilityContext } from ".../hooks/useFacilityContext"

const MiniInfo = ({ facility, category, selfPopUp }) => {
    return (
        <div>
            <div className="container">
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