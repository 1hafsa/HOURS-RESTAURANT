import bg from '../assets/download.jpg'

function Hero() {
    return (
        <main
            className="relative flex justify-center items-center bg-cover bg-center bg-no-repeat h-screen"
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
                <button className="bg-red-500 px-8 py-3 rounded-full hover:bg-red-600 transition duration-300 shadow-lg text-lg font-semibold">
                    Order Now
                </button>
            </div>
        </main>
    );
}

export default Hero;