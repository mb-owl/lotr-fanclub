function About() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[50vh] py-14 px-4 text-center rounded-xl shadow-lg"
      style={{
        background: "var(--color-custom-green-spring)",
        color: "var(--color-custom-night-rider)",
        border: "2px solid var(--color-custom-shadow)",
        boxShadow: "0 8px 32px 0 rgba(33,42,41,0.18)",
      }}
    >
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg"
        style={{
          color: "var(--color-custom-mantle)",
          textShadow: "1px 1px 8px var(--color-custom-shadow)",
        }}
      >
        About Our Fan Club
      </h2>
      <p
        className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-4"
        style={{ color: "var(--color-custom-bison-hide)" }}
      >
        Founded in the year 2025 of the Fourth Age, our fan club is a fellowship
        of Tolkien enthusiasts...
      </p>
      <p
        className="text-lg md:text-xl max-w-2xl mx-auto"
        style={{ color: "var(--color-custom-warm-gray)" }}
      >
        Our mission is to share knowledge, organize events, and keep the spirit
        of Middle-earth alive.
      </p>
    </section>
  );
}

export default About;
