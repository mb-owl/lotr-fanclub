import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center rounded-2xl shadow-lg bg-gradient-to-br from-sage-100 via-slate-100 to-stone-100 border border-slate-200">
    <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-normal mb-6 text-gray-900 tracking-wide drop-shadow">Get in Touch!</h2>
      <ContactForm />
    </div>
    </section>
  );
}

export default ContactPage;