import { useState } from "react";
import { useFacilityContext } from "../../hooks/useFacilityContext";
import { useHandleDelete } from "../../hooks/useFacilityHandleDelete";
import { useFacilityHandleEdit } from "../../hooks/useFacilityHandleEdit";

import ModalDelete from "../../components/modal/ModalDelete";
import ModalEdit from "../../components/modal/editFacility";

import Edit from "../../assets/edit.png";
import Delete from "../../assets/delete.png";

const FacilityCard = ({ facility, category, url, setLoading, setError, notify }) => {
    const { dispatch } = useFacilityContext();

    const cat = category.filter((item)=>{
        return item.name == facility.category;
    })

    const [deleteModal, setDeleteModal] = useState(false)
    const toggleDelete = (e) => {
        setDeleteModal(!deleteModal);
    }
    const [editModal, seteditModal] = useState(false)
    const toggleEdit = () => {
        seteditModal(!editModal);
    }

    const { remove: handleRemove } = useHandleDelete({ url: 'http://localhost:3100/api/mapping/', data: facility, type: 'DELETE_FACILITIES', dispatch, setLoading, setError, closePopup: toggleDelete, notify });
    return (
        <>
            <div class="flex justify-between py-2 px-2 lg:py-[6px] lg:px-[6px] bg-blue mb-2 rounded-2xl">
                <div className="justify-start lg:flex-row inline-flex items-center">
                    <img
                        class=" object-cover w-84 h-44 lg:w-64 sm:h-36 rounded-xl"
                        src={facility.imageURL[0]}
                        alt=""
                    />
                    <div class="justify-content-start px-8 py-2 flex flex-col ">
                        <h3 class="text-white text-xl font-poppins font-semibold mb-3">{facility.name}</h3>
                        <p class="text-white text-sm text-poppins font-medium mb-1"> Koordinat : lat: {facility.coordinat[0]} lng: {facility.coordinat[1]}</p>
                        {cat[0].atribut[0] && <p class="text-white text-sm text-poppins font-medium mb-1">{cat[0].atribut[0]} : {facility.atribut1}</p>}
                        {cat[0].atribut[1] && <p class="text-white text-sm text-poppins font-medium mb-1">{cat[0].atribut[1]} : {facility.atribut2}</p>}
                        {cat[0].atribut[2] && <p class="text-white text-sm text-poppins font-medium mb-1">{cat[0].atribut[2]} : {facility.atribut3}</p>}
                        {cat[0].atribut[3] && <p class="text-white text-sm text-poppins font-medium mb-1">{cat[0].atribut[3]} : {facility.atribut4}</p>}
                        {cat[0].atribut[4] && <p class="text-white text-sm text-poppins font-medium mb-1">{cat[0].atribut[4]} : {facility.atribut5}</p>}
                    </div>
                </div>

                <div className="flex justify-between l:flex-row mx-2">
                    <div className="inline-block cursor pointer flex" onClick={toggleEdit}>
                        <img src={Edit} className={`w-8 h-8`} alt=""></img>
                    </div>
                    <div className="inline-block ml-2 cursor pointer flex" onClick={toggleDelete}>
                        <img src={Delete} className={`w-8 h-8`} alt=""></img>
                    </div>
                </div>
            </div>
            {deleteModal && <ModalDelete handleDelete={handleRemove} togglePopup={toggleDelete}  />}
            {editModal && <ModalEdit facility={facility} url={url} category={cat} togglePopup={toggleEdit} setLoading={setLoading} setError={setError} />}
        </>
    );
}

export default FacilityCard;