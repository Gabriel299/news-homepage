function Main() {
  return (
    <main className="grid grid-cols-2 grid-template-rows:repeat(2, auto) col-span-2 row-span-2 gap-y-6 gap-x-4 w-[650px] mb-16">
      <img src="../src/img/image-web-3-desktop.jpg" alt="" className="col-span-2" height={250} width={650}/>
      <h1 className="font-bold text-5xl">The Bright Future of Web 3.0?</h1>
      <section>
        <p className="text-sm leading-relaxed mb-8">We dive into the next evolution of the web that claims to put the power of the platforms bacj into the hands of the people. But is really fulfilling its promise?</p>
        <a href="" className="bg-red-700 px-[1.6rem] py-[0.8rem]">READ MORE</a>
      </section>
    </main>
  );
}

export default Main;