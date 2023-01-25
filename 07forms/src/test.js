import React from "react";

import {  Formik } from 'formik'


const app = () => {
    
    return (
        <Formik
            initialValues={{
                 firstname:'',
            }}
            onSubmit={() => {
                console.log('test')
            }}
        >
            {({
                values,
                handleChange,
                handleSubmit
            }) => (
                <>
                <form onSubmit={handleSubmit}>
                <div className="col-md-6 mb-3">
                    <label htmlFor="lastname">Last name</label>
                   <input type="text"
                className="form-control"
                                id="firstname" name="lastname"
                                value={values.firstname}
                onChange={handleChange}            />
                </div>
                </form>
                </>
            )}
            
        </Formik>
    )
}