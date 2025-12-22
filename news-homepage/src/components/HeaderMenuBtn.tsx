interface MyHeaderBtnProps {
  toggleMenu: () => void
  className: string
  src: string
  alt: string
}

function HeaderMenuBtn({toggleMenu, className, src, alt}: MyHeaderBtnProps) {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      className={className}>

      <img
        src={src}
        alt={alt}
      />

    </button>
  );
}

export default HeaderMenuBtn;