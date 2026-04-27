import bg from '../assets/download.jpg'
function Hero(){
    return(
        <main className="relative flex justify-center items-center bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
Welcome to Hours</h1> <p className="text-gray-300 text-lg mb-6">Delicious food, anytime you want</p>

            <button className="bg-red-500 px-6 py-3 rounded-full hover:bg-red-600 transition duration-300 shadow-lg">Order Now</button></div>
        </main>
    );
};
export default Hero;