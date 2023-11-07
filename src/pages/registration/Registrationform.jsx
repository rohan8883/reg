import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { FcBusinessman } from 'react-icons/fc';
import { FaRegEdit } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/Bs';
import { AiFillDelete } from 'react-icons/Ai';
import { MdSpeakerNotesOff } from 'react-icons/Md';
import { AiOutlineIdcard } from 'react-icons/Ai';
import { FaUserAlt } from 'react-icons/fa';
import axios from 'axios';
import { useFormik } from 'formik';
import { FormSchema } from '../schema/FormSchema';
// import Typed from 'react-typed';
import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import Update from './Update';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
// import {Animate} from 'react-animate-css'

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50% ,-50%)",
        border: "none"
    }
}



const Registrationform = (props) => {

    const [count1, setCount1] = useState(1);
    const [modelIsopen, setIsopen] = useState(false);
    const [applicationId, setapplicationId] = useState();
    
    const card = () => {
        setCount1(1)
    }

    const table = () => {
        setCount1(2)
    }
    const [gete, setGete] = useState([]);
    const [refresh, setrefresh] = useState(0);


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
        // axios.post('http://localhost:3000/student', values)
        axios.post('https://6440bf35792fe886a8950c24.mockapi.io/mockApi', values)
            .then((resp) => {

                console.log("resp?.data", resp);
                fetchdata()
            })
            .catch((err) => console.log('getting error all data => ', err))
    }

    useEffect(() => {
        fetchdata()

    },
        [
            // refresh,
            //  gete
        ]
    )

    const fetchdata = () => {
        // axios.get("http://localhost:3000/student")
        axios.get("https://6440bf35792fe886a8950c24.mockapi.io/mockApi")
            .then((resp) => {
                setGete(resp?.data)
                console.log(resp?.data);
            })
            .catch((err) => console.log('getting error all data => ', err))
    }

    const deletedata = (id) => {

        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
        }).then((result) => {
            if (result.value) {

                // axios.delete(`http://localhost:3000/student/${id}`)
                axios.delete(`https://6440bf35792fe886a8950c24.mockapi.io/mockApi/${id}`)
                    .then(() => {
                        fetchdata()
                        // setrefresh(refresh + 1)
                        // toast.success("data deleted");
                        toast.success('data deleted !', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    })


            }

        })

        // axios.delete(`http://localhost:3000/student/${id}`)
        //     .then(() => {

        //         setrefresh(refresh+1)
        //         // toast.success("data deleted");
        //         toast.success('data deleted !', {
        //             position: "top-right",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: "colored",
        //         });
        //     })
        //     .catch((err) => console.log('delete error => ', err))
        // toast("data deleted") bg-[#8F17E0]
    }

    const openModal = () => {
        setIsopen(true); 
    }
    const closeModal = () => {
        setIsopen(false);
    }
    const afterOpenModal = () => { };
    const modalAction = (id) => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: "Yes, Update it!",
            cancelButtonText: "No, cancel!",
        }).then((result) => {
            if (result.value) {
                setapplicationId(id)
                openModal();

            }
        })





    }

    return (
        <>
            <ToastContainer />
            <div className=' bg -[#D7E8BA] h-full  w-full '>
                {/* <div className='sm1:col-span-12 sm:col-span-4 bg-gray-50 bg- [#D7E8BA] my-5 h-[750px]'>
                    <h1 className='text-lg font-semibold text-black font-serif font underline'>Sign up for free to start listening.</h1>
                    <form
                        style={{ backgroundImage: `url(${"https://i.ibb.co/TtvLGmL/Backgroundsimg.jpg"})` }}
                        onSubmit={formik.handleSubmit} onChange={formik.handleChange}
                        className='md:mx-5 md:px-5 sm1:mx-8 sm1:px-5 sm:mx-2 lg:px-10 bg-[#D4C5E2] bg-opacity-20 py-3 mt-5 rounded-xl shadow-md  bg-no-repeat bg-cover border'>


                        <p className='font-bold my-2 text-black font-sans'>Create An Account</p>

                        <div className='items-center justify-center text-center xl:mx-32 md:mx-20 sm1:hidden xl:block'><FcBusinessman className='bg-white h-12 w-12 rounded-full' /></div>
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
                </div> */}
                <div className='w-10/12 h-auto mx-auto bg-[#FFFFFF]  p-2 rounded-lg shadow-md '>
                    <div className=' overflow-auto '>

                        {/* animate__pulse */}
                        {/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}

                        <div className='flex gap-5 pt-2 w-full justify-end items-center'>
                           <div className='flex mx-5 fixed mt-3 gap-3'>
                           <div onClick={card} className='cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </div>
                            <div onClick={table} className='cursor-pointer '><AiOutlineIdcard className='text-2xl' />
                            </div>
                           </div>
                        </div>

                        {/* card section  */}

                        {count1 == 2 && (
                            <>  {gete?.length == 0 ? (

                                <>
                                    <h1 className='text-lg font-bold text-black font-sans font underline mb-2 mt-2'>List of Registered users </h1>
                                    <div className='h-full w-full pt-20 flex justify-center items-center '>
                                        <div className=' bg-[#F1EFF6] h-full w-64 border-2 border-white rounded-xl pt-20 animate__animated  animate__bounce shadow-sm shadow-black'>
                                            <div className=''><MdSpeakerNotesOff className=' text-8xl ml-20 -mt-12' /></div>
                                            <h1 class=" font-serif text-2xl font-bold text-black text-center pb-5">Sorry No Data </h1>
                                        </div>
                                    </div></>) : (
                                <>
                                    <h1 className='text-lg font-bold text-black font-sans font underline mb-2 mt-2'>List of Registered users</h1>
                                    {/* <h1 className='text-xl font-medium text-[#459C98]'>
                                    <Typed
                                        strings={[
                                            'Play millions of songs',
                                            ' and podcasts, for free.']}
                                        typeSpeed={40}
                                        backSpeed={50}

                                        loop >

                                    </Typed> */}

                                    {/* </h1> */}
                                    <div
                                        // className=' bg-blue-200 overflow-auto'
                                        className='  rounded-lg overflow-hidden  justify-evenly items-center text-center flex flex-wrap h-auto w-full'
                                    >

                                        {gete?.map((item) => (
                                            <div className='p-2 pt-3'>

                                                <div className=' bg-[#D4C5E2] bg-opacity-20 border rounded-xl hover:translate-y-1 transition ease-in-out delay-150 hover:scale-110 hover:bg- duration-300  space-y-3 text-black font- h-52 w-60  shadow-sm  shadow-black text-center'>


                                                    <div className='ml-24 pt-2'><img src="https://i.ibb.co/P6q3mK7/part-blurry-image.webp" alt="" className='h-10 w-10 rounded-full' /></div>

                                                    <div className='flex justify-center '>
                                                        <div className='mt-1 mr-2 text-gray-500 text-sm'><FaUserAlt /></div>
                                                        <div> {item.name}
                                                        </div>
                                                    </div>

                                                    <div className='flex justify-center items-baseline text-sm'>
                                                        <div className=' w-3 h-3 pt-1 mr-2'><img src="https://i.ibb.co/YRD6STN/Gmail-Logo-256px.png" alt="" /> </div>
                                                        <div className='text-[blue]'> {item.email}</div>
                                                    </div>
                                                    <div className='flex justify-center'>
                                                        <div className='text-gray-500 mt-1 mr-2 '> <BsFillTelephoneFill /> </div>
                                                        <div> {item.phone}</div>
                                                    </div>

                                                    <div className='flex justify-center mt-12 space-x-4'>
                                                        <div className='cursor-pointer'
                                                            onClick={() => modalAction(item?.id)}><FaRegEdit className='text-blue-500' /></div>
                                                        <div onClick={() => { deletedata(item?.id) }} className='text-gray-500 cursor-pointer' > <AiFillDelete className='text-red-500' /></div>
                                                    </div>


                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>)}
                            </>)}


                        {count1 == 1 && (
                            <> {gete?.length == 0 ? (
                                <>
                                    <h1 className='text-lg font-bold text-black font-sans font underline mb-2 mt-2'>List of Registered users</h1>
                                    <div className='h-full w-full pt-20 flex justify-center items-center '>
                                        <div className=' bg-[#F1EFF6] h-full w-64 border-2 border-white rounded-xl pt-20 animate__animated  animate__bounce shadow-sm shadow-black'>
                                            <div className=''><MdSpeakerNotesOff className=' text-8xl ml-20 -mt-12' /></div>
                                            <h1 class=" font-serif text-2xl font-bold text-black text-center pb-5">Sorry No Data </h1>
                                        </div>
                                    </div></>
                            ) : (

                                <>
                                    <h1 className='text-lg font-bold text-black font-sans font underline mb-2 mt-2 uppercase'>List of Registered Users</h1>

                                    <div class=" shadow-sm sm:rounded-lg mt-2">
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                                            <thead class="text-xs uppercase bg-[#818CF8] dark:bg-gray-700 text-white">
                                                <tr>
                                                    <th scope="col" class="px-3 py-3">
                                                        Sl No.
                                                    </th>
                                                    <th scope="col" class="px-2 py-3">
                                                        Full Name
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        User ID
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Phone No.
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Email
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {gete?.map((item, index) => (
                                                    <>
                                                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                                            <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {index + 1}
                                                            </th>
                                                            <td class="px-6 py-1">
                                                                {item.name}
                                                            </td>
                                                            <td class="px-6 py-1">
                                                                {item.user_id}
                                                            </td>
                                                            <td class="px-6 py-1">
                                                                {item.phone}
                                                            </td>
                                                            <td class="px-6 py-1">
                                                                {item.email}
                                                            </td>
                                                            <td class="px-6 py-1 pt-3 flex">
                                                                <button class="font-medium text-blue-600 mx-2 dark:text-blue-500 hover:underline"
                                                                    onClick={() => modalAction(item?.id)}>Edit</button>
                                                                <button class="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => { deletedata(item?.id) }}> Delete </button>
                                                            </td>
                                                        </tr>

                                                    </>
                                                ))}


                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            )}
                            </>)}




                    </div>
                </div>

            </div>
            <Modal
                isOpen={modelIsopen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
            >
                <Update applicationId={applicationId} fetchDataFun={fetchdata} closeModalFun={closeModal} />

            </Modal>
        </>
    )
}

export default Registrationform
