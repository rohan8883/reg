import * as Yup from 'yup';

export const FormSchema = Yup.object({
    name: Yup.string().min(3, 'Too Short').max(20, 'Too Long').required('name is required'),
    surname: Yup.string().min(3, 'Too Short').max(20, 'Too Long').required('surname  is required'),
    user_id: Yup.string().min(3, 'Too Short').max(20, 'Too Long').required(' user id is required'),
    phone: Yup.string().min(1, 'Too Short').max(10, 'Too Long').required("Enter phone no."),
    email: Yup.string().email('Invalid Email').required('Email Is required'),
    // pass: Yup.string().required("Password Is required")
    //     .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Enter Strong Password"),
    // rpass: Yup.string()
    //     .required("Confirm Password Is required")
    //     .oneOf([Yup.ref('pass'), null], "Both Passwords Must Match"),
        // checkbox: Yup.string().required('checkbox  is required'),
    
});