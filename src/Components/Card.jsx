
function Card(props){
    return(
        <section className='flex flex-col justify-center  items-center gap-3 p-4 border-1 border-dark  rounded-xl  overflow-hidden shadow-lg hover:scale-105 transition duration-300'>
            <img src={`${props.img}`}className='w-full h-40 object-cover rounded-lg rounded-lg'/>
        <h3 className="text-lg text-white font-mono font-bold ">{props.name}</h3>
        
        <p className="text-justify">{props.desc}</p>
        <p className=" text-white bg-amber-950 border-2 border-amber-950  rounded-full px-4 ">{props.price} dh</p>
        </section>
    );
};

export default Card;