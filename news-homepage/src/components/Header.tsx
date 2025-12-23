import { useState } from "react";
import HeaderBtn from "./HeaderBtn";
import HeaderMenuBtn from "./HeaderMenuBtn";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className="col-span-3 flex justify-between items-center mb-10">

      {/* LOGO DEL SITO */}
      <img
        src="/img/logo.svg"
        alt="Logo"
      />
      {/* OVERLAY */}
      <div
        className={`bg-gray-900 w-[35%] lg:w-1/2 absolute top-0 left-0 h-[1800px] xl:h-0 ${!isOpen ? "opacity-0" : "opacity-50 transition-all ease-in duration-400 delay-200 lg:delay-300"}`}
        onClick={toggleMenu}>
      </div>

      {/* PULSANTE PER APRIRE IL MENÙ LATERALE */}
      <HeaderMenuBtn
        toggleMenu={toggleMenu}
        className={`right-0 ${isOpen && "invisible transition-all ease-in duration-200"} xl:hidden`}
        src="/img/icon-menu.svg"
        alt="Open menu"
      />

      {/* MENÙ DI NAVIGAZIONE */}
      <nav
        className={`bg-white flex flex-col absolute xl:relative ${isOpen ? "right-0 h-[1700px]" : "-right-200"} top-12 xl:top-0 xl:right-0 w-[65%] lg:w-1/2 xl:w-0 px-5 xl:px-0 transition-all ease-in duration-350`}>

        {/* PULSANTE PER CHIUDERE IL MENÙ LATERALE */}
        <HeaderMenuBtn
          toggleMenu={toggleMenu}
          className="self-end"
          src="/img/icon-menu-close.svg"
          alt="Close menu"
        />

        {/* LINK DEL MENÙ DI NAVIGAZIONE */}
        <ul
          className="flex flex-col xl:flex-row gap-8 xl:gap-[2.2rem] text-black xl:text-paragraph text-2xl xl:text-sm mt-32 xl:mt-5 ml-1.5 xl:right-102 w-1/2 xl:w-auto h-screen xl:h-auto xl:relative">

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