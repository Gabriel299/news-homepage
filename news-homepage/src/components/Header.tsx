function Header() {
  return (
    <header className="flex justify-between items-center mb-16 col-span-3">
      <img src="../src/img/logo.svg" alt="" />
      <ul className="flex gap-[2.2rem] text-paragraph">
        <li className="hover:text-soft-red"><a href="">Home</a></li>
        <li className="hover:text-soft-red"><a href="">News</a></li>
        <li className="hover:text-soft-red"><a href="">Popular</a></li>
        <li className="hover:text-soft-red"><a href="">Trending</a></li>
        <li className="hover:text-soft-red"><a href="">Categories</a></li>
      </ul>
    </header>
  );
}

export default Header;