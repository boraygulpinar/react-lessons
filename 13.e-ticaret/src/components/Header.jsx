import React, { useState } from 'react'
import '../css/Header.css'
import '../css/App.css'
import dogcatLogo from '../images/dogcatLogo.png'
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';

function Header() {

    const [theme, setTheme] = useState(true)

    const navigate = useNavigate();

    const changeTheme = () => {
        const root = document.getElementById('root');
        const paragraphs = document.getElementsByTagName('p');

        if (theme) {
            root.style.backgroundColor = "#2D2D2D";
            root.style.color = "#fff";

        }
        else {
            root.style.backgroundColor = "#fff";
            root.style.color = "#2D2D2D";
        }
        setTheme(!theme);
    }

    return (
        <div className='header'>
            <div className='flex-row' onClick={() => navigate('/')}>
                <img className='logo' src={dogcatLogo} alt="Dog and Cat Logo" />
                <p style={{ fontSize: "36px" }}>E-Commerce</p>
            </div>
            <div className='flex-row'>
                <input type="text" placeholder='Ara...' />
                <div>
                    {theme ? <MdDarkMode className='icon' onClick={changeTheme} /> : <MdOutlineLightMode className='icon' onClick={changeTheme} />}
                    <Badge badgeContent={4} color="primary">
                        <FaShoppingBasket className='icon' />
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Header