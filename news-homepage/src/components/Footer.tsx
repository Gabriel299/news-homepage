import FooterCard from "./FooterCard";

// Immagini
import retroPcs from '/img/image-retro-pcs.jpg';
import topLaptops from '/img/image-top-laptops.jpg';
import gamingGrowth from '/img/image-gaming-growth.jpg';

function Footer() {
  return (
    <>
      <FooterCard 
        imgSrc={retroPcs}
        firstTitle="01"
        secondTitle="Reviving retro PCs"
        paragraph="What Happens when hold PCs are given modern upgrades?"
      />
      <FooterCard 
        imgSrc={topLaptops}
        firstTitle="02"
        secondTitle="Top 10 Laptops of 2022"
        paragraph="Our best picks for various and budgets."
      />
      <FooterCard 
        imgSrc={gamingGrowth}
        firstTitle="03"
        secondTitle="The Growth of gaming"
        paragraph="How to the pandemic has speaked fresh opportunities"
      />
    </>
  );
}

export default Footer;