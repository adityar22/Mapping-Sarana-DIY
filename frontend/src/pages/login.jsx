
import { useState } from 'react'
import {Link} from 'react-router-dom'
import useAuthContext from '../hooks/useAuthContext'

import logoKota from '../assets/lambang_kota.png'

export const Login = () => {
    return (
        <div className="bg-white flex flex-col justify-center font-poppins top-1/2 mt-10">
            <form className="max-w-[400px] w-full m-auto p-8 px-8 rounded-lg border-2">
                <img src={logoKota} className=' flex h-48 w-auto mx-auto'></img>
                <div className="flex flex-col text-black py-2">
                    <label className="text-left px-2">Username</label>
                    <input className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none" type="text" id="username" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="flex flex-col text-black py-2">
                    <label className="text-left px-2">Password</label>
                    <input className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none" type="password" />
                </div>
                <div className="flex justify-end">
                    <button className="rounded-lg bg-lightblue mt-4 py-2 px-5 text-white">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}