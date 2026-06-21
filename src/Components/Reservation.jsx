export default function Reservation({ isOpen, setIsOpen , form, setForm, submitted, setSubmitted,handleChange, handleSubmit}) { 
    return (
        (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 w-full max-w-md relative">
            
            {/* Close button */}
            <button
              onClick={() => { setIsOpen(false); setSubmitted(false); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <p className="text-4xl mb-4">🎉</p>
                <h3 className="text-xl font-bold mb-2">Reservation Confirmed!</h3>
                <p className="text-gray-400">We'll see you soon, {form.name}!</p>
                <button
                  onClick={() => { setIsOpen(false); setSubmitted(false); }}
                  className="mt-6 bg-red-500 px-6 py-2 rounded-full hover:bg-red-600 transition"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-6 text-center">Reserve a Table</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-1 block">Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-400"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-1 block">Email</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      className="w-full bg-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-400"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-sm mb-1 block">Guests</label>
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="w-full bg-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-red-400"
                      >
                        {[1,2,3,4,5,6,7,8].map(n => (
                          <option key={n} value={n} className="bg-[#111]">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm mb-1 block">Date</label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full bg-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-red-400"
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
      )
    );
}