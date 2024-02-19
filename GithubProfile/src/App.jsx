import { Folder, Heart, MessageCircle, UserCheck, View } from 'lucide-react';

function App() {
  return (
    <>
      <section className="flex items-center justify-center max-w-xl gap-8 p-4 m-2 sm:px-10 sm:py-6 rounded-2xl max-sm:flex-col bg-gradient-to-br from-base-100 to-base-300">
        <img
          src=""
          alt=""
          className="sm:w-4/12 border-2 sm:border-[16px] rounded-full aspect-square border-neutral"
        />
        <article className="flex flex-col sm:w-8/12">
          <h1 className="text-lg font-semibold">Shirley C. Ouzts</h1>
          <span className="text-sm font-thin text-opacity-70 text-info">
            Frontend developer
          </span>
          <p className="mt-2 mb-6 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo
            suscipit, placeat odio, numquam.
          </p>
          <div className="flex gap-8 text-xs">
            <span className="flex items-center gap-1">
              <UserCheck />
              2482
            </span>
            <span className="flex items-center gap-1">
              <Folder />
              1473
            </span>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
