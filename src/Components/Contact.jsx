import { useState } from 'react';
import PageWrapper from "../Components/PageWrapper";
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', guests: '2', date: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (<PageWrapper>
    <section className="min-h-screen flex flex-col items-center px-6 py-16 gap-12">
      
      <h2 className="text-3xl  text-gray-600 dark:text-gray-300 md:text-4xl font-bold">Contact Us</h2>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Info */}
        <div className="flex flex-col gap-8">
          <div className="bg-gray-100 dark:bg-white/5 rounded-2xl p-6 flex flex-col gap-6">
            <div>
              <h3 className="text-red-400 font-semibold mb-1">📍 Address</h3>
              <p className="text-gray-600 dark:text-gray-300">123 Main Street, Marrakech, Morocco</p>
            </div>
            <div>
              <h3 className="text-red-400 font-semibold mb-1">📞 Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+212 6 12 34 56 78</p>
            </div>
            <div>
              <h3 className="text-red-400 font-semibold mb-1">🕐 Opening Hours</h3>
              <p className="text-gray-600 dark:text-gray-300">Monday – Friday: 10:00 AM – 10:00 PM</p>
              <p className="text-gray-600 dark:text-gray-300">Saturday – Sunday: 12:00 PM – 12:00 AM</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className=" bg-gray-100 dark:bg-white/5 rounded-2xl p-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-8">
              <p className="text-4xl">🎉</p>
              <h3 className="text-xl font-bold">Reservation Confirmed!</h3>
              <p className="text-gray-500 dark:text-gray-400">We'll see you soon, {form.name}!</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-red-400 underline text-sm"
              >
                Make another reservation
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold mb-6">Reserve a Table</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-gray-500 dark:text-gray-400 text-sm mb-1 block">Your Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-gray-100 dark:bg-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                <div>
                  <label className="text-gray-500 dark:text-gray-400 text-sm mb-1 block">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className="w-full bg-gray-100 dark:bg-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-500 dark:text-gray-400 text-sm mb-1 block">Guests</label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full bg-gray-100 dark:bg-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-red-400"
                    >
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n} className="bg-[#111]">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-500 dark:text-gray-400 text-sm mb-1 block">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-gray-100 dark:bg-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-red-400"
                    />
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-red-500 hover:bg-red-600 transition duration-300 rounded-xl py-3 font-semibold text-lg mt-2"
                >
                  Reserve Now
                </button>
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  </PageWrapper>);
}

export default Contact;