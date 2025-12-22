interface MyFooterCardProps {
  imgSrc: string;
  firstTitle: string;
  secondTitle: string;
  paragraph: string;
}

function FooterCard({ imgSrc, firstTitle, secondTitle, paragraph }: MyFooterCardProps) {
  return (
    <div 
      className="col-span-1 flex gap-6 mb-8 lg:leading-7 xl:leading-9">
      
      <img 
        src={imgSrc} 
        alt={firstTitle}
        width={85} 
        height={110}/>

      <div>
        
        <h4 
          className="text-3xl font-bold text-soft-red">
            {firstTitle}
        </h4>
        <a 
          href="" 
          className="font-bold hover:text-soft-red">
            {secondTitle}
        </a>
        <p 
          className="text-sm lg:leading-5 xl:leading-6">
            {paragraph}
        </p>

      </div>

    </div>
  );
}

export default FooterCard;