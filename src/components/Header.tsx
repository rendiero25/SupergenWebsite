import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../assets/header/logo.png';

const Header = () => {
    const [language, setLanguage] = useState('English');

    const navItems = [
        { label: 'Products', path: '/products' },
        { label: 'Solutions', path: '/solutions' },
        { label: 'About Yihua', path: '/about' },
        { label: 'Help & Contact', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm font-outfit">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <img src={logo} alt="Yihua Logo" className="h-10 md:h-12 w-auto" />
                </Link>

                {/* Navigation & Actions */}
                <div className="flex items-center gap-8">
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link 
                                key={item.label} 
                                to={item.path}
                                className="text-sm font-medium hover:text-red-600 transition-colors flex items-center gap-1 group"
                            >
                                {item.label}
                                {(item.label === 'Products' || item.label === 'Solutions' || item.label === 'About Yihua') && (
                                    <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-200" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center border border-gray-200 rounded-full px-4 py-1.5 w-64 focus-within:border-red-600 transition-colors bg-white">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-400"
                        />
                        <IoSearchOutline className="text-gray-400 text-lg" />
                    </div>

                    {/* Language Toggle */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium hover:text-red-600 transition-colors">
                            {language}
                            <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-200" />
                        </button>
                        
                        {/* Dropdown */}
                        <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right border border-gray-100">
                            <button 
                                onClick={() => setLanguage('English')}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 hover:text-red-600 transition-colors ${language === 'English' ? 'text-red-600 font-medium' : 'text-gray-600'}`}
                            >
                                English
                            </button>
                            <button 
                                onClick={() => setLanguage('Indonesia')}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 hover:text-red-600 transition-colors ${language === 'Indonesia' ? 'text-red-600 font-medium' : 'text-gray-600'}`}
                            >
                                Indonesia
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
