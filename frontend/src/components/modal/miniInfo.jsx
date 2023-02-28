import { useState, react } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const MiniInfo = ({ facility, category, selfPopUp }) => {
    const cat = category.filter((item)=>{
        return item.name === facility.category;
    })
    return (
        <div>
            <div className="container w-fit absolute z-50 top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <div className="bg-white shadow-xl rounded-3xl px-8 pt-6 pb-8 mb-4">
                    <div className="flex justify-end">
                        <button className="" onClick={(e) => selfPopUp(false)}>x</button>
                    </div>
                    <div className="w-60">
                        <Slide>
                            {facility.imageURL.map((imgSlide) => (
                                <img src={imgSlide} className="w-48 h-24" alt="" />
                            ))}
                        </Slide>
                    </div>
                    <h3 className="text-xl poppins font-medium">{facility.name}</h3>
                    {cat[0].atribut[0] && <p class="text-sm text-poppins mb-1">{cat[0].atribut[0]} : {facility.atribut1}</p>}
                    {cat[0].atribut[1] && <p class="text-sm text-poppins mb-1">{cat[0].atribut[1]} : {facility.atribut2}</p>}
                    {cat[0].atribut[2] && <p class="text-sm text-poppins mb-1">{cat[0].atribut[2]} : {facility.atribut3}</p>}
                    {cat[0].atribut[3] && <p class="text-sm text-poppins mb-1">{cat[0].atribut[3]} : {facility.atribut4}</p>}
                    {cat[0].atribut[4] && <p class="text-sm text-poppins mb-1">{cat[0].atribut[4]} : {facility.atribut5}</p>}
                </div>
            </div>
        </div>
    );
}

export default MiniInfo;