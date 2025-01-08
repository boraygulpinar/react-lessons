import React from 'react'

export const users = [
    {
        username: "Boray",
        password: "abc123"
    },
    {
        username: "test",
        password: "test"
    }
]

function Login() {
    return (

        // <> </> Fragment yapısı "kapsayıcı div"

        <div>
            <div>
                <p>Kullanıcı Adınız</p>
                <input type="text" />
            </div>

            <div>
                <p>Şifreniz</p>
                <input type="text" />
            </div>
            <button>Giriş Yap</button>
        </div>
    )
}

export default Login