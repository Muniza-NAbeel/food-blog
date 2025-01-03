import React from "react";

export default function ContactPage() {
  return (
    <div
    className="min-h-screen flex items-center justify-center p-6"
    style={{
      backgroundImage: "url('/contact.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="max-w-xl w-full bg-slate-700 bg-opacity-50 rounded-lg shadow-lg p-10 mt-20 mb-10">
      <h1 className="text-4xl font-bold text-slate-100 text-center mb-6 text-shadow-lg">
        Contact Us
      </h1>
      <p className="text-slate-100 text-center text-lg mb-2 text-shadow-lg">
        Got a question, feedback, or just want to say hi? We&apos;d love to hear from you!
      </p>
  
      {/* Contact Form */}
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="block w-full p-3 border border-gray-200 rounded-lg shadow-lg"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message here"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-slate-950 text-white rounded-lg shadow-md hover:bg-slate-800 active:bg-slate-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
  

  );
}