function About() {
  return (
    <section className="flex flex-col items-center min-h-[60vh] py-6 px-4 text-center rounded-2xl shadow-lg bg-gradient-to-br from-sage-100 via-slate-100 to-stone-100 border border-slate-200">
      <div className="w-full max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-normal mb-4 text-gray-900 tracking-wide drop-shadow">
          About Our Fan Club
        </h2>
        <p className="text-xl md:text-2l font-normal max-w-xl mx-auto mb-2 text-slate-800">
          Founded in the year 2025 of the Fourth Age, our fan club is a
          fellowship of Tolkien enthusiasts...
        </p>
        <p className="text-xl md:text-2l font-normal max-w-xl mx-auto mb-2 text-slate-800">
          Our mission is to share knowledge, organize events, and keep the
          spirit of Middle-earth alive.
        </p>
      </div>
    </section>
  );
}

export default About;
