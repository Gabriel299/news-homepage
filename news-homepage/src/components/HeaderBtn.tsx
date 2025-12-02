interface MyBtnTitleProps {
  btnTitle: string;
}

function HeaderBtn({btnTitle}: MyBtnTitleProps) {
  return ( 
    <>
    <li className="hover:text-soft-red"><a href="">{btnTitle}</a></li>
    </>
   );
}

export default HeaderBtn;