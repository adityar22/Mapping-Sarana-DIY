import React from "react";

const ModalDelete = ({handleDelete, togglePopup }) => {
    return (
        <div>
            <div className="overlay z-20"></div>
            <div className="mx-auto absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
            <div className="w-fit max-w-2xl mx-8 bg-lightblue shadow-xl rounded-2xl px-8 pt-6 pb-8 mb-4"> 
            <h3 className="font-poppins font-semibold text-white">Yakin ingin menghapus data Lokasi?</h3>
            <div className="flex justify-center mt-4">
                        <div className="inline-block mr-3">
                            <button
                                className="bg-white hover:bg-gray-100 mr-3 text-orange font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
                                onClick={togglePopup}>
                                Tidak
                            </button>
                        </div>
                        <div className="inline-block mr-3">
                            <button
                                className="bg-orange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
                                onClick={handleDelete}>
                                Yakin Hapus
                            </button>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default ModalDelete;