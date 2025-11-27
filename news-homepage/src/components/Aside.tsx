import AsideCard from "./AsideCard";

function Aside() {
  return ( 
    <aside className="py-8 px-6 row-span-2 bg-blue-700 mb-13.25">
      <h1 className="mb-3.5 text-4xl font-bold">New</h1>
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