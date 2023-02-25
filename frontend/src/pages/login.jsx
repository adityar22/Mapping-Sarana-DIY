import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuthContext from '../hooks/useAuthContext'
import { useDisplayContext } from '../hooks/useDisplayContext'
import { useLogin } from '../hooks/useLogin'

import logoKota from '../assets/lambang_kota.png'

export const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { notify, isPending, error, setLoading, setError } = useDisplayContext();
    const { login } = useLogin({ setError, setLoading });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await login(name, password);
        if (!response.isError) {
            notify.info(response.message);
            setLoading(false);
        }
        else {
            notify.error(response.message);
            setLoading(false);
        }
          
    }
    setLoading(false);

    return (
        <div className=" flex flex-col justify-center font-poppins top-1/2 h-screen bg-white ">
            <form className=" max-w-sm sm:max-w-[400px] sm:w-screen mx-auto p-8 px-8 rounded-lg border-2" onSubmit={handleSubmit}>
                <img src={logoKota} className=' flex h-36 w-auto mx-auto'></img>
                <div className="flex flex-col text-black py-2">
                    {name != "" && <label className="text-left px-2">Username</label>}
                    <input
                        className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none"
                        type="text"
                        placeholder="username here..."
                        id="username"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex flex-col text-black py-2">
                    {password != "" && <label className="text-left px-2">Password</label>}
                    <input
                        className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none"
                        type="password"
                        placeholder="password here..."
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="flex justify-center">
                    <button
                        className="rounded-lg bg-lightblue mt-4 py-2 px-5 text-white"
                    >
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
    }