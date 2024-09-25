import React from 'react'
import Heart from '../../assets/home/section2/heart.png'
import Image1 from '../../assets/home/section2/image1.png'
import Image2 from '../../assets/home/section2/image2.png'
import Image3 from '../../assets/home/section2/image3.png'
import Image4 from '../../assets/home/section2/image4.png'
import Pointer from '../../assets/home/section2/pointer.png'
import Bg4_2 from '../../assets/home/section4/bg4-2.svg';
import Durango from '../../assets/home/section4/durango.svg';
import Tampico from '../../assets/home/section4/tampico.svg';
import Hover_Durango from '../../assets/home/section4/hover-durango.svg';
import Hover_Tampico from '../../assets/home/section4/hover-tampico.svg';
import Star from '../../assets/home/section4/star.svg';
import BigStar from '../../assets/home/section4/big-star.svg';
import Chaimzn_section from '../widgets/Chaimzn_section'
import './Home-styles.css'

const Home = () => {
  return (
    <div>
      {/* Primera Sección */}
      <div className='bg-hbg1 bg-cover bg-center h-[65vh] flex items-center justify-center'>
        <div className='max-w-screen-xl'>
          <div className='relative text-center'>
            <h1 className='absolute gradient-text1 text-7xl font-bold font-sanggar text-transparent bg-clip-text border-solid'>Mercancía de kpop original y fanmade</h1>
            <h1 className='gradient-text1 text-7xl font-bold font-sanggar text-transparent bg-clip-text'
              style={{
                WebkitTextStroke: '18px #FFFFFF',
                strokeLinecap: 'round',
                textShadow: '0 0 5px #FFFFFF, 0 0 10px #FFFFFF, 0 0 15px #FFFFFF'
              }}>
              Mercancía de kpop original y fanmade
            </h1>
            <p className='absolute left-1/2 transform -translate-x-1/2 text-banana-milk-text-light text-7xl  font-winkle z-0'>
              cerquita de ti
            </p>
            <p className='text-banana-milk-text-light text-7xl font-bold font-winkle z-0'
              style={{
                top: '15%',
                WebkitTextStroke: '18px #FF96B2',
                strokeLinecap: 'round',
                textShadow: '0 0 5px #FF96B2, 0 0 10px #FF96B2, 0 0 15px #FF96B2'
              }}>
              cerquita de ti
            </p>
            <div className='mt-10'>
              <button onClick={
                () => {
                  window.location.href = '/shop'
                }
              } className='bg-banana-milk-text-light text-[#FF96B2] font-winkle text-3xl py-2 px-8 rounded-full'>Quiero comprar ya!</button>
            </div>
          </div>
        </div>
      </div>

      {/* Segunda Sección */}
      <div className='h-[70vh] flex flex-col items-center justify-center relative'>
        <div className='max-w-screen-xl'>
          <div className='flex items-center justify-center text-center mb-16'>
            <h1 className='gradient-text2 text-7xl font-sanggar text-transparent bg-clip-text border-solid'>
              Lo que más nos piden
            </h1>
            <img src={Heart} alt="♥" className='ml-10 h-auto self-center -translate-y-2' />
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

      {/* Tercera Sección */}
      <div className='h-[80vh] flex items-center justify-center bg-[#FFB8CB] relative'>
        {/* Custom Shape Divider con dos curvas */}
        <div className="custom-shape-divider-top-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86c82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" stroke='#FF96B2' strokeWidth='20px'></path>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86c82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill='#FFF'></path>
          </svg>
        </div>

        {/* Contenido de la sección */}
        <div className='max-w-screen-xl'>
          <div className='text-start'>
            <h1 className='text-white text-7xl font-sanggar'>
              ¡Hola! Somos Cat y Marce, las <br /> fundadoras de Banana Milk.
            </h1>
            <div className='text-[#FFDEE7] font-winkle text-3xl'>
              <p className='mt-4'>
                Nuestra historia inicio en 2018, cuando el amor por el Kpop especialmente por el grupo iKON nos unio a pesar de vivir en diferentes estados Tampico Tamaulipas y Durango Dgo. Con el tiempo nuestra amistad se fortalecio y en 2020, decidimos convertir nuestro hobby compartido en una aventura llamada Banana Milk.
              </p>
              <p className='mt-4'>
                En Banana Milk, nos encanta ofrecerte todo lo que puedas imaginar en el mundo del Kpop, anime, manhwas y otras cositas cute, desde albumes, photocards originales y obvio fanmade, papeleria, mercancia original, y todo tipo de productos de nuestras bonitas ilustraciones  hemos reunido una amplia variedad de tesoros que sabemos que te encantaran.
              </p>
              <p className='mt-4'>
                Gracias por ser parte de esta aventura con nosotras. Esperamos que disfrutes tanto como nosotras este viaje lleno de K-pop, anime y creatividad!
              </p>
            </div>
          </div>
          <div className='text-end'>
            <button className='bg-banana-milk-text-light text-[#FF96B2] font-winkle text-2xl py-2 px-8 rounded-full'>Sobre nosotras</button>
          </div>
        </div>
      </div>


      {/* Cuarta Sección */}
      <div className='h-[80vh] flex items-center justify-center relative'>
        {/* Fondo como imagen */}
        <div className="absolute inset-0 w-full h-full">
          <img src={Bg4_2} alt="Background" className="object-cover w-full h-full" />
        </div>

        {/* Contenido de la sección */}
        <div className='max-w-screen-xl z-10'>
          <div className='text-center'>
            <h1 className='text-7xl font-winkle text-white'>
              Productos para entrega inmediata en:
            </h1>

            <div className='flex justify-around mt-10 gap-2'>
              <div className='relative flex flex-col items-center group cursor-pointer'>
                <img src={Durango} alt="Durango" className='w-[85%] h-full transition-opacity duration-200 ease-in-out group-hover:opacity-0' />
                <img src={Hover_Durango} alt="Hover Durango" className='w-full h-full absolute inset-0 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 -rotate-[15deg]' />
                <div className='relative'>
                  <p className='absolute text-white font-winkle text-4xl mt-4 group-hover:text-[#B382D9]'>Durango, Dgo.</p>
                  <p className='inset-0 text-white font-winkle text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out mt-4'
                    style={{
                      WebkitTextStroke: '12px #FFFFFF',
                      strokeLinecap: 'round',
                      textShadow: '0 0 5px #FFFFFF, 0 0 10px #FFFFFF, 0 0 15px #FFFFFF'
                    }}
                  >
                    Durango, Dgo.
                  </p>

                </div>
                <div className='absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                  <img src={Star} alt="Star" className='absolute bottom-[300px] right-[270px] transform' />
                  <img src={Star} alt="Star" className='absolute bottom-[280px] right-[55px] transform' />
                  <img src={Star} alt="Star" className='absolute bottom-[130px] right-[0px] transform' />
                  <img src={BigStar} alt="Star" className='absolute bottom-[95px] right-[15px] transform' />
                </div>
              </div>

              <div className='relative flex flex-col items-center group cursor-pointer'>
                <img src={Tampico} alt="Tampico" className='w-[80%] h-full transition-opacity duration-200 ease-in-out group-hover:opacity-0' />
                <img src={Hover_Tampico} alt="Hover Tampico" className='w-full h-full absolute inset-0 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 rotate-[13deg]' />
                <div className='relative'>
                  <p className='absolute text-white font-winkle text-4xl mt-4 group-hover:text-[#FFB481]'>Tampico, Tamps.</p>
                  <p className='inset-0 text-white font-winkle text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out mt-4'
                    style={{
                      WebkitTextStroke: '12px #FFFFFF',
                      strokeLinecap: 'round',
                      textShadow: '0 0 5px #FFFFFF, 0 0 10px #FFFFFF, 0 0 15px #FFFFFF'
                    }}
                  >
                    Tampico, Tamps.
                  </p>
                </div>
                <div className='absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                  <img src={Star} alt="Star" className='absolute bottom-[390px] right-[168px] transform' />
                  <img src={Star} alt="Star" className='absolute bottom-[270px] right-[10px] transform' />
                  <img src={Star} alt="Star" className='absolute bottom-[150px] right-[235px] transform' />
                  <img src={BigStar} alt="Star" className='absolute bottom-[100px] right-[245px] transform' />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Quinta Sección */}
      <Chaimzn_section/>


    </div>
  )
}

export default Home
