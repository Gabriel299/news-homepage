function Header() {
  return (
    <header className="flex justify-between items-center  mb-8">
      <img src="../src/img/logo.svg" alt="" />
      <ul className="flex gap-[2.2rem]">
        <li>Home</li>
        <li>News</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </header>
  );
}

export default Header;