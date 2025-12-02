import HeaderBtn from "./HeaderBtn";

function Header() {
  return (
    <header className="col-span-3 flex justify-between items-center mb-10">
      <img src="../src/img/logo.svg" alt="" />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12 md:hidden">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <ul className="hidden md:flex gap-[2.2rem] md:text-paragraph">
        <HeaderBtn btnTitle="Home" />
        <HeaderBtn btnTitle="News" />
        <HeaderBtn btnTitle="Popular" />
        <HeaderBtn btnTitle="Trending" />
        <HeaderBtn btnTitle="Categories" />
      </ul>
    </header>
  );
}

export default Header;