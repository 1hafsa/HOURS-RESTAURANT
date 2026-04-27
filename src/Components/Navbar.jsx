import {Link }from 'react-router-dom';
function Navbar (){
    return(
        <nav className="flex justify-between items-center py-2 px-6 text-white shadow-md" >
            <h1 className="text-2xl font-bold tracking-wide">HOURS</h1>
            <ul className="flex   gap-6 text-sm md:text-base">
                
                <li className="hover:text-red-400 transition "><Link to="/">Home</Link></li>
                <li className="hover:text-red-400 transition"><Link to="/menu">Menu</Link></li>
                <li className="hover:text-red-400 transition"> <Link to="/about">About</Link></li>
                <li className="hover:text-red-400 transition"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};
export default Navbar;
