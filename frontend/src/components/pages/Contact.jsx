function Contact() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[40vh] py-14 px-4 text-center rounded-xl shadow-lg"
      style={{
        background: "var(--color-custom-lily)",
        color: "var(--color-custom-rosewood)",
        border: "2px solid var(--color-custom-shadow)",
        boxShadow: "0 8px 32px 0 rgba(33,42,41,0.18)",
      }}
    >
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg"
        style={{
          color: "var(--color-custom-plum)",
          textShadow: "1px 1px 8px var(--color-custom-shadow)",
        }}
      >
        Contact Us
      </h2>
      <p
        className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-4"
        style={{ color: "var(--color-custom-mandys-pink)" }}
      >
        If you have any questions, feel free to reach out!
      </p>
    </section>
  );
}

export default Contact;
