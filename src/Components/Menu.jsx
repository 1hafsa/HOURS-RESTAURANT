import Card from "./Card";
import burger from '../assets/burger.jpg'
import grill from '../assets/grill.jpg'
import alfredo from '../assets/alfredo.jpg'
import pizza from '../assets/pizza.jpg'
import salad from '../assets/salad.jpg'
import cake from '../assets/cake.jpg'
import { useState } from "react";
function Menu (){
    const menuItems = [
  {
    img:burger,
    name: "Classic Burger",
    price: "80.99",
    category: 'Burgers',
    desc: "Juicy beef burger with fresh lettuce, tomato, and our special sauce"
  },
  {
    img:grill,
    name: "Grilled Chicken",
    price: "100.99",
    category: 'Chicken',
    desc: "Tender grilled chicken served with vegetables and rice"
  },
  { img:alfredo,
    name: "Pasta Alfredo",
    price: "90.50",
    category: 'Pasta',
    desc: "Creamy Alfredo pasta topped with parmesan cheese"
  },
  { img:pizza,
    name: "Margherita Pizza",
    price: "110.00",
    category: 'Pizza',
    desc: "Fresh mozzarella, tomato sauce, and basil on a crispy crust"
  },
  {img:salad,
    name: "Caesar Salad",
    price: "70.50",
    category: 'Salad',
    desc: "Crisp lettuce, croutons, parmesan, and Caesar dressing"
  },
  {
    img:cake,
    name: "Chocolate Cake",
    price: "50.00",
    category: 'Cake',
    desc: "Rich and moist chocolate cake with a smooth ganache"
  }
];
const categories = ['All', 'Burgers', 'Chicken', 'Pasta', 'Pizza', 'Salad', 'Cake'];
const [filter, setFilter] = useState('All');
const filtered = filter === 'All' ? menuItems : menuItems.filter(i => i.category === filter);
    return(<>
      <div className="flex flex-wrap gap-3 justify-center pt-8 px-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm transition duration-300 ${
              filter === cat
                ? 'bg-red-500 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
     
     <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 p-8">
      
        {filtered.map((e,index)=><Card key={index} img={e.img} name={e.name} price={e.price} desc={e.desc}/>)}
        </div></>
       
    );
};
export default Menu;