import React from 'react'
import Heart from '../../assets/home/section2/heart.png'
import Image1 from '../../assets/home/section2/image1.png'
import Image2 from '../../assets/home/section2/image2.png'
import Image3 from '../../assets/home/section2/image3.png'
import Image4 from '../../assets/home/section2/image4.png'
import Chaimzn_section from '../widgets/Chaimzn_section'
import './Shop-styles.css'

const Shop = () => {
    return (
        <div>
            {/* Primera Sección Shop */}
            <div className='h-[70vh] flex flex-col items-center justify-center relative'>
                <div className='max-w-screen-xl'>
                    <div className='flex items-center justify-center text-center mb-16'>
                    <h1 className='absolute gradient-text1 text-7xl font-bold font-sanggar text-transparent bg-clip-text border-solid'>Navega por todas nuestras secciones</h1>
                    <h1 className='gradient-text1 text-7xl font-bold font-sanggar bg-clip-text'
                    style={{
                        WebkitTextStroke: '18px #FFFFFF',
                        strokeLinecap: 'round',
                        textShadow: '0 0 5px #FFFFFF, 0 0 10px #FFFFFF, 0 0 15px #FFFFFF'
                    }}>
                    Navega por todas nuestras secciones
                    </h1>
                        {/* <img src={Heart} alt="♥" className='ml-10 h-auto self-center -translate-y-2' /> */}
                    </div>

                    {/* Centramos las imágenes con texto */}
                    <div className='flex justify-center mt-10 gap-10'>
                        {/* Imagen 1 */}
                        <div className='flex flex-col items-center group relative cursor-pointer'>
                            <img src={Image1} alt="Image1" className='rounded-[20px] border-[13px] border-transparent group-hover:border-[#FFAFE3] group-hover:bg-[#FFAFE3] transition-all duration-300 ease-in-out' />
                            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                <p className='absolute text-wishlist1 font-winkle text-4xl text-center'>quiero <br /> saber mas</p>
                                <p className='text-white font-winkle text-4xl text-center'
                                    style={{
                                        WebkitTextStroke: '12px #FFFFFF',
                                        strokeLinecap: 'round',
                                        textShadow: '0 0 5px #FFFFFF, 0 0 10px #FFFFFF, 0 0 15px #FFFFFF'
                                    }}
                                >quiero <br /> saber mas</p>
                            </div>

                            {/* Texto debajo de la imagen */}
                            <p className='text-center mt-4 text-[#7AA9FF] underline decoration-[#7AA9FF] group-hover:decoration-[#FFAFE3] group-hover:text-[#FFAFE3] transition-all duration-300 ease-in-out'>
                                Sticker pack Kpop
                            </p>
                        </div>

                        {/* Imagen 2 */}
                        <div className='flex flex-col items-center group relative cursor-pointer'>
                            <img src={Image2} alt="Image2" className='rounded-[20px] border-[13px] border-transparent group-hover:border-[#FFAFE3] group-hover:bg-[#FFAFE3] transition-all duration-300 ease-in-out' />
                            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                <p className='absolute text-wishlist1 font-winkle text-4xl  text-center'>quiero <br /> saber mas</p>
                                <p className='text-white font-winkle text-4xl text-center'
                                    style={{
                                        WebkitTextStroke: '12px #FFFFFF',
                                        strokeLinecap: 'round',
                                        textShadow: '0 0 5px #FFFFFF, 0 0 10px #FFFFFF, 0 0 15px #FFFFFF'
                                    }}
                                >quiero <br /> saber mas</p>
                            </div>
                            <p className='text-center mt-4 text-[#7AA9FF] underline decoration-[#7AA9FF] group-hover:decoration-[#FFAFE3] group-hover:text-[#FFAFE3] transition-all duration-300 ease-in-out'>
                                Sleeves holográficos
                            </p>
                        </div>

                        {/* Imagen 3 */}
                        <div className='flex flex-col items-center group relative cursor-pointer'>
                            <img src={Image3} alt="Image3" className='rounded-[20px] border-[13px] border-transparent group-hover:border-[#FFAFE3] group-hover:bg-[#FFAFE3] transition-all duration-300 ease-in-out' />
                            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                <p className='absolute text-wishlist1 font-winkle text-4xl  text-center'>quiero <br /> saber mas</p>
                                <p className='text-white font-winkle text-4xl text-center'
                                    style={{
                                        WebkitTextStroke: '12px #FFFFFF',
                                        strokeLinecap: 'round',
                                        textShadow: '0 0 5px #FFFFFF, 0 0 10px #FFFFFF, 0 0 15px #FFFFFF'
                                    }}
                                >quiero <br /> saber mas</p>
                            </div>
                            <p className='text-center mt-4 text-[#7AA9FF] underline decoration-[#7AA9FF] group-hover:decoration-[#FFAFE3] group-hover:text-[#FFAFE3] transition-all duration-300 ease-in-out'>
                                Stickers de vinil para decorar
                            </p>
                        </div>

                        {/* Imagen 4 */}
                        <div className='flex flex-col items-center group relative cursor-pointer'>
                            <img src={Image4} alt="Image4" className='rounded-[20px] border-[13px] border-transparent group-hover:border-[#FFAFE3] group-hover:bg-[#FFAFE3] transition-all duration-300 ease-in-out' />
                            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                <p className='absolute text-wishlist1 font-winkle text-4xl  text-center'>quiero <br /> saber mas</p>
                                <p className='text-white font-winkle text-4xl text-center'
                                    style={{
                                        WebkitTextStroke: '12px #FFFFFF',
                                        strokeLinecap: 'round',
                                        textShadow: '0 0 5px #FFFFFF, 0 0 10px #FFFFFF, 0 0 15px #FFFFFF'
                                    }}
                                >quiero <br /> saber mas</p>
                            </div>
                            <p className='text-center mt-4 text-[#7AA9FF] underline decoration-[#7AA9FF] group-hover:decoration-[#FFAFE3] group-hover:text-[#FFAFE3] transition-all duration-300 ease-in-out'>
                                Merch original de Sanrio
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Segunda Sección Shop */}
            <Chaimzn_section />
            
        </div>
    )
}

export default Shop