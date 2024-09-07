"use client";
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import MenuItem from './MenuItem';
import ThemeComp from './ThemeComp';

const Header = () => {
    const [keyword, setKeyword] = useState('');

    const menu = [
        { name: "About", url: "/about" },
        { name: "Sign In", url: "/login" }
    ];

    const searchFunc = (e) => {
        if (e.key === "Enter" && keyword.length >= 3) {
            // window.location.href kullanarak yönlendirme yapın
            window.location.href = `/search/${keyword}`;
            setKeyword(""); // Arama kutusunu temizleyin
        }
    };

    return (
        <div className='flex items-center gap-7 h-20 p-5'>
            <div className='bg-amber-600 p-3 text-2xl font-bold rounded-lg'>MovieApp</div> 
            <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
                <input 
                    onKeyDown={searchFunc} 
                    onChange={(e) => setKeyword(e.target.value)} 
                    className='outline-none flex-1 bg-transparent' 
                    placeholder='Arama Yapınız...' 
                    type="text" 
                />
                <FaSearch size={25} />
            </div>
            <ThemeComp />
            {menu.map((mn, i) => (
                <MenuItem mn={mn} key={i} />
            ))}
        </div>
    );
}

export default Header;
