"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import "../../styles/bananamilk.css"

interface BananaMilkLayoutProps {
    children: React.ReactNode
}

export default function BananaMilkLayout({ children }: BananaMilkLayoutProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isMobileMenuOpen])

    return (
        <div className="min-h-screen bg-white">
            {/* Gradient Bar */}
            <div className="gradient-bar h-6 sm:h-8 w-full" />

            {/* Sticky Header */}
            <header className="sticky top-0 z-30 bg-white shadow-sm">
                <div className="bm-container">
                    {/* Mobile Header */}
                    {isMobile && (
                        <div className="flex items-center justify-between py-4">
                            <a href="/" className="w-32">
                                <img src="/src/assets/logo.png" alt="BananaMilk" className="w-full h-auto" />
                            </a>
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="p-2 text-[#FF96B2] hover:text-[#FC589A]"
                                aria-label="Open menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    )}

                    {/* Desktop Header - Preserved from original */}
                    {!isMobile && (
                        <>
                            {/* Upper Navbar */}
                            <div className="flex justify-between items-center h-52 w-full px-4">
                                <div>
                                    <a href="#" className="text-xl flex gap-2 underline text-[#8BD7E1]">
                                        <img src="/src/assets/icons/login.svg" alt="Login" className="w-5 h-5" />
                                        Login
                                    </a>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-64">
                                    <a href="/">
                                        <img src="/src/assets/logo.png" alt="BananaMilk" className="w-full h-auto" />
                                    </a>
                                </div>
                                <div className="flex gap-3">
                                    {/* Wishlist, Order, Contact buttons - preserved */}
                                    <a
                                        href="#"
                                        className="py-2 px-4 rounded-full flex gap-2 items-center group transition-all duration-300 relative overflow-hidden"
                                    >
                                        <img
                                            src="/src/assets/icons/wishlist.svg"
                                            alt="Wish List"
                                            className="w-6 h-6 z-20 group-hover:filter group-hover:brightness-0 group-hover:invert"
                                        />
                                        <span className="hidden group-hover:inline-block text-white z-20">Wish list</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFAFE3] to-[#FFB8CB] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />
                                    </a>
                                    <a
                                        href="#"
                                        className="py-2 px-4 rounded-full flex gap-2 items-center group transition-all duration-300 relative overflow-hidden"
                                    >
                                        <img
                                            src="/src/assets/icons/order.svg"
                                            alt="Order"
                                            className="w-6 h-6 z-20 group-hover:filter group-hover:brightness-0 group-hover:invert"
                                        />
                                        <span className="hidden group-hover:inline-block text-white z-20">Order</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#D7A9E5] to-[#7AA9FF] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />
                                    </a>
                                    <a
                                        href="#"
                                        className="py-2 px-4 rounded-full flex gap-2 items-center group transition-all duration-300 relative overflow-hidden"
                                    >
                                        <img
                                            src="/src/assets/icons/contact.svg"
                                            alt="Contact"
                                            className="w-6 h-6 z-20 group-hover:filter group-hover:brightness-0 group-hover:invert"
                                        />
                                        <span className="hidden group-hover:inline-block text-white z-20">Contact Us</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD146] to-[#FF9696] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />
                                    </a>
                                </div>
                            </div>

                            {/* Lower Navbar - Desktop Navigation */}
                            <nav className="pb-8">
                                <ul className="flex items-center font-winkle text-2xl text-[#FFB8CB] gap-8">
                                    <li className="group cursor-pointer hover:text-[#FC589A] transition duration-300">
                                        <a href="/merch">Merch</a>
                                    </li>
                                    <li className="group cursor-pointer hover:text-[#FC589A] transition duration-300">
                                        <a href="/cuentas-de-ahorro">Cuenta de ahorro</a>
                                    </li>
                                    <li className="group cursor-pointer hover:text-[#FC589A] transition duration-300">
                                        <a href="/mistery-box">Mistery box</a>
                                    </li>
                                    <li className="group cursor-pointer hover:text-[#FC589A] transition duration-300">
                                        <a href="/pedidos-grupales">Pedidos grupales</a>
                                    </li>
                                    <li className="group cursor-pointer hover:text-[#FC589A] transition duration-300">
                                        <a href="/entrega-inmediata">Entrega inmediata</a>
                                    </li>
                                    <li className="group cursor-pointer hover:text-[#FC589A] transition duration-300">
                                        <a href="/membership">Membership</a>
                                    </li>
                                    <li className="group cursor-pointer hover:text-[#FC589A] transition duration-300">
                                        <a href="/limonada-rosita">Limonada Rosita</a>
                                    </li>
                                    <li className="group cursor-pointer hover:text-[#FC589A] transition duration-300">
                                        <a href="/sobre-nosotras">Sobre nosotras</a>
                                    </li>
                                </ul>
                            </nav>
                        </>
                    )}
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Sidebar */}
            <aside className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
                <div className="p-6">
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-4 right-4 p-2 text-[#FF96B2]"
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="mt-8">
                        <a href="#" className="flex items-center gap-2 mb-6 text-[#8BD7E1] text-lg">
                            <img src="/src/assets/icons/login.svg" alt="Login" className="w-5 h-5" />
                            Login
                        </a>
                        <nav className="space-y-4 font-winkle text-xl text-[#FFB8CB]">
                            <a href="/merch" className="block py-2 hover:text-[#FC589A] transition-colors">
                                Merch
                            </a>
                            <a href="/cuentas-de-ahorro" className="block py-2 hover:text-[#FC589A] transition-colors">
                                Cuenta de ahorro
                            </a>
                            <a href="/mistery-box" className="block py-2 hover:text-[#FC589A] transition-colors">
                                Mistery box
                            </a>
                            <a href="/pedidos-grupales" className="block py-2 hover:text-[#FC589A] transition-colors">
                                Pedidos grupales
                            </a>
                            <a href="/entrega-inmediata" className="block py-2 hover:text-[#FC589A] transition-colors">
                                Entrega inmediata
                            </a>
                            <a href="/membership" className="block py-2 hover:text-[#FC589A] transition-colors">
                                Membership
                            </a>
                            <a href="/limonada-rosita" className="block py-2 hover:text-[#FC589A] transition-colors">
                                Limonada Rosita
                            </a>
                            <a href="/sobre-nosotras" className="block py-2 hover:text-[#FC589A] transition-colors">
                                Sobre nosotras
                            </a>
                        </nav>

                        <div className="mt-8 space-y-3 border-t border-[#FFB8CB] pt-6">
                            <a
                                href="#"
                                className="flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-[#FFAFE3] to-[#FFB8CB] text-white"
                            >
                                <img
                                    src="/src/assets/icons/wishlist.svg"
                                    alt="Wish List"
                                    className="w-5 h-5 filter brightness-0 invert"
                                />
                                Wish list
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-[#D7A9E5] to-[#7AA9FF] text-white"
                            >
                                <img src="/src/assets/icons/order.svg" alt="Order" className="w-5 h-5 filter brightness-0 invert" />
                                Order
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-[#FFD146] to-[#FF9696] text-white"
                            >
                                <img src="/src/assets/icons/contact.svg" alt="Contact" className="w-5 h-5 filter brightness-0 invert" />
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main>{children}</main>

            {/* Footer */}
            <footer className="bg-gradient-to-b from-[#FFB8CB] to-[#D7A9E5] text-white py-8 sm:py-12">
                <div className="bm-container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Logo and Credits */}
                        <div className="flex flex-col items-start">
                            <img src="/src/assets/footer/Logo5.svg" alt="Logo" className="w-32 sm:w-40 mb-4" />
                            <p className="text-[#B59EE8] text-sm">
                                © 2026 Durango Dgo. Made by <span className="underline">Chai Manzana</span>
                            </p>
                            <p className="text-[#EBC2F2] text-xs mt-1">Developed by Joel Andres V. Madrid</p>
                            <p className="text-[#EBC2F2] text-xs">Designed by Marcela Serrano Gutiérrez</p>
                        </div>

                        {/* Contact Button */}
                        <div className="flex flex-col items-center justify-center">
                            <button className="bg-[#FFD9E1] text-[#FF6F91] font-winkle text-lg sm:text-xl py-2 px-6 rounded-full hover:bg-[#FFC5D3] transition-colors">
                                Habla con nosotras
                            </button>
                        </div>

                        {/* Social Media */}
                        <div className="flex flex-col items-start md:items-end">
                            <p className="text-[#FF6F91] font-winkle text-lg mb-4">Nuestras redes sociales</p>
                            <div className="flex space-x-4 mb-6">
                                <a href="https://www.instagram.com/bananamilk_mx/" className="hover:opacity-80 transition-opacity">
                                    <img src="/src/assets/footer/instagram.svg" alt="Instagram" className="w-8 h-8" />
                                </a>
                                <a
                                    href="https://www.facebook.com/groups/4051747658232587"
                                    className="hover:opacity-80 transition-opacity"
                                >
                                    <img src="/src/assets/footer/facebook.svg" alt="Facebook" className="w-8 h-8" />
                                </a>
                                <a
                                    href="https://chat.whatsapp.com/LQXYLO1Bx72JdSsKtzOiv1"
                                    className="hover:opacity-80 transition-opacity"
                                >
                                    <img src="/src/assets/footer/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
                                </a>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 text-sm">
                                <a href="/privacy-policy" className="text-pink-300 hover:text-white transition-colors">
                                    Políticas de privacidad
                                </a>
                                <a href="/terms-conditions" className="text-pink-300 hover:text-white transition-colors">
                                    Términos y condiciones
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
