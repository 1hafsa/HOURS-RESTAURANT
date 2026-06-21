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
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0!2d-7.9811!3d31.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
  width="100%"
  height="100%"
  style={{ border: 0, borderRadius: "12px", minHeight: "300px" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
        </div>

      </div>
    </section>
  </PageWrapper>);
}

export default Contact;