import React from "react";
import './Navbar.css';

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logo.png';


const Navbar = () => {
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links__logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='gpt3__navbar-links__container'>
                    <p><a href='#home'>Home</a></p> 
                    <p><a href='#what'>What is GPT3</a></p>
                    <p><a href='#possibility'>Open AI</a></p>
                    <p><a href='#features'>Case Studies</a></p>
                    <p><a href='#blog'>Library</a></p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;