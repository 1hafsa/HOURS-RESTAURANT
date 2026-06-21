import bg from '../assets/download.jpg'
import { useState } from 'react';
import Reservation from './Reservation';
import emailjs from '@emailjs/browser';
import { ServiceID, TemplateID, PublicKey } from '../emailConfig';
import PageWrapper from "../Components/PageWrapper";
function Hero() {
    const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', guests: '2', date: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.date) return;
    emailjs.send(ServiceID, TemplateID, form, PublicKey)
    setSubmitted(true);
    setForm({ name: '', email: '', guests: '2', date: '' });
  };


    return (<PageWrapper>
        <main
            className="relative flex justify-center items-center bg-cover bg-center bg-no-repeat h-[calc(100vh-64px)]"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="absolute inset-0 bg-black/50 md:bg-black/60"></div>
            <div className="relative text-center px-6 max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                    Welcome to Hours
                </h1>
                <p className="text-gray-300 text-lg md:text-xl mb-8">
                    Delicious food, anytime you want
                </p>
                 <button
            onClick={() => setIsOpen(true)}
            className="bg-red-500 px-8 py-3 rounded-full hover:bg-red-600 transition duration-300 shadow-lg text-lg font-semibold"
          >
            Book a Table
          </button>
            </div>
        </main>
        {isOpen && (
            <Reservation
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                form={form}
                setForm={setForm}
                submitted={submitted}
                setSubmitted={setSubmitted}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        )}
    </PageWrapper>);
}

export default Hero;