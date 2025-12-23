function Main() {
  return (
    <main 
      className="col-span-2 row-span-2 flex xl:grid flex-col xl:grid-cols-2 xl:grid-template-row:repeat(2,auto) xl:w-[650px] xl:gap-4 mb-16">
      
      {/* IMMAGINE NEWS */}
      <picture
        className="col-span-2 mb-2 self-center">
        <source
          media="(max-width:768px)"
          srcSet="/img/image-web-3-mobile.jpg"
        />
        <img 
          src="/img/image-web-3-desktop.jpg" 
          alt="Headline news" 
          width={650}
        />
      </picture>

      {/* TITOLO NEWS */}
      <h1 
        className="text-5xl font-bold text-dark-blue mb-6">
          The Bright Future of Web 3.0?
      </h1>

      {/* BREVE DESCRIZIONE */}
      <section 
        className="lg:flex lg:flex-col xl:block">
        
        <p 
          className="text-paragraph leading-7 mb-9 xl:text-sm xl:leading-relaxed">
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is really fulfilling its promise?
        </p>
        <a 
          href="" 
          className="bg-soft-red font-bold tracking-[0.3rem] xl:tracking-[0.2rem] px-[1.6rem] py-[0.8rem] lg:self-center hover:bg-dark-blue hover:text-off-white">
            READ MORE
        </a>

      </section>

    </main>
  );
}

export default Main;