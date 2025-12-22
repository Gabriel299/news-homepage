import { useState } from "react";
import HeaderBtn from "./HeaderBtn";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen)
    
  }

  return (
    <header className="col-span-3 flex justify-between items-center mb-10">
      <img src="../src/img/logo.svg" alt="" />

      <div 
        className={`bg-gray-900 w-[35%] lg:w-1/2 absolute top-0 left-0 h-[1800px] xl:h-0 ${!isOpen ? "opacity-0" : "opacity-50 transition-all ease-in duration-400 delay-200"}`} 
        onClick={toggleMenu}
      ></div>

      <button type="button" onClick={toggleMenu} 
        className={`right-0 ${isOpen && "invisible transition-all ease-in duration-200"} xl:hidden`}
      >
        <img src="../src/img/icon-menu.svg" alt="" />
      </button>

      <nav className={`flex flex-col absolute ${isOpen ? "right-0 h-[1700px]" : "-right-200"} bg-white w-[65%] lg:w-1/2 xl:relative xl:w-0 top-12 xl:top-0 xl:right-0 px-5 xl:px-0 transition-all ease-in duration-350`}>
        <button type="button" onClick={toggleMenu} className="self-end">
          <img src="../src/img/icon-menu-close.svg" alt="" />
        </button>

        <ul className="flex flex-col xl:flex-row text-black xl:text-paragraph text-2xl xl:text-sm mt-32 xl:mt-5 ml-1.5 xl:right-102 gap-8 xl:gap-[2.2rem] w-1/2 xl:w-auto xl:h-auto h-screen xl:relative">
          <HeaderBtn btnTitle="Home" />
          <HeaderBtn btnTitle="News" />
          <HeaderBtn btnTitle="Popular" />
          <HeaderBtn btnTitle="Trending" />
          <HeaderBtn btnTitle="Categories" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;