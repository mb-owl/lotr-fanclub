import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents form full reload with error
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }
    //TODO: send data to backend (Mod6)**
    console.log("Submitting form...", { name, email, message });
    setStatus("success");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded text-custom-charcoal"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded text-custom-charcoal"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded text-custom-charcoal"
          placeholder="Enter your message"
          rows="4"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
      >
        Send Message
      </button>

      {/* Status messages with aria-live for accessibility */}
      {status === "success" && (
        <div aria-live="polite" className="text-green-500">
          ✔️ Message sent! We'll reply soon, precious.
        </div>
      )}
      {status === "error" && (
        <div aria-live="polite" className="text-red-500">
          ❗ Agh! Your message was intercepted by orcs...try again?
        </div>
      )}
    </form>
  );
};

export default ContactForm;
