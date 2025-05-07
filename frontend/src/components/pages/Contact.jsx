import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-normal mb-6 text-gray-900 tracking-wide drop-shadow">Get in Touch!</h2>
      <ContactForm />
    </div>
  );
}

export default ContactPage;