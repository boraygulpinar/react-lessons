import React from 'react'
import { useFormik } from 'formik';
import { RegisterFormSchemas } from '../schemas/RegisterFormSchemas';


function RegisterForm() {

    const submit = (values, action) => {
        console.log(values)
        console.log(action)
    }

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: ''
        },
        validationSchema: RegisterFormSchemas,
        onSubmit: submit
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='input-div'>
                    <label >Email</label>
                    <input type="text" name="" id="email" placeholder='Email giriniz...' value={values.email} onChange={handleChange} />
                    {errors.email && <p className='input-error'>{errors.email}</p>}
                </div>

                <div className='input-div'>
                    <label >Yaş</label>
                    <input type="number" name="" id="age" placeholder='Yaşınızı giriniz...' value={values.age} onChange={handleChange} />
                </div>
                {errors.age && <p className='input-error'>{errors.age}</p>}

                <div className='input-div'>
                    <label >Şifre</label>
                    <input type="password" name="" id="password" placeholder='Şifrenizi giriniz...' value={values.password} onChange={handleChange} />
                    {errors.password && <p className='input-error'>{errors.password}</p>}
                </div>

                <div className='input-div'>
                    <label >Şifre tekrarı</label>
                    <input type="password" name="" id="confirmPassword" placeholder='Şifrenizi tekrar giriniz...' value={values.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>}
                </div>

                <div className='input-div'>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'flex-start' }}>
                        <label >Kullanıcı sözleşmesiniz kabul ediyorum.</label>
                        <input style={{ width: "20px", height: "10" }} type="checkbox" name="" id="term" value={values.term} onChange={handleChange} />
                    </div>
                    {errors.term && <p className='input-error'>{errors.term}</p>}
                </div>

                <button type='submit'>Kaydet</button>
            </form>
        </div>
    )
}

export default RegisterForm