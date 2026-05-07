
function Card(props){
    return(
        <section className='flex flex-col justify-center items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 bg-white dark:bg-[#1a1a1a]'>
            <img src={`${props.img}`} className='w-full h-40 object-cover rounded-lg'/>
            <h3 className="text-lg text-gray-900 dark:text-white font-mono font-bold">{props.name}</h3>
            <p className="text-justify text-gray-600 dark:text-gray-300">{props.desc}</p>
            <p className="text-white bg-amber-950 border-2 border-amber-950 rounded-full px-4">{props.price} dh</p>
        </section>
    );
}
export default Card;

