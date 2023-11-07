import React from 'react'
// import { FaUserAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { FormSchema } from '../schema/FormSchema';
import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const HandleForm = () => {
    
  const navigate = useNavigate()  
    const formik = useFormik({

        initialValues: {
            name: '',
            surname: '',
            user_id: '',
            phone: '',
            email: '',
            pass: '',
            rpass: '',


        },

        onSubmit: (values, Action) => {
            // Handle form submission
           
            // alert(JSON.stringify(values, null, 2));
            Swal.fire({
                icon: "warning",
                title: "Are you sure?",
                showCancelButton: true,
                confirmButtonText: "Yes, add it!",
                cancelButtonText: "No, cancel!",
              }).then((result) => {
                if (result.value) {
                    submitForm(values);
                    navigate("/Registrationform")
                    toast.success('data added !', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    Action.resetForm()
                }
                
              })
           
            

          
        }, validationSchema: FormSchema,
    });

    const submitForm = (values) => {
        // axios.post("https://marriage-ui-default-rtdb.asia-southeast1.firebasedatabase.app/students", values)
        axios.post("https://6440bf35792fe886a8950c24.mockapi.io/mockApi", values)
            .then((resp) => {
               
                console.log("resp?.data", resp);
                // fetchdata()
            })
            .catch((err) => console.log('getting error all data => ', err))
    }

  return (
   <div className='bg-[#BC86F5] w-full h-screen  flex-1 justify-center  items-center'>
   <div className='sm:w-1/2 mx-auto pt-2'>
      <h1 className='text-lg font-semibold text-black font-serif font underline text-center uppercase'>Sign up for Registered your self.</h1>
                    <form
                        style={{ backgroundImage: `url(${"https://i.ibb.co/TtvLGmL/Backgroundsimg.jpg"})` }}
                        onSubmit={formik.handleSubmit} onChange={formik.handleChange}
                        className='md:mx-5 md:px-5 sm1:mx-8 sm1:px-5 sm:mx-2 lg:px-10 bg-[#D4C5E2] bg-opacity-20 py-3 mt-5 rounded-xl shadow-md  bg-no-repeat bg-cover border'>


                        <p className='font-bold my-2 text-black font-sans'>Create An Account</p>

                        <div className='items-center justify-center text-center xl:mx-32 md:mx-20 sm1:hidden xl:block'>
                            {/* <FcBusinessman className='bg-white h-12 w-12 rounded-full' /> */}
                            </div>
                        <p className='font-semibold my-2'>Sign up to continue...</p>
                        <div><input type="text"
                            className='outline-none w-full h-8 bg-white pl-5  border-1 rounded-md border-gray-500 text-sm'
                            placeholder='Name..'
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                            <br /> {formik.errors.name && formik.touched.name
                                ? (<span className='text-red-500 ml-3 font-medium text-sm '>{formik.errors.name}</span>)
                                : null}
                        </div>
                        <div><input type="text"
                            name='surname'
                            value={formik.values.surname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='outline-none w-full h-8 bg-white pl-5 border-1 mt-2 rounded-md border-gray-500 text-sm'
                            placeholder='Surname..'
                        />
                            <br /> {formik.errors.surname && formik.touched.surname
                                ? (<span className='text-red-500 ml-3 font-medium text-sm '>{formik.errors.surname}</span>)
                                : null}
                        </div>
                        <div><input type="text"
                            name='user_id'
                            value={formik.values.user_id}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='outline-none w-full h-8 bg-white pl-5 mt-2 border-1 rounded-md border-gray-500 text-sm'
                            placeholder='User ID..'
                        />
                            <br /> {formik.errors.user_id && formik.touched.user_id
                                ? (<span className='text-red-500 ml-3 font-medium text-sm '>{formik.errors.user_id}</span>)
                                : null}
                        </div>
                        <div><input type="text"
                            name='phone'
                            // maxLength={10}
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='outline-none w-full h-8 bg-white pl-5 border-1 mt-2 rounded-md border-gray-500 text-sm'
                            placeholder='Phone No..'
                        />
                            <br /> {formik.errors.phone && formik.touched.phone
                                ? (<span className='text-red-500 ml-3 font-medium text-sm '>{formik.errors.phone}</span>)
                                : null}
                        </div>

                        <div><input type="email"
                            className='outline-none w-full h-8 bg-white pl-5 mt-2 border-1 rounded-md border-gray-500 text-sm'
                            placeholder='Email..'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                            <br /> {formik.errors.email
                                && formik.touched.email
                                ? (<span className='text-red-500 ml-3 font-medium text-sm '>{formik.errors.email}</span>)
                                : null}
                        </div><div><input type="password"
                            className='w-full h-8 bg-white outline-none pl-5 mt-2 border-1 rounded-md border-gray-500 text-sm'
                            placeholder='Password..'
                            name='pass'
                            value={formik.values.pass}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                            <br /> {formik.errors.pass
                                && formik.touched.pass
                                ? (<span className='text-red-500 ml-3 font-medium text-sm '>{formik.errors.pass}</span>)
                                : null}
                        </div>
                        <div><input type="password"
                            className='outline-none w-full h-8 bg-white pl-5 border-1 rounded-md mt-2 border-gray-500 text-sm'
                            placeholder='Retype Password..'
                            name='rpass'
                            value={formik.values.rpass}
                            onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                            <br /> {formik.errors.rpass && formik.touched.rpass
                                ? (<span className='  text-red-500 ml-3 font-medium text-sm '>{formik.errors.rpass}</span>)
                                : null}
                        </div>


                        <div className='text-center'>
                            <div><button type='submit' className='rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1.5 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out mt-2' >submit</button></div>
                        </div>
                    </form>
    </div>
    </div>
  )
}

export default HandleForm
