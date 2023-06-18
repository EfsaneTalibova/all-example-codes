import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from './Schemas';
import "./Form.css"
const Form = () => {
    const onSubmit = ()=>{
        console.log("submitted");
    }
    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword:''
        },
        validationSchema:basicSchema,
        onSubmit,
    });
    console.log(errors)
    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <label htmlFor="email">Email</label>
                <input
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    type="email"
                    placeholder='Enter your email'
                    onBlur={handleBlur}
                    className={errors.email&&touched.email?"input_error":""}
                />
                {errors.email&&touched.email&& <p className='error'>{errors.email}</p>}
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    placeholder='Enter your age'
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.age&&touched.age?"input_error":""}
                />
                {errors.age&&touched.age&& <p className='error'>{errors.age}</p>}
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder='Enter your password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password&&touched.password?"input_error":""}
                />
                {errors.password&&touched.password&& <p className='error'>{errors.password}</p>}
                <label htmlFor="confirmPassword">Password</label>
                <input
                    id="confirmPassword"
                    type="password"
                    placeholder='Enter your confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.confirmPassword&&touched.confirmPassword?"input_error":""}
                />
                {errors.confirmPassword&&touched.confirmPassword&& <p className='error'>{errors.confirmPassword}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form