function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      
      {/* Hero Image */}
      <div className="w-full max-w-4xl mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
          alt="Hours Restaurant"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Text */}
      <div className="max-w-3xl text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Welcome to Hours, where great food meets a warm and welcoming atmosphere.
          We believe that every meal should be a memorable experience. Our chefs use fresh,
          high-quality ingredients to create delicious dishes that satisfy every taste.
          Whether you're here for a quick bite or a relaxing dinner, Hours is the perfect
          place to enjoy good food at any time of the day.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-2xl text-center">
        <div className="bg-white/5 rounded-2xl p-6">
          <p className="text-3xl font-bold text-red-400">50+</p>
          <p className="text-gray-400 text-sm mt-1">Menu Items</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-6">
          <p className="text-3xl font-bold text-red-400">5k+</p>
          <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-6">
          <p className="text-3xl font-bold text-red-400">3+</p>
          <p className="text-gray-400 text-sm mt-1">Years Open</p>
        </div>
      </div>

    </section>
  );
}

export default About;