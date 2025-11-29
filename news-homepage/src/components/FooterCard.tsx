interface MyFooterCardProps {
  imgSrc: string;
  firstTitle: string;
  secondTitle: string;
  paragraph: string;
}

function FooterCard({ imgSrc, firstTitle, secondTitle, paragraph }: MyFooterCardProps) {
  return (
    <div className="col-span-1 flex gap-6 leading-9">
      <img src={imgSrc} alt="" width={85} height={110}/>
      <div>
        <h4 className="font-bold text-3xl text-soft-red">{firstTitle}</h4>
        <a href="" className="font-bold hover:text-soft-red">{secondTitle}</a>
        <p className="text-sm leading-6">{paragraph}</p>
      </div>
    </div>
  );
}

export default FooterCard;