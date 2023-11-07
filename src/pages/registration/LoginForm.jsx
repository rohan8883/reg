import React from 'react'
import { Link } from 'react-router-dom'


const LoginForm = () => {

  return (
    // bg-[#FFFFFF]
    <div className='h-screen mx-auto bg-gray-100 pt-20 w-full'>
      <div className=' h-auto sm:w-1/2 mx-auto  px-2 md:py-10'>
        <div className=' sm:px-20'>
          <div className=' rounded-xl shadow-md  bg-[#FFFFFF] py-4' >
            <section className='grid grid-cols-2 '>
              <div className=' flex justify-start items-center'>
                <img src="https://i.ibb.co/6ZsYKBx/Whats-App-Image-2023-04-15-at-10-08-43-AM-1.jpg" alt="" className='' />
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
                  <Link to ="/" className='underline text-blue-700  tracking-tighter text-xs'>click here to register</Link>
                </div>
                <div className='w-full text-center items-center flex justify-center'>
                  <Link to="/"><button className=' rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1.5 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out'>submit</button></Link>
                </div>
              </div>

            </section>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
