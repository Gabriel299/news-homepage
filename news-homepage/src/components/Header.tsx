import { useRef, useState } from "react";
import HeaderBtn from "./HeaderBtn";

function Header() {
  const [position, setPosition] = useState<string>("-right-65");
  const navRef = useRef<HTMLUListElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const btnOpenRef = useRef<HTMLButtonElement>(null)

  function opacity() {
    divRef.current?.classList.remove("invisible")
  }

  function iconOpen() {
    btnOpenRef.current?.classList.toggle("hidden")
  }

  function menu(position: string) {
    navRef.current?.classList.toggle("h-[2000px]");
    setPosition(position)
    if (divRef.current?.classList[divRef.current?.classList.length - 1] === "invisible") {
      iconOpen()
      setTimeout(() => {
        opacity()
      }, 350)
    } else {
      divRef.current?.classList.add("invisible")
      setTimeout(() => {
        iconOpen()
      }, 350)
    }
  }

  return (
    <header className="col-span-3 flex justify-between items-center mb-10">
      <img src="../src/img/logo.svg" alt="" />

      <div ref={divRef} className="bg-gray-900 opacity-50 w-[35%] absolute top-0 left-0 h-[2000px] md:h-0 invisible" onClick={() => menu("-right-65")}></div>

      <button ref={btnOpenRef} type="button" onClick={() => menu("right-0")} className="md:hidden">
        <img src="../src/img/icon-menu.svg" alt="" />
      </button>

      <nav ref={navRef} className={`flex flex-col absolute bg-white w-[65%] md:relative md:w-0 top-12 md:top-0 md:right-0 px-5 md:px-0 transition-all ease-in duration-300 ${position}`}>
        <button type="button" onClick={() => menu("-right-65")} className="self-end">
          <img src="../src/img/icon-menu-close.svg" alt="" />
        </button>

        <ul className="flex flex-col md:flex-row text-black md:text-paragraph text-2xl md:text-sm mt-32 md:mt-5 ml-1.5 md:right-102 gap-8 md:gap-[2.2rem] w-1/2 md:w-auto md:h-auto h-screen md:relative">
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