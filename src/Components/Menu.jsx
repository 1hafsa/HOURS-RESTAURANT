import Card from "./Card";
import burger from '../assets/burger.jpg'
import grill from '../assets/grill.jpg'
import alfredo from '../assets/alfredo.jpg'
import pizza from '../assets/pizza.jpg'
import salad from '../assets/salad.jpg'
import cake from '../assets/cake.jpg'
function Menu (){
    const menuItems = [
  {
    img:burger,
    name: "Classic Burger",
    price: "80.99",
    desc: "Juicy beef burger with fresh lettuce, tomato, and our special sauce"
  },
  {
    img:grill,
    name: "Grilled Chicken",
    price: "100.99",
    desc: "Tender grilled chicken served with vegetables and rice"
  },
  { img:alfredo,
    name: "Pasta Alfredo",
    price: "90.50",
    desc: "Creamy Alfredo pasta topped with parmesan cheese"
  },
  { img:pizza,
    name: "Margherita Pizza",
    price: "110.00",
    desc: "Fresh mozzarella, tomato sauce, and basil on a crispy crust"
  },
  {img:salad,
    name: "Caesar Salad",
    price: "70.50",
    desc: "Crisp lettuce, croutons, parmesan, and Caesar dressing"
  },
  {
    img:cake,
    name: "Chocolate Cake",
    price: "50.00",
    desc: "Rich and moist chocolate cake with a smooth ganache"
  }
];
    return(
     <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {menuItems.map((e,index)=><Card key={index} img={e.img} name={e.name} price={e.price} desc={e.desc}/>)}
        </div>
       
    );
};
export default Menu;