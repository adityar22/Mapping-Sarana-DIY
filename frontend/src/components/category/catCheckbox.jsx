import { useState, useEffect } from "react";

const CatCheckbox = ({ category, open, setLoading, setError, checkTerm, setCheckTerm, getCheckTerm }) => {
    useEffect(()=>{
        getCheckTerm();
    },[checkTerm])
    function onChecked(event) {
        if (event.target.checked === true) {
            setCheckTerm(state => { return [...state, event.target.value] });
        }
        else if (event.target.checked === false) {
            const checked = checkTerm.filter((item) => {
                return item !== event.target.value;
            })
            setCheckTerm(checked)
        }
        getCheckTerm();
    }
    function checkAll(event) {
        if (event.target.checked === true) {
            setCheckTerm([event.target.value]);
            var check = document.querySelectorAll('.check');
            for (var i = 0; i < check.length; i++) {
                console.log(check[i].checked)
                check[i].checked = true;
            }
        } else {
            setCheckTerm([]);
            var check = document.querySelectorAll('.check');
            for (var i = 0; i < check.length; i++) {
                console.log(check[i].checked)
                check[i].checked = false;
            }
            getCheckTerm();
        }
        getCheckTerm();
    }
    function deleteChecked() {
        setCheckTerm([]);
        var check = document.querySelectorAll('.check');
        for (var i = 0; i < check.length; i++) {
            console.log(check[i].checked)
            check[i].checked = false;
        }
        getCheckTerm();
    }
    return (
        <>
            <div className={`${open ? "w-full sm:w-52 p-5 sm:pt-8" : "w-screen sm:w-0"
                }
            bg-white shadow-sm duration-300 fixed sm:relative z-10`}>
                <div lassName="flex justify-between flex-col">
                    <div className={!open ? "hidden" : "block pt3 sm:pt-6 flex-col"}>
                        <div className="mb-3">
                            <input
                                type="checkbox"
                                value="Tampilkan Semua"
                                onChange={checkAll}
                                className="check"
                            />
                            <label className="ml-1">Tampilkan Semua</label>
                        </div>
                        <div>
                            <p
                                className="mb-4 font-poppins cursor-pointer text-orange"
                                onClick={deleteChecked}
                            >
                                Hapus semua filter
                            </p>
                        </div>
                        {category && category.map((item, index) => (
                            <div className="">
                                <input
                                    type="checkbox"
                                    value={category[index].name}
                                    onChange={onChecked}
                                    className="check"
                                />
                                <label className="ml-1">{category[index].name}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatCheckbox;