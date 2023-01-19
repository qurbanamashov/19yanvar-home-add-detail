import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
function Add() {
  return (
<Formik
       initialValues={{ name: '', price: '', src: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(20, 'Must be 15 characters or less')
           .required('Required'),
         price: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         src:  Yup.string()
         .max(1000, 'Must be 20 characters or less')
         .required('Required'),
       })}
       onSubmit={(values) => {
        axios.post('http://localhost:2003/products', values)
       }}
     >
       <Form>
         <label htmlFor="name">First Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">Last Name</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
         <label htmlFor="src">src Address</label>
         <Field name="src" type="text" />
         <ErrorMessage name="src" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
  )
}

export default Add

