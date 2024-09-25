import React from 'react'

const Chaimzn_section = () => {
    return (
        <div>
            {/* Quinta Sección */}
            <div className='h-[70vh] flex items-center justify-center relative'>

                {/* Fondo de color sólido y transparente (afectado por las curvas) */}
                <div className="absolute inset-0 bg-[#FAF6EF] bg-hbg5 bg-opacity-80"></div>

                {/* Contenido de la sección */}
                <div className='max-w-screen-xl z-10'>
                    <div className='text-start'>
                        <h1 className='text-7xl font-sanggar text-[#FFB8CB]'>
                            Te ayudamos con la <br /> identidad visual de tu marca
                        </h1>
                        <div className='gap-4 mt-5 flex'>
                            <p className='text-[#FF96B2] font-winkle text-4xl mt-4 mr-32'>
                                Quieres un logo precioso que refleje lo que quieres transmitir y sitios web hermosos como este en donde puedes ofrecer tus productos y servicios?
                            </p>
                            {/* Botón ajustado */}
                            <button className='gradient-button1 text-white font-winkle text-2xl py-2 px-6 rounded-full mt-24 whitespace-nowrap'>
                                Comienza a crear tu marca
                            </button>
                        </div>
                    </div>
                </div>

                {/* Inverted Waves al final de la sección */}
                <div className="absolute inset-x-0 bottom-0 overflow-hidden w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 100" className="scale-y-[-1] animate-waves" fill="none">
                        <path d="M500 4c-125 0-125 96-250 96S125 4 0 4V0h1000v4c-125 0-125 96-250 96S625 4 500 4Z" fill="#FFF" />
                        <path d="M1500 4c-125 0-125 96-250 96S1125 4 1000 4V0h1000v4c-125 0-125 96-250 96S1625 4 1500 4Z" fill="#FFF" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Chaimzn_section