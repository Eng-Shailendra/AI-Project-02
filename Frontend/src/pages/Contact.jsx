import React from "react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiMessageSquare,
  FiHelpCircle,
} from "react-icons/fi";

const Contact = () => {
  return (
    <main className="min-h-screen  from-black via-zinc-900 to-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-full text-sm">
            <FiMessageSquare />
            Contact Us
          </span>

          <h1 className="text-5xl font-black mt-6 mb-4">
            Let's Build Something Great
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Have questions, feedback, or feature requests? We'd love to hear
            from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <FiMail size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-xl">Email Support</h3>
                  <p className="text-zinc-400">support@interviewai.com</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400">
                  <FiHelpCircle size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-xl">Help Center</h3>
                  <p className="text-zinc-400">
                    Usually responds within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="font-bold text-xl mb-5">Connect With Us</h3>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition"
                >
                  <FiGithub size={22} />
                </a>

                <a
                  href="#"
                  className="p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition"
                >
                  <FiLinkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-zinc-300">Full Name</label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-4 py-4 outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-zinc-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-4 py-4 outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-zinc-300">Message</label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-4 py-4 outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-4 rounded-2xl transition flex items-center justify-center gap-3"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
