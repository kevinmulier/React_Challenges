const PendingSkeleton = () => {
  return (
    <section className="flex items-center justify-center w-full gap-8 p-4 sm:px-10 sm:py-6 rounded-2xl max-sm:flex-col bg-gradient-to-br from-base-100 to-base-300">
      <div className="w-20 h-20 rounded-full aspect-square skeleton"></div>
      <article className="flex flex-col gap-2">
        <div className="w-24 h-4 skeleton"></div>
        <div className="w-20 h-4 mb-4 skeleton"></div>
        <div className="w-40 h-4 skeleton"></div>
        <div className="w-40 h-4 skeleton"></div>
      </article>
    </section>
  );
};

export default PendingSkeleton;
