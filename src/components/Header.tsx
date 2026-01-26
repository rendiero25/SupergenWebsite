import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from '../assets/header/logo.png';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

    // Dropdown items configuration
    const dropdownItems = {
        'Products': [
            { 
                label: t('products.generatorSet'), 
                path: '/products/generator-set',
                subMenu: [
                    { label: t('products.openType'), path: '/products/generator-set/open-type' },
                    { label: t('products.silentType'), path: '/products/generator-set/silent-type' },
                    { label: t('products.containerType'), path: '/products/generator-set/container-type' },
                ]
            },
            { 
                label: t('products.brushlessAlternator'), 
                path: '/products/brushless-alternator/brushless-alternator/yihua',
                subMenu: [
                    { label: 'Yihua', path: '/products/brushless-alternator/brushless-alternator/yihua' }
                ]
            },
        ],
        'Solutions': [
            { label: t('solutions.mining'), path: '/solutions/mining' },
            { label: t('solutions.construction'), path: '/solutions/construction' },
            { label: t('solutions.oilGas'), path: '/solutions/oil-gas' },
            { label: t('solutions.powerPlants'), path: '/solutions/power-plants' },
            { label: t('solutions.dataCenters'), path: '/solutions/data-centers' },
            { label: t('solutions.telecom'), path: '/solutions/telecom' },
            { label: t('solutions.healthcare'), path: '/solutions/healthcare' },
            { label: t('solutions.utilities'), path: '/solutions/utilities' },
        ],
        'About Yihua': [
            { label: t('about.corporateProfile'), path: '/about/corporate-profile' },
            { label: t('about.factoryOverview'), path: '/about/factory-overview' },
        ],
    };

    const navItems = [
        { label: t('navigation.products'), path: '/products', key: 'Products' },
        { label: t('navigation.solutions'), path: '/solutions', key: 'Solutions' },
        { label: t('navigation.aboutYihua'), path: '/about', key: 'About Yihua' },
        { label: t('navigation.helpContact'), path: '/contact', key: null },
    ];

    const toggleMobileDropdown = (label: string) => {
        setOpenMobileDropdown(openMobileDropdown === label ? null : label);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-white font-outfit shadow-lg h-20">
                <div className="container mx-auto px-4 flex items-stretch justify-between h-full">
                    {/* Logo */}
                    <Link to="/" className="shrink-0 flex items-center">
                        <img src={logo} alt="Yihua Logo" className="h-10 md:h-14 w-auto" />
                    </Link>

                    {/* Navigation & Actions */}
                    <div className="flex items-center gap-7 h-full">
                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-stretch gap-0 h-full">
                            {navItems.map((item) => {
                                const hasDropdown = item.key ? dropdownItems[item.key as keyof typeof dropdownItems] : null;
                                
                                return (
                                    <div key={item.label} className="relative group h-full">
                                        <Link 
                                            to={item.path}
                                            className="text-lg font-bold hover:text-white hover:bg-red transition-all duration-300 ease-in-out flex items-center gap-1 h-full px-5"
                                        >
                                            {item.label}
                                            {hasDropdown && (
                                                <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-200" />
                                            )}
                                        </Link>

                                        {/* Dropdown Menu */}
                                        {hasDropdown && (
                                            <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top">
                                                {hasDropdown.map((subItem) => (
                                                    <div key={subItem.label} className="relative group/sub">
                                                        <Link
                                                            to={subItem.path}
                                                            className="flex items-center justify-between px-6 py-3 text-sm text-black hover:bg-red hover:text-white transition-colors border-b border-gray-100 last:border-b-0"
                                                        >
                                                            {subItem.label}
                                                            {/* @ts-ignore - subMenu property exists dynamically */}
                                                            {subItem.subMenu && <IoIosArrowForward />}
                                                        </Link>
                                                        
                                                        {/* @ts-ignore */}
                                                        {subItem.subMenu && (
                                                            <div className="absolute top-0 left-full w-56 bg-white shadow-lg py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 transform origin-top-left border-l border-gray-100">
                                                                {/* @ts-ignore */}
                                                                {subItem.subMenu.map((nestedItem: any) => (
                                                                    <Link 
                                                                        key={nestedItem.label}
                                                                        to={nestedItem.path}
                                                                         className="block px-6 py-3 text-sm text-black hover:bg-red hover:text-white transition-colors border-b border-gray-100 last:border-b-0"
                                                                    >
                                                                        {nestedItem.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </nav>

                        {/* Search Bar */}
                        <div className="hidden md:flex my-5 items-center border border-gray-300 rounded-full px-4 py-3 w-64 focus-within:border-red-600 transition-colors bg-white">
                            <input 
                                type="text" 
                                placeholder="Search..."
                                className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-400"
                            />
                            <IoSearchOutline className="text-gray-400 text-lg" />
                        </div>

                        {/* Language Toggle */}
                        <div className="relative group my-5 hidden lg:block">
                            <button className="cursor-pointer flex items-center gap-1 text-sm font-medium border border-gray-300 rounded-full px-4 py-3 hover:text-red-600 transition-colors text-gray-400">
                                {language}
                                <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-200" />
                            </button>

                            {/* Dropdown */}
                            <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right border border-gray-100">
                                <button 
                                    onClick={() => setLanguage('English')}
                                    className={`cursor-pointer w-full text-left px-4 py-2 text-sm hover:bg-gray-50 hover:text-red-600 transition-colors ${language === 'English' ? 'text-red-600 font-medium' : 'text-gray-600'}`}
                                >
                                    English
                                </button>
                                <button 
                                    onClick={() => setLanguage('Indonesia')}
                                    className={`cursor-pointer w-full text-left px-4 py-2 text-sm hover:bg-gray-50 hover:text-red-600 transition-colors ${language === 'Indonesia' ? 'text-red-600 font-medium' : 'text-gray-600'}`}
                                >
                                    Indonesia
                                </button>
                            </div>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-red-600 transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <HiX className="w-7 h-7" />
                            ) : (
                                <HiMenuAlt3 className="w-7 h-7" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={closeMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <div 
                className={`fixed top-20 right-0 w-80 max-w-full h-[calc(100vh-80px)] bg-white z-40 lg:hidden shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <nav className="py-4">
                    {navItems.map((item) => {
                        const hasDropdown = item.key ? dropdownItems[item.key as keyof typeof dropdownItems] : null;
                        const isOpen = openMobileDropdown === item.key;
                        
                        return (
                            <div key={item.label} className="border-b border-gray-100">
                                {hasDropdown ? (
                                    <>
                                        <button 
                                            onClick={() => toggleMobileDropdown(item.key!)}
                                            className="w-full flex items-center justify-between px-6 py-4 text-lg font-bold text-gray-800 hover:bg-gray-50 hover:text-red-600 transition-colors"
                                        >
                                            {item.label}
                                            <IoIosArrowDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                                            {hasDropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.label}
                                                    to={subItem.path}
                                                    onClick={closeMobileMenu}
                                                    className="block px-10 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-red-600 transition-colors"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link 
                                        to={item.path}
                                        onClick={closeMobileMenu}
                                        className="block px-6 py-4 text-lg font-bold text-gray-800 hover:bg-gray-50 hover:text-red-600 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        );
                    })}

                    {/* Mobile Language Selector */}
                    <div className="px-6 py-4 border-t border-gray-200 mt-4">
                        <p className="text-sm text-gray-500 mb-2">Language</p>
                        <div className="flex gap-2">
                            <button 
                                onClick={() => setLanguage('English')}
                                className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                                    language === 'English' 
                                        ? 'bg-red-600 text-white border-red-600' 
                                        : 'border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600'
                                }`}
                            >
                                English
                            </button>
                            <button 
                                onClick={() => setLanguage('Indonesia')}
                                className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                                    language === 'Indonesia' 
                                        ? 'bg-red-600 text-white border-red-600' 
                                        : 'border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600'
                                }`}
                            >
                                Indonesia
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
