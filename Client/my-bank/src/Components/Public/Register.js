import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import RegService from "../../PublicServices/regService";
import jwt_decode from "jwt-decode";
import {Na, Navigate} from "react-router-dom";
import "./Register.css"

function Register() {
  return (
    
    <div className='register'>
      
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3 offset-sm-3'>
                <h1 className='text-center'>Account</h1>
                <Formik
                    initialValues={{ email: '', password: '' ,panNumber:'',aadhaarNumber:'',name:'',phone:'',address:''}}
                    validationSchema={yup.object({
                        email: yup.string().email('Invalid email address').required('Email is required'),
                        password: yup.string().required('Password is required'),
                        panNumber: yup.string().min(10).max(10).required('PAN is required'),
                        aadhaarNumber: yup.string().min(12).max(12).required('Aadhaar is required'),
                        phone: yup.string().min(10).max(10).required('Phone is required'),
                        address: yup.string().required('Address is required'),
                        name: yup.string().required('Name is required')
                    })}
                    onSubmit={async (values, { setSubmitting }) => {
                        
                        var service = new RegService();
                        var result = await service.register(values);
                        
                        if(!result.success){
                            alert(result.errors[0]);
                            return;
                        }
                        else{
                            window.location.href = '/auth/login';
                        }

                        // alert('Login success');
                        // localStorage.setItem('token', result.data);
                        // var decoded = jwt_decode(result.data);
                        // switch(decoded.role){
                        //     case 'bank':
                        //         window.location.href = '/admin';
                        //         // <Navigate to='/admin'/>
                        //         break;
                        //     case 'user':
                        //         window.location.href = '/userDashboard';
                        //         // <Navigate to='/admin'/>
                        //         break;
                        //     default:
                        //         window.location.href = '/';
                        //         break;
                        // }
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form className='form'>
                            <div className='fields'>
                                <label>Name</label>
                                <Field type="text" name="name" className='form-control'/>
                                <ErrorMessage name="name" component="div" className='text-danger'/>
                            </div>
                            <div className='fields'>
                                <label>Phone</label>
                                <Field type="text" name="phone" className='form-control'/>
                                <ErrorMessage name="phone" component="div" className='text-danger'/>
                            </div>
                            <div className='fields'>
                                <label>Email</label>
                                <Field type="email" name="email" className='form-control'/>
                                <ErrorMessage name="email" component="div" className='text-danger'/>
                            </div>
                            <div className='fields'>
                                <label>PAN</label>
                                <Field type="text" name="panNumber" className='form-control'/>
                                <ErrorMessage name="panNumber" component="div" className='text-danger'/>
                            </div>
                            <div className='fields'>
                                <label>Aadhaar</label>
                                <Field type="text" name="aadhaarNumber" className='form-control'/>
                                <ErrorMessage name="aadhaarNumber" component="div" className='text-danger'/>
                            </div>
                            <div className='fields'>
                                <label>Address</label>
                                <Field type="text" name="address" className='form-control'/>
                                <ErrorMessage name="address" component="div" className='text-danger'/>
                            </div>
                            <div className='fields'>
                                <label>Password</label>
                                <Field type="password" name="password" className='form-control'/>
                                <ErrorMessage name="password" component="div" className='text-danger'/>
                            </div>
                          
                            <button type="submit" className='btn btn-primary'>
                                Apply
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

export default Register