import * as yup from 'yup'

export const RegisterFormSchemas = yup.object().shape({
    email: yup.string().email("Geçerli bir email adresi giriniz.").required("Email adresi zorunludur."),

    age: yup.number().positive("Pozitif bir değer giriniz.").integer("Tam sayı giriniz.").required("Yaş alanı zorunludur."),

    password: yup.string().required("Şifre alanı zorunludur."),

    confirmPassword: yup.string().required("Şifre tekrarı zorunludur.").oneOf([yup.ref('password', yup.password)], 'Şifreler eşleşmiyor.'),

    term: yup.boolean().required("Sözleşmeyi kabul ediniz.")
})