function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center rounded-2xl shadow-lg bg-gradient-to-br from-sage-100 via-slate-100 to-stone-100 border border-slate-200">
      <div className="w-full max-w-xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-normal mb-4 text-gray-900 tracking-wide drop-shadow">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-serif font-normal mb-6 text-gray-900 tracking-wide drop-shadow">
          Page Not Found
        </h2>
        <p className="text-xl md:text-2xl font-normal max-w-xl mx-auto mb-4 text-slate-800">
          You shall not pass!
        </p>
      </div>
    </section>
  );
}
export default NotFound;
