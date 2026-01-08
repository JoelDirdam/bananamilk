import { useState, useEffect } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.dropdown-container')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Cerrar el dropdown cuando el usuario hace scroll
    const handleScroll = () => {
      if (window.scrollY > 300) { // Ajusta este valor según lo que consideres "bajar bastante"
        setIsOpen(false);
      }
    };

    document.addEventListener('hover', handleClickOutside);
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <li className="dropdown-container group flex flex-col items-start cursor-pointer min-h-[3rem] leading-none">
      {/* Título que abre/cierra el dropdown */}
      <span
        onClick={handleDropdownToggle}
        className={`cursor-pointer transition duration-300 ${isOpen ? 'text-banana-milk-text-dark' : ''}`}
      >
        Original <br /> Merch
      </span>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute font-quicksand z-[9999] top-20 w-full bg-wishlist2 p-2 text-black bg-opacity-75 transition-all duration-200">
          <ul className="flex flex-col items-start">
            <li className="mb-2">
              <a href="#" className="text-base hover:text-orchid-pink">Todo</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-base hover:text-orchid-pink">Albumes</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-base hover:text-orchid-pink">Dolls</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-base hover:text-orchid-pink">Lightstick</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-base hover:text-orchid-pink">Photocard</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-base hover:text-orchid-pink">Sanrio</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-base hover:text-orchid-pink">Season Greatings</a>
            </li>
            <li>
              <a href="#" className="text-base hover:text-orchid-pink">Other...</a>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default DropdownMenu;
