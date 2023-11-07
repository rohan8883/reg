import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { FormSchema } from '../schema/FormSchema';
import { useState } from 'react';
import { FcBusinessman } from 'react-icons/fc';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';



const Update = (props) => {
    const [editdata, setEditData] = useState([]);



    console.log("id passed through props", props?.applicationId)
    const formik = useFormik({


        initialValues: {
            name: editdata?.name,
            surname: editdata?.surname,
            user_id: editdata?.user_id,
            phone: editdata?.phone,
            email: editdata?.email,
 

        }, enableReinitialize: true,

        onSubmit: (values, Action) => {
            // handleSubmit(values);
            // Action.resetForm()
            // alert(JSON.stringify(values, null, 2));
            Swal.fire({
                icon: "warning",
                title: "Are you sure?",
                text: "You want to update it!",
                showCancelButton: true,
                confirmButtonText: "Yes, update it!",
                cancelButtonText: "No, cancel!",
              }).then((result) => {
                if (result.value) {
                    handleSubmit(values);
                    toast.success('data Updated !', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
                
              })



          

        }, validationSchema: FormSchema,
    });


    useEffect(() => {

        fetchdata1()

    }, [])

    const fetchdata1 = () => {
        // axios.get(`http://localhost:3000/student/${props?.applicationId}`)
        axios.get(`https://6440bf35792fe886a8950c24.mockapi.io/mockApi/${props?.applicationId}`)
            .then((res) => {
                console.log('getting data => ', res)
                setEditData(res?.data)

            })
            .catch((err) => {
                console.log('Error getting data =>', err)

            })
    }

    console.log("closeModal fun", props?.closeModalfun)

    const handleSubmit = values => {
      

        //   const response = axios.put(`http://localhost:3000/student/${props?.applicationId}`, values)
          const response = axios.put(`https://6440bf35792fe886a8950c24.mockapi.io/mockApi/${props?.applicationId}`, values)
          .then((res)=>{
console.log("update data",res);
props?.fetchDataFun();
          })
         
          props?.closeModalFun();
          console.log(response);
          console.log(values);

       

    };

    return (
        <div>

            <div>
                <form
                    // style={{ backgroundImage: `url(${"https://i.ibb.co/TtvLGmL/Backgroundsimg.jpg"})` }}
                    onSubmit={formik.handleSubmit} onChange={formik.handleChange}
                    className='md:mx-5 md:px-5 sm1:mx-8 sm1:px-5 sm:mx-2 lg:px-16 border bg-[#FFFFFF] bg-opacity-40 py-3  rounded-xl shadow-md  '>
                    <div className=' text-center '><p className='font-bold my-2 text-black font-sans'>Update An Account</p></div>



                    <div className='items-center justify-center text-center xl:mx-32 md:mx-20 sm1:hidden xl:block'><FcBusinessman className='h-12 w-12 ' /></div>


                    <div><input type="text"
                        className='outline-none w-full mt-2 h-8 bg-white pl-5  border-1 rounded-md border-gray-500 text-sm'
                        placeholder='Name..'
                        name='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    />
                        <br /> {formik.errors.name && formik.touched.name
                            ? (<span className='text-red-500 ml-3 font-medium text-sm '>{formik.errors.name}</span>)
                            : null}
                    </div>
                    <div><input type="text"
                        name='surname'
                        value={formik.values.surname}
                        onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
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
                        // onBlur={formik.handleBlur}
                        className='outline-none w-full h-8 bg-white pl-5 mt-2 border-1 rounded-md border-gray-500 text-sm'
                        placeholder='User ID..'
                    />
                        <br /> {formik.errors.user_id && formik.touched.user_id
                            ? (<span className='text-red-500 ml-3 font-medium text-sm '>{formik.errors.user_id}</span>)
                            : null}
                    </div>
                    <div><input type="text"
                        name='phone'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
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
                    // onBlur={formik.handleBlur}
                    />
                        <br /> {formik.errors.email
                            && formik.touched.email
                            ? (<span className='text-red-500 ml-3 font-medium text-sm '>{formik.errors.email}</span>)
                            : null}
                    </div>



                    <div className='text-center'>
                        <div><button type='submit' className='rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1.5 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out mt-2'>Update</button></div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Update
