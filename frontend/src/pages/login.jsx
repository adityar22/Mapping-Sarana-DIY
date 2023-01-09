import logoKota from '../assets/lambang_kota.png'

export const Login = () => {
    return(
        <div className="bg-white flex flex-col justify-center font-poppins h-screen">
            <form className="max-w-[400px] w-full m-auto p-8 px-8 rounded-lg border-2">
                <img src={logoKota} className=' flex w-[50px] w-max mx-auto'></img>
                <div className='flex flex-col text-gray-800'>
                    <label className='flex flex-col text-black pt-4'>
                        Sign In
                    </label>
                </div>
                <div className="flex flex-col text-black py-2">
                    <label className="text-left px-2">Username</label>
                    <input className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none" type="text" />
                </div>
                <div className="flex flex-col text-black py-2">
                    <label className="text-left px-2">Password</label>     
                    <input className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none" type="password" />
                </div>
                <button className="rounded-lg bg-gray-800 mt-4 py-2 px-5 text-white">
                    Submit
                </button>
            </form>

        </div>
    )
}