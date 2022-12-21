import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import AuthService from "../../PublicServices/authService";
import jwt_decode from "jwt-decode";
import {Na, Navigate} from "react-router-dom";
import "./Login.css"

function Login() {
  return (
    <div className='login'>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3 offset-sm-3'>
                <h1 className='text-center'>Login</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={yup.object({
                        email: yup.string().email('Invalid email address').required('Email is required'),
                        password: yup.string().required('Password is required'),
                    })}
                    onSubmit={async (values, { setSubmitting }) => {
                        var service = new AuthService();
                        var result = await service.login(values);
                        
                        if(!result.success){
                            alert(result.errors[0]);
                            return;
                        }

                        // alert('Login success');
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
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form className='form'>
                            <div className='fields'>
                                <label>Email</label>
                                <Field type="email" name="email" className='form-control'/>
                                <ErrorMessage name="email" component="div" className='text-danger'/>
                            </div>
                            <div className='fields'>
                                <label>Password</label>
                                <Field type="password" name="password" className='form-control'/>
                                <ErrorMessage name="password" component="div" className='text-danger'/>
                            </div>
                          
                            <button type="submit" className='btn btn-primary'>
                                Login
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

export default Login