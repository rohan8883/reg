import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import pic from '../Components/Image/rks.png'
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const Dailog = useRef()
    const Dailog1 = useRef()
    return (
        <>
            <div className=' bg-[#818CF8] h-16 w-full '>
                <div className='flex justify-around items-center w-full h-16 '>
                    <div className=' flex justify-start items-center'>
                        {/* <h1 className='text-black text-4xl font-serif font-extrabold p-2 ml-3 '>Spotify</h1> */}
                        <div className="hidden md:block -ml-20 h-20 ">
                            <img src={pic} className='  h-20  ' alt="" />
                            {/* <svg viewBox="0 0 63 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet"><g fill-rule="evenodd" class="svelte-1gcdbl9"><path d="M61.842 9.506a1.02 1.02 0 0 1-1.023-1.024c0-.562.453-1.03 1.029-1.03a1.02 1.02 0 0 1 1.023 1.024 1.03 1.03 0 0 1-1.029 1.03m.006-1.952a.915.915 0 0 0-.922.928c0 .51.394.921.916.921a.916.916 0 0 0 .922-.927.908.908 0 0 0-.916-.922m.226 1.027l.29.406h-.244l-.26-.372h-.225v.372h-.204V7.912h.48c.249 0 .413.128.413.343 0 .176-.102.284-.25.326m-.172-.485h-.267v.34h.267c.133 0 .212-.065.212-.17 0-.11-.08-.17-.212-.17m-12.804-3.52a1.043 1.043 0 1 0-.001 2.086 1.043 1.043 0 0 0 0-2.087m.72 2.89h-1.454a.107.107 0 0 0-.106.107v6.346c0 .06.047.107.106.107h1.455a.107.107 0 0 0 .107-.107V7.572a.107.107 0 0 0-.107-.107m3.233.006v-.2c0-.592.227-.856.736-.856.303 0 .546.06.82.152a.106.106 0 0 0 .14-.102V5.24a.107.107 0 0 0-.076-.102 3.993 3.993 0 0 0-1.21-.174c-1.343 0-2.053.757-2.053 2.188v.308h-.699a.107.107 0 0 0-.107.106v1.257c0 .059.048.107.107.107h.699v4.99c0 .058.047.106.106.106h1.455a.107.107 0 0 0 .106-.107v-4.99h1.358l2.081 4.99c-.236.523-.468.628-.785.628-.257 0-.527-.077-.803-.228a.109.109 0 0 0-.084-.008.106.106 0 0 0-.063.058l-.493 1.081a.106.106 0 0 0 .045.138c.515.279.98.398 1.554.398 1.074 0 1.668-.5 2.191-1.847L60.6 7.617a.106.106 0 0 0-.099-.146h-1.514a.107.107 0 0 0-.1.072l-1.552 4.431-1.7-4.434a.106.106 0 0 0-.099-.069h-2.485m-5.577-.006h-1.6V5.828a.106.106 0 0 0-.107-.106h-1.455a.107.107 0 0 0-.106.106v1.637h-.7a.106.106 0 0 0-.106.107v1.25c0 .059.048.107.106.107h.7v3.234c0 1.308.65 1.97 1.934 1.97.522 0 .954-.107 1.362-.338a.106.106 0 0 0 .054-.093v-1.19a.106.106 0 0 0-.154-.096c-.28.141-.551.206-.854.206-.467 0-.675-.211-.675-.686V8.929h1.6a.106.106 0 0 0 .107-.107v-1.25a.106.106 0 0 0-.106-.107m-7.671-.133c-1.96 0-3.497 1.51-3.497 3.437 0 1.907 1.526 3.4 3.473 3.4 1.967 0 3.508-1.504 3.508-3.424 0-1.914-1.53-3.413-3.484-3.413m0 5.362c-1.043 0-1.83-.838-1.83-1.95 0-1.115.76-1.924 1.806-1.924 1.05 0 1.84.838 1.84 1.95 0 1.115-.763 1.924-1.816 1.924m-7.014-5.362c-.82 0-1.492.323-2.046.984v-.744a.107.107 0 0 0-.106-.107h-1.455a.107.107 0 0 0-.106.107v8.27c0 .058.048.106.106.106h1.455a.107.107 0 0 0 .106-.106v-2.61c.555.621 1.227.925 2.046.925 1.522 0 3.063-1.172 3.063-3.412s-1.54-3.413-3.063-3.413m1.372 3.413c0 1.14-.703 1.937-1.709 1.937-.995 0-1.745-.833-1.745-1.937s.75-1.937 1.745-1.937c.99 0 1.71.814 1.71 1.937m-8.437-1.81c-1.624-.388-1.913-.66-1.913-1.231 0-.54.508-.903 1.264-.903.732 0 1.459.275 2.22.843a.107.107 0 0 0 .15-.023l.794-1.119a.107.107 0 0 0-.02-.144c-.906-.728-1.927-1.081-3.12-1.081-1.755 0-2.98 1.052-2.98 2.559 0 1.615 1.057 2.187 2.884 2.628 1.554.358 1.817.658 1.817 1.195 0 .594-.53.963-1.385.963-.948 0-1.721-.32-2.587-1.068a.11.11 0 0 0-.078-.026.105.105 0 0 0-.073.038l-.89 1.058a.105.105 0 0 0 .011.148 5.303 5.303 0 0 0 3.581 1.373c1.89 0 3.112-1.033 3.112-2.631 0-1.351-.807-2.098-2.787-2.58M9.507.305a9.41 9.41 0 1 0 0 18.82 9.41 9.41 0 0 0 0-18.82m4.316 13.572a.586.586 0 0 1-.807.195c-2.21-1.35-4.99-1.655-8.266-.907a.586.586 0 1 1-.261-1.143c3.584-.82 6.659-.467 9.139 1.049.276.169.363.53.195.806m1.15-2.562a.734.734 0 0 1-1.008.242c-2.529-1.555-6.385-2.005-9.377-1.097a.735.735 0 0 1-.426-1.404c3.418-1.037 7.666-.534 10.57 1.25a.734.734 0 0 1 .242 1.01m.1-2.669C12.04 6.846 7.036 6.68 4.141 7.56a.88.88 0 1 1-.511-1.684c3.323-1.01 8.849-.814 12.34 1.258a.88.88 0 0 1-.898 1.514" ></path></g></svg> */}
                        </div>
                    </div >
                    <div className='flex justify-end items-center mx-3 gap-3   font-serif '>
                        <div className='flex gap-4'>
                            <Link to="/"> <h1 className='text-white  cursor-pointer '>Home</h1></Link>
                            <Link to="/Registrationform"> <h1 className='text-white   cursor-pointer '>Users </h1></Link>
                            <div className='text-white flex gap-3 cursor-pointer '>
                                <h1 className='hidden md:block '>Contacts</h1>
                                <h1 className='hidden md:block '>About us</h1>
                                <h1 className='hidden md:block  '>Gallery</h1>
                            </div>

                        </div>
                    </div>
                    <div className=' flex items-center  gap-2 '>

                        <Link to='/'>
                            <button className='rounded-md  bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1.5 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out font-serif' onClick={(() => { Dailog.current.showModal() })}>Log in</button>
                        </Link>
                        <Link to='/HandleForm'>
                            <button className='rounded-md  bg-amber-500 hover:bg-amber-600 text-white text-sm px-4 py-1.5 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out font-serif'>Sign Up</button>
                        </Link>
                    </div>

                </div>
            </div>
            <dialog ref={Dailog1} className='bg-[#FFFFFF] border rounded-lg opacity-90'>
             <>
             </>   

            </dialog>

            <dialog ref={Dailog} className='bg-[#FFFFFF] border rounded-lg opacity-90'>
                <>
                    <span onClick={() => { Dailog.current.close() }} className=" p-1 bg-red-100 hover:bg-red-500 rounded-full hover:text-white cursor-pointer transition-all duration-200 absolute top-2 right-2"><RxCross2 /></span>
                    <section className='grid grid-cols-2 '>
                        <div className=' flex justify-start items-center'>
                            <img src="https://i.ibb.co/6ZsYKBx/Whats-App-Image-2023-04-15-at-10-08-43-AM-1.jpg" alt="" className='  ' />
                        </div>
                        <div className=''>
                            <div className='flex flex-col items-center justify-center  w-full'>
                                <img src="https://i.ibb.co/y6Kh5Qk/Whats-App-Image-2023-04-15-at-10-08-43-AM.jpg" alt="" className='w-11' />
                                <p className=' font-bold text-xl text-blue-700 '>Login</p>
                            </div>

                            <div>
                                <label htmlFor="" className='sm1:text-sm sm:text-base sm:font-semibold text-blue-600 space-y-2 ml-3'>Email</label> <br />
                                <input type="text" placeholder='Email..' className='mt-3 w-3/4 ml-3  outline-none border-b-2 border-[#D5D5D5] sm1:text-sm sm:text-base' />
                            </div>
                            <div className=''>
                                <label htmlFor="" className='sm1:text-sm sm:text-base sm:font-semibold text-blue-600 ml-3'>Password</label> <br />
                                <input type="password" placeholder='Password..' className='ml-3 mt-3 w-3/4 outline-none border-b-2 border-[#D5D5D5] mb-3 sm1:text-sm sm:text-base' />
                            </div>
                            <div className='text-center ml-10 -mt-4 pb-2'>
                                <Link to="/" className='underline text-blue-700  tracking-tighter text-xs' >click here to register</Link>
                            </div>
                            <div className='w-full text-center items-center flex justify-center'>
                                <Link to="/"><button className=' rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out' onClick={(() => { Dailog.current.close() })}>submit</button></Link>
                            </div>
                        </div>

                    </section>
                </>

            </dialog>
        </>
    )
}

export default Navbar
