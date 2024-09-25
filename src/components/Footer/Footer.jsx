import React from 'react';
import Logo5 from '../../assets/footer/Logo5.svg';
import Insta from '../../assets/footer/instagram.svg';
import Face from '../../assets/footer/facebook.svg';
import Whats from '../../assets/footer/whatsapp.svg';

const Footer = () => {
  return (
    <div className="footer text-light text-center p-3">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-8">

        {/* Primer apartado: Logo y derechos reservados */}
        <div className="flex flex-col items-start">
          <img src={Logo5} alt="Logo" className="w-[75%] mb-4" />
          <p className="text-[#B59EE8]">
            © 2024 Durango Dgo. Made by <span className="underline">Chai Manzana</span>
          </p>
          <p className="text-[#EBC2F2] text-sm">
            Developed by Joel Andres V. Madrid
          </p>
          <p className="text-[#EBC2F2] text-sm">
            Designed by Marcela Serrano Gutiérrez
          </p>
        </div>

        {/* Segundo apartado: Contacto */}
        <div className="flex flex-col items-center">
          <button className="bg-[#FFD9E1] text-[#FF6F91] font-winkle text-xl py-2 px-6 rounded-full mb-4">
            Habla con nosotras
          </button>
        </div>

        {/* Tercer apartado: Redes sociales */}
        <div className="flex flex-col items-end">
          <p className="text-[#FF6F91] font-winkle text-lg mb-4">Nuestras redes sociales</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/bananamilk_mx/">
              <img src={Insta} alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/groups/4051747658232587">
              <img src={Face} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://chat.whatsapp.com/LQXYLO1Bx72JdSsKtzOiv1">
              <img src={Whats} alt="WhatsApp" className="w-8 h-8" />
            </a>
          </div>
          {/* Links de políticas y términos */}
          <div className="flex justify-center space-x-8 mt-8">
            <a href="/privacy-policy" className="text-pink-300">Políticas de privacidad</a>
            <a href="/terms-conditions" className="text-pink-300">Términos y condiciones</a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
