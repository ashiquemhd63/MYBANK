import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import {profileEdit} from "../../AdminServices/adminProfileEditService";
import { getProfileData } from '../../AdminServices/adminProfileEditService'
import jwt_decode from "jwt-decode";
import {Na, Navigate} from "react-router-dom";
import {useState, useEffect} from 'react'
import "./AdminProfileEdit.css"

function AdminProfileEdit() {
    const [profile, setProfile] = useState('');

    useEffect(() => {
        getProfileData().then((data) => {
            setProfile(data.data);
        });
    }, []);
  return (
    <div className='adminprofileedit'>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3 offset-sm-3'>
                <h1 className='text-center'>Update</h1>
                <Formik
                    initialValues={{ email: '', password: '',phone:'' }}
                    validationSchema={yup.object({
                        email: yup.string().email('Invalid email address').required('Email is required'),
                        password: yup.string().required('Password is required'),
                        phone: yup.string().required('Phone number is required')
                    })}
                    onSubmit={async (values, { setSubmitting }) => {
                        var result = await profileEdit(values);
                        console.log(result);
                        
                        if(!result.success){
                            alert(result.errors[0]);
                            return;
                        }

                        // alert('Login success');
        
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form className='form'>
                            <div className='fields'>
                                <label>Email</label>
                                <Field type="email" name="email" value={profile.email} className='form-control'/>
                                <ErrorMessage name="email" component="div" className='text-danger'/>
                            </div>
                            <div className='fields'>
                                <label>Phone</label>
                                <Field type="text" name="phone" value={profile.phone}  className='form-control'/>
                                <ErrorMessage name="phone" component="div" className='text-danger'/>
                            </div>
                            <div className='fields'>
                                <label>Password</label>
                                <Field type="password" name="password" value={profile.password} className='form-control'/>
                                <ErrorMessage name="password" component="div" className='text-danger'/>
                            </div>
                          
                            <button type="submit" className='btn btn-primary'>
                                Update
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

export default AdminProfileEdit