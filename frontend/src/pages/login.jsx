import logoKota from '../assets/lambang_kota.png';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

export const Login = () => {
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const auth = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login',{
                name: name,
                password: password
            })
            navigate.push("/mainpage")
        } catch (error) {
            if(error.response){
                console.log(error)
            }
        }
    }

    return(
        <div className="bg-white flex flex-col justify-center font-poppins h-screen">
            <form onSubmit={auth} className="max-w-[400px] w-full m-auto p-8 px-8 rounded-lg border-2">
                <img src={logoKota} className=' flex w-[50px] h-[50px] w-max mx-auto'></img>
                <div className='flex flex-col text-gray-800'>
                    <label className='flex flex-col text-black pt-4'>
                        Sign In
                    </label>
                </div>
                <div className="flex flex-col text-black py-2">
                    <label className="text-left px-2">Username</label>
                    <input className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none" type="text" id="username" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="flex flex-col text-black py-2">
                    <label className="text-left px-2">Password</label>     
                    <input className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none" type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="rounded-lg bg-slate-700 mt-4 py-2 px-5 text-white">
                    Submit
                </button>
            </form>

        </div>
    )
}