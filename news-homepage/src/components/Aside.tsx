import AsideCard from "./AsideCard";

function Aside() {
  return ( 
    <aside className="row-span-2 bg-dark-blue text-off-white px-6 py-6 mb-13.25">
      <h1 className="text-soft-orange text-4xl font-bold mb-5">New</h1>
      <section>
        <AsideCard 
          title = "Hydrogen vs Electic cars"
          paragraph = "Will hidrogen-fueled carsever catch up to EVs?"
          hr
        />
        <AsideCard 
          title = "The Downsides of AI Artistry"
          paragraph = "What are the possible adverse effects on-demand AI image generator?"
          hr
        />
        <AsideCard 
          title = "Is VC Funding Drying Up?"
          paragraph = "Private funding by VC firms is down 50% YOY. We take a look at what that means."
          hr = {false}
        />
      </section>
    </aside>
   );
}

export default Aside;