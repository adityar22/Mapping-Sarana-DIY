import { useState} from "react";

const CatCheckbox = ({ category, open, setLoading, setError, checkTerm, setCheckTerm, getCheckTerm }) => {
    function onChecked(event){
        console.log(event.target.value)
        if(event.target.checked == true){
            setCheckTerm(state => [...state, event.target.value])
        }
        else{
            const checked = checkTerm.map((item)=>{
                return item !== event.target.value;
            })
            setCheckTerm(checked)
        }
        getCheckTerm();
    }
    return (
        <>
            <div className={`${open ? "w-full sm:w-52 p-5 sm:pt-8" : "w-screen sm:w-0"
                }
            bg-white shadow-sm duration-300 fixed sm:relative z-40`}>
                <div lassName="flex justify-between flex-col">
                    <div className={!open ? "hidden" : "block pt3 sm:pt-6 flex-col"}>
                        <div className="mb-3">
                            <input
                                type="checkbox"
                                value="All category"
                                onChange={onChecked}
                            />
                            <label className="ml-1">Tampilkan Semua</label>
                        </div>
                        {category && category.map((item, index) => (
                            <div className="">
                                <input
                                    type="checkbox"
                                    value={category[index].name}
                                    onChange={onChecked}
                                />
                                <label className="ml-1">{category[index].name}</label>
                            </div>
                        ))}
                        <div>
                            <p className="mt-4 font-poppins cursor-pointer text-orange">Hapus semua filter</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatCheckbox;