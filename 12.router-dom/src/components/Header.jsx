import React from 'react'
import { Link, Links } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link className='link' to="/">Anasayfa</Link>
            <Link className='link' to="/about">Hakkımda</Link>
            <Link className='link' to="/products">Ürünler</Link>
            <Link className='link' to="/contact">İletişim</Link>
        </div>
    )
}

export default Header