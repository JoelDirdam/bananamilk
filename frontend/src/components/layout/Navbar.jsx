import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import Login from '../../assets/icons/login.svg';
import Order from '../../assets/icons/order.svg';
import Contact from '../../assets/icons/contact.svg';
import WishList from '../../assets/icons/wishlist.svg';
import Star1 from '../../assets/navbar/star1.png';
import Star2 from '../../assets/navbar/star2.png';
import './Navbar-styles.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevenir scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className='bg-[#FFFFFF]'>
            {/* Gradient bar */}
            <div>
                <div className="gradient-bar h-8 w-full"></div>
            </div>
            {/* Navbar */}
            <div className='max-w-screen-xl mx-auto w-full'>
                {/* upper Navbar */}
                <div className="flex justify-between items-center h-32 sm:h-40 lg:h-52 w-full px-4">
                    <div>
                        <a href="#" className='text-sm sm:text-base lg:text-xl flex gap-1 sm:gap-2 underline text-login'>
                            <img src={Login} alt="Login" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                            <span className="hidden sm:inline">Login</span>
                        </a>
                    </div>
                    <div className='absolute left-1/2 transform -translate-x-1/2 w-32 sm:w-48 lg:w-64'>
                        <a href="/">
                            <img src={Logo} alt="BananaMilk" className="w-full h-auto" />
                        </a>
                    </div>
                    <div className='flex gap-2 sm:gap-3'>
                        {/* Wish List */}
                        <a href="#" className='py-1.5 px-2 sm:py-2 sm:px-4 rounded-full text-sm sm:text-base lg:text-xl flex gap-1 sm:gap-2 items-center group transition-all duration-300 relative overflow-hidden transform'>
                            <img src={WishList} alt="Wish List" className='drop-shadow-sm cursor-pointer w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 z-20 group-hover:filter group-hover:brightness-0 group-hover:invert' />
                            <span className='hidden lg:group-hover:inline-block lg:group-hover:opacity-100 transition-opacity duration-500 ease-out text-white z-20 ml-1'>Wish list</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-wishlist1 to-wishlist2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>
                        </a>
                        {/* Order */}
                        <a href="#" className='py-1.5 px-2 sm:py-2 sm:px-4 rounded-full text-sm sm:text-base lg:text-xl flex gap-1 sm:gap-2 items-center group transition-all duration-300 relative overflow-hidden transform'>
                            <img src={Order} alt="Order" className='drop-shadow-sm cursor-pointer w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 z-20 group-hover:filter group-hover:brightness-0 group-hover:invert' />
                            <span className='hidden lg:group-hover:inline-block lg:group-hover:opacity-100 transition-opacity duration-500 ease-out text-white z-20 ml-1'>Order</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-order1 to-order2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>
                        </a>
                        {/* Contact Us */}
                        <a href="#" className='py-1.5 px-2 sm:py-2 sm:px-4 rounded-full text-sm sm:text-base lg:text-xl flex gap-1 sm:gap-2 items-center group transition-all duration-300 relative overflow-hidden transform'>
                            <img src={Contact} alt="Contact us" className='drop-shadow-sm cursor-pointer w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 z-20 group-hover:filter group-hover:brightness-0 group-hover:invert' />
                            <span className='hidden lg:group-hover:inline-block lg:group-hover:opacity-100 transition-opacity duration-500 ease-out text-white z-20 ml-1'>Contact Us</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-contact1 to-contact2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>
                        </a>
                    </div>
                </div>
                {/* lower Navbar */}
                <div className="relative flex justify-between items-center min-h-16 w-full pb-4 sm:pb-6 lg:pb-8">
                    {/* Hamburger button - solo visible en mobile */}
                    <button
                        className="lg:hidden fixed top-10 right-4 z-[10000] p-2 text-banana-milk-text hover:text-banana-milk-text-dark transition-colors bg-white rounded-lg shadow-md"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                    {/* Desktop menu - oculto en mobile */}
                    <ul className="hidden lg:flex items-center font-winkle text-2xl text-banana-milk-text text-center gap-8">
                        {/* Original Merch Dropdown */}
                        <li className="group cursor-pointer leading-none flex flex-col items-center relative">
                            <span className="group-hover:text-banana-milk-text-dark transition duration-300">Merch</span>
                            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                <img src={Star1} alt="Star" className='absolute bottom-[20px] right-[-10px] transform' />
                                <img src={Star2} alt="Star" className='absolute bottom-[0px] right-[62px] transform' />
                            </div>

                            {/* Dropdown menu */}
                            <div className="absolute font-quicksand hidden top-full left-0 w-auto bg-wishlist2 backdrop-blur-sm p-5 text-black bg-opacity-75 transition-all duration-200 z-[9999] group-hover:block">
                                <div className="flex items-start justify-start  gap-2 cursor-default">
                                    <ul className="flex flex-col items-start mr-10">
                                        <li className="mb-2 text-base text-white font-bold">Original</li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Albumes</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Dolls</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Lightstick</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Photocard</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Sanrio</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Season Greatings</a></li>
                                    </ul>
                                    <ul className="flex flex-col items-start mr-10">
                                        <li className="mb-2 text-base text-white font-bold cursor-default">Fanmade</li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Nametags</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Libretitas</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Photocards</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Pickets</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Pulseras</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Stickers</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Stickers Vinil</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold">Straps</a></li>
                                    </ul>
                                    <ul className="flex flex-col items-start mr-10">
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Binders</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Hojas para Binders</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Sleeves</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Toploaders</a></li>
                                        <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Missing card set</a></li>
                                        <li><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Todo</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>


                        {/* Fanmade Dropdown */}
                        <li className="group cursor-pointer leading-none flex items-center relative">
                            <a href="cuentas-de-ahorro">
                                <span className="group-hover:text-banana-milk-text-dark transition duration-300">Cuenta de <br /> ahorro</span>
                                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                    <img src={Star2} alt="Star" className='absolute bottom-[40px] right-[95px] transform' />
                                    <img src={Star1} alt="Star" className='absolute bottom-[5px] right-[5px] transform' />
                                </div>
                            </a>
                        </li>

                        {/* Otros elementos */}
                        <li className="group cursor-pointer leading-none flex flex-col items-center relative">
                            <a href="mistery-box">
                                <span className="group-hover:text-banana-milk-text-dark transition duration-300">
                                    Mistery box
                                </span>
                                <div className='absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                    <img src={Star1} alt="Star" className='absolute bottom-[20px] right-[-10px] transform' />
                                    <img src={Star2} alt="Star" className='absolute bottom-[-3px] right-[112px] transform' />
                                </div>
                            </a>
                        </li>
                        <li className="group cursor-pointer leading-none flex items-center relative">
                            <span className="group-hover:text-banana-milk-text-dark transition duration-300">
                                Pedidos grupales
                            </span>
                            <div className='absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                <img src={Star1} alt="Star" className='absolute bottom-[20px] right-[-10px] transform' />
                                <img src={Star2} alt="Star" className='absolute bottom-[-3px] right-[160px] transform' />
                            </div>
                            {/* Dropdown menu */}
                            <div className="absolute font-quicksand z-[9999] hidden group-hover:block top-full w-full bg-wishlist2 backdrop-blur-sm p-2 text-black bg-opacity-75 transition-all duration-200">
                                <ul className="flex flex-col items-start cursor-default">
                                    <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">BTS</a></li>
                                    <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">iKON</a></li>
                                    <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">StayC</a></li>
                                    <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">TREASURE</a></li>
                                    <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Twice</a></li>
                                    <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">TXT</a></li>
                                    <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Otro grupo...</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="group cursor-pointer leading-none flex items-center relative">
                            <span className="group-hover:text-banana-milk-text-dark transition duration-300">
                                Productos para <br /> entrega inmediata
                            </span>
                            <div className='absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                <img src={Star2} alt="Star" className='absolute bottom-[25px] right-[166px] transform' />
                                <img src={Star1} alt="Star" className='absolute bottom-[5px] right-[-8px] transform' />
                            </div>
                            {/* Dropdown menu */}
                            <div className="absolute font-quicksand z-[9999] hidden group-hover:block top-full w-full bg-wishlist2 backdrop-blur-sm p-2 text-black bg-opacity-75 transition-all duration-200">
                                <ul className="flex flex-col items-start cursor-default">
                                    <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Durango, Dgo.</a></li>
                                    <li className="mb-2"><a href="#" className="text-base hover-underline-animation font-bold whitespace-nowrap">Tampico, Tamps.</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="group cursor-pointer leading-none flex items-center relative">
                            <a href="membership">
                                <span className="group-hover:text-banana-milk-text-dark transition duration-300">
                                    Membership
                                </span>
                                <div className='absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                    <img src={Star2} alt="Star" className='absolute bottom-[18px] right-[110px] transform' />
                                    <img src={Star1} alt="Star" className='absolute bottom-[0px] right-[-8px] transform' />
                                </div>
                            </a>
                        </li>
                        <li className="group cursor-pointer leading-none flex items-center relative">
                            <a href="limonada-rosita">
                                <span className="group-hover:text-banana-milk-text-dark transition duration-300">
                                    Limonada Rosita
                                </span>
                                <div className='absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                    <img src={Star1} alt="Star" className='absolute bottom-[18px] right-[-6px] transform' />
                                    <img src={Star2} alt="Star" className='absolute bottom-[-3px] right-[150px] transform' />
                                </div>
                            </a>
                        </li>
                        <li className="group cursor-pointer leading-none flex items-center relative">
                            <a href="sobre-nosotras">
                                <span className="group-hover:text-banana-milk-text-dark transition duration-300">
                                    Sobre nosotras
                                </span>
                                <div className='absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                    <img src={Star2} alt="Star" className='absolute bottom-[18px] right-[145px] transform' />
                                    <img src={Star1} alt="Star" className='absolute bottom-[0px] right-[-8px] transform' />
                                </div>
                            </a>
                        </li>
                    </ul>

                    {/* Mobile menu overlay */}
                    {isMobileMenuOpen && (
                        <div 
                            className="lg:hidden fixed inset-0 bg-white z-[9999] pt-20 pb-8 overflow-y-auto"
                            id="mobile-menu"
                        >
                            <ul className="flex flex-col items-start font-winkle text-xl text-banana-milk-text px-4 gap-4">
                                {/* Merch con submenú */}
                                <li className="w-full">
                                    <span className="hover:text-banana-milk-text-dark transition duration-300">Merch</span>
                                    <div className="mt-2 ml-4 font-quicksand text-base">
                                        <div className="flex flex-col gap-4">
                                            {/* Original */}
                                            <div>
                                                <p className="text-banana-milk-text-dark font-bold mb-2">Original</p>
                                                <ul className="flex flex-col gap-1 ml-2">
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Albumes</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Dolls</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Lightstick</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Photocard</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Sanrio</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Season Greatings</a></li>
                                                </ul>
                                            </div>
                                            {/* Fanmade */}
                                            <div>
                                                <p className="text-banana-milk-text-dark font-bold mb-2">Fanmade</p>
                                                <ul className="flex flex-col gap-1 ml-2">
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Nametags</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Libretitas</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Photocards</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Pickets</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Pulseras</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Stickers</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Stickers Vinil</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Straps</a></li>
                                                </ul>
                                            </div>
                                            {/* Accesorios */}
                                            <div>
                                                <ul className="flex flex-col gap-1 ml-2">
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Binders</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Hojas para Binders</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Sleeves</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Toploaders</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Missing card set</a></li>
                                                    <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Todo</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="cuentas-de-ahorro" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Cuenta de ahorro</a>
                                </li>
                                <li>
                                    <a href="mistery-box" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Mistery box</a>
                                </li>
                                {/* Pedidos grupales con submenú */}
                                <li className="w-full">
                                    <span className="hover:text-banana-milk-text-dark transition duration-300">Pedidos grupales</span>
                                    <ul className="mt-2 ml-4 font-quicksand text-base flex flex-col gap-1">
                                        <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">BTS</a></li>
                                        <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">iKON</a></li>
                                        <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">StayC</a></li>
                                        <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">TREASURE</a></li>
                                        <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Twice</a></li>
                                        <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">TXT</a></li>
                                        <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Otro grupo...</a></li>
                                    </ul>
                                </li>
                                {/* Productos para entrega inmediata con submenú */}
                                <li className="w-full">
                                    <span className="hover:text-banana-milk-text-dark transition duration-300">Productos para entrega inmediata</span>
                                    <ul className="mt-2 ml-4 font-quicksand text-base flex flex-col gap-1">
                                        <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Durango, Dgo.</a></li>
                                        <li><a href="#" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Tampico, Tamps.</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="membership" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Membership</a>
                                </li>
                                <li>
                                    <a href="limonada-rosita" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Limonada Rosita</a>
                                </li>
                                <li>
                                    <a href="sobre-nosotras" onClick={closeMobileMenu} className="hover:text-banana-milk-text-dark transition duration-300">Sobre nosotras</a>
                                </li>
                            </ul>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Navbar;

