function App() {
  return (
    <>
      <section className="flex items-center justify-center max-w-xl gap-8 px-10 py-6 m-2 rounded-2xl max-sm:flex-col bg-gradient-to-br from-base-100 to-base-300">
        <img
          src=""
          alt=""
          className="w-4/12 border-[16px] rounded-full aspect-square border-neutral"
        />
        <article className="flex flex-col w-8/12">
          <h1 className="text-lg font-semibold">Shirley C. Ouzts</h1>
          <span className="text-sm font-thin text-opacity-70 text-info">
            Frontend developer
          </span>
          <p className="mt-2 mb-6 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo
            suscipit, placeat odio, numquam.
          </p>
          <div className="flex gap-3">
            <span>EYE 2482</span>
            <span>HEART 1473</span>
            <span>COMM 642</span>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
