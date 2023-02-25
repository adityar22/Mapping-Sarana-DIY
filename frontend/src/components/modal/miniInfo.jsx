import { useState, react } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const MiniInfo = ({ facility, selfPopUp }) => {
    console.log(facility)
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '64px',
        width: '144px',
    }
    return (
        <div>
            <div className="container w-fit mx-auto absolute z-50 top-1/4 right-0 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <div className="bg-white shadow-xl rounded-3xl px-8 pt-6 pb-8 mb-4">
                    <Slide>
                        {facility[0].imageURL.map((slideImage, index) => (
                            <div
                                key={index}
                                style={{ ...divStyle, 'backgroundImage': `url(${slideImage})` }}
                            >
                            </div>
                        ))}
                    </Slide>
                    <h3>{facility[0].name}</h3>
                </div>
            </div>
        </div>
    );
}

export default MiniInfo;