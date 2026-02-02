"use client";
import React, { useState } from "react";

const WhatsappForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    services: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "7208553533"; 

    const text = `Hello Rushikesh 👋

🔹 Name: ${form.name}
📧 Email: ${form.email}
🛠 Services: ${form.services}

💬 Message:
${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 max-w-3xl mx-auto text-white"
    >
      {/* Name */}
      <div className="py-8 border-t border-white/20">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          What&apos;s Your Name?
        </h2>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Rushikesh Mhatre *"
          className="w-full bg-transparent text-white placeholder:text-white/40 outline-none text-lg md:text-xl"
        />
      </div>

      {/* Email */}
      <div className="py-8 border-t border-white/20">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          What&apos;s Your Email?
        </h2>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="hrishi12@gmail.com *"
          className="w-full bg-transparent text-white placeholder:text-white/40 outline-none text-lg md:text-xl"
        />
      </div>

      {/* Services */}
      <div className="py-8 border-t border-white/20">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          What services are you looking for?
        </h2>
        <input
          type="text"
          name="services"
          value={form.services}
          onChange={handleChange}
          required
          placeholder="web-design, web-development..."
          className="w-full bg-transparent text-white placeholder:text-white/40 outline-none text-lg md:text-xl"
        />
      </div>

      {/* Message */}
      <div className="py-8 border-t border-white/20 border-b border-white/20">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Your Message
        </h2>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-transparent text-white outline-none text-lg md:text-xl resize-none border border-white/30 rounded-xl px-4 py-3 focus:border-white/60 transition"
        />
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <button
          type="submit"
          className="px-10 py-4 rounded-full bg-green-500 text-black font-semibold text-lg hover:scale-105 transition"
        >
          Send on WhatsApp →
        </button>
      </div>
    </form>
  );
};

export default WhatsappForm;
