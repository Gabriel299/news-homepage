import FooterCard from "./FooterCard";

function Footer() {
  return (
    <>
      <FooterCard 
        imgSrc="../src/img/image-retro-pcs.jpg"
        firstTitle="01"
        secondTitle="Reviving retro PCs"
        paragraph="What Happens when hold PCs are given modern upgrades?"
      />
      <FooterCard 
        imgSrc="../src/img/image-top-laptops.jpg"
        firstTitle="02"
        secondTitle="Top 10 Laptops of 2022"
        paragraph="Our best picks for various and budgets."
      />
      <FooterCard 
        imgSrc="../src/img/image-gaming-growth.jpg"
        firstTitle="03"
        secondTitle="The Growth of gaming"
        paragraph="How to the pandemic has speaked fresh opportunities"
      />
    </>
  );
}

export default Footer;