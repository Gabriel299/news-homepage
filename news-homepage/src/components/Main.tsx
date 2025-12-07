function Main() {
  return (
    <main className="col-span-2 row-span-2 flex md:grid flex-col md:grid-cols-2 md:grid-template-row:repeat(2,auto) md:w-[650px] md:gap-4 mb-16">
      <picture className="col-span-2 mb-8">
        <source media="(max-width:768px)" srcSet="../src/img/image-web-3-mobile.jpg"/>
        <img src="../src/img/image-web-3-desktop.jpg" alt="" width={650}/>
      </picture>
      <h1 className="text-5xl font-bold text-dark-blue mb-6">The Bright Future of Web 3.0?</h1>
      <section>
        <p className="text-paragraph leading-7 mb-9 md:text-sm md:leading-relaxed">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is really fulfilling its promise?</p>
        <a href="" className="bg-soft-red font-bold tracking-[0.3rem] md:tracking-[0.2rem] px-[1.6rem] py-[0.8rem] hover:bg-dark-blue hover:text-off-white">READ MORE</a>
      </section>
    </main>
  );
}

export default Main;