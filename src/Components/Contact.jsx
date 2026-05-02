function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center px-6 py-16 gap-8">
      <h2 className="text-3xl text-amber-950 font-mono font-bold">Contact Us</h2>
      <div className="flex flex-col gap-8 w-full max-w-md">
        <div>
          <h3 className="text-lg text-amber-950 font-semibold mb-1">Address:</h3>
          <p className="text-gray-300">123 Main Street, Marrakech, Morocco</p>
        </div>
        <div>
          <h3 className="text-lg text-amber-950 font-semibold mb-1">Phone:</h3>
          <p className="text-gray-300">+212 6 12 34 56 78</p>
        </div>
        <div>
          <h3 className="text-lg text-amber-950 font-semibold mb-1">Opening Hours:</h3>
          <p className="text-gray-300">Monday – Friday: 10:00 AM – 10:00 PM</p>
          <p className="text-gray-300">Saturday – Sunday: 12:00 PM – 12:00 AM</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;