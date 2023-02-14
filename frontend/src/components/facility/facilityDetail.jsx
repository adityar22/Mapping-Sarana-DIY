const FacilityDetail = ({ facility, category, closePopup }) => {
    return (
        <>
            <div className="overlay z-20"></div>
            <div className="flex justify-between container w-fit mx-auto absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <div className="flex flex-col justify-start inline-flex">
                    <img
                        class=" object-cover w-84 h-full lg:w-64 sm:h-full rounded-xl"
                        src={facility.imageURL}
                        alt=""
                    />
                    <div class="justify-content-start px-8 py-2 flex flex-col ">
                        <h3 class="text-orange text-3xl font-poppins font-semibold mb-3">{facility.name}</h3>
                        <p class="text-black text-xl text-poppins font-medium mb-1"> Koordinat : lat: {facility.coordinat[0]} lng: {facility.coordinat[1]}</p>
                        {category[0].atribut[0] && <p class="text-black text-xl text-poppins font-medium mb-1">{category[0].atribut[0]} : {facility.atribut1}</p>}
                        {category[0].atribut[1] && <p class="text-black text-xl text-poppins font-medium mb-1">{category[0].atribut[1]} : {facility.atribut2}</p>}
                        {category[0].atribut[2] && <p class="text-black text-xl text-poppins font-medium mb-1">{category[0].atribut[2]} : {facility.atribut3}</p>}
                        {category[0].atribut[3] && <p class="text-black text-xl text-poppins font-medium mb-1">{category[0].atribut[3]} : {facility.atribut4}</p>}
                        {category[0].atribut[4] && <p class="text-black text-xl text-poppins font-medium mb-1">{category[0].atribut[4]} : {facility.atribut5}</p>}
                    </div>
                </div>
                <div className="flex justify-between l:flex-row mx-2">
                    <div className="inline-block cursor pointer flex" onClick={closePopup}>
                        <span>x</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FacilityDetail;