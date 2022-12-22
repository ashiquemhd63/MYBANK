import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import OtpService from "../../PublicServices/otpService";
import jwt_decode from "jwt-decode";
import {Na, Navigate} from "react-router-dom";
import "./Otp.css"

function Otp() {
  return (
    <div className='otp'>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3 offset-sm-3'>
                <h1 className='text-center'>OTP</h1>
                <Formik
                    initialValues={{ otp:''}}
                    validationSchema={yup.object({
                        otp: yup.string().required('Otp is required'),
                        
                    })}
                    onSubmit={async (values, { setSubmitting }) => {
                        console.log(localStorage.getItem('userid'))
                        var service = new OtpService();
                        var result = await service.otp(localStorage.getItem('userid'),values);
if(result.success) {
         localStorage.setItem('token', result.data);
                        var decoded = jwt_decode(result.data);
                        switch(decoded.role){
                            case 'admin':
                                window.location.href = '/admin';
                                // <Navigate to='/admin'/>
                                break;
                            case 'user':
                                window.location.href = '/userDashboard';
                                // <Navigate to='/admin'/>
                                break;
                            default:
                                window.location.href = '/';
                                break;
                        }

}
else{
    alert('Wrong otp')
}
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form className='form'>
                            <div className='fields'>
                                <label>Please enter OTP</label>
                                <Field type="otp" name="otp" className='form-control'/>
                                <ErrorMessage name="otp" component="div" className='text-danger'/>
                            </div>
                            
                            <button type="submit" className='btn btn-primary'>
                                Submit
                            </button>
                            
                        </Form>
                    )}
                    </Formik>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Otp