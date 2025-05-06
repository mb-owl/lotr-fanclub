function Home() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center rounded-xl shadow-lg"
      style={{
        background:
          "linear-gradient(rgba(32,42,41,0.7), rgba(32,42,41,0.7)), url('/src/assets/rivendell2.jpg') center/cover no-repeat",
        color: "var(--color-custom-tahuna-sands)",
        border: "2px solid var(--color-custom-shadow)",
        boxShadow: "0 8px 32px 0 rgba(33,42,41,0.25)",
      }}
    >
      <h2
        className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
        style={{
          color: "var(--color-custom-di-serria)",
          textShadow: "1px 1px 8px var(--color-custom-shadow)",
        }}
      >
        Welcome to the Fellowship
      </h2>
      <p
        className="text-2xl md:text-3xl font-medium max-w-2xl mx-auto mb-4"
        style={{ color: "var(--color-custom-sandstone)" }}
      >
        A sanctuary for all fans of Middle-earth.
        <br />
        <span style={{ color: "var(--color-custom-mantle)" }}>
          Join us as we celebrate the lore of Tolkien!
        </span>
      </p>
    </section>
  );
}
export default Home;
