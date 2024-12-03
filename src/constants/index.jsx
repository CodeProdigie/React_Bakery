import buger1 from "../assets/images/food-1.png";
import buger2 from "../assets/images/food-3.png";
import buger3 from "../assets/images/pasta.jpg";
import pizza1 from "../assets/images/food-2.png";
import cheese1 from "../assets/images/food-6.png";
import cheese2 from "../assets/images/food-4.png";
import cheese3 from "../assets/images/image.png";
import soda from "../assets/images/food-5.png";


export const NavItems = [
  {
    menu: "Home",
    href: "#",
  },
  {
    menu: "About",
    href: "#",
  },
  {
    menu: "Products",
    href: "#",
  },
  {
    menu: "Contact",
    href: "#",
  },
];

export const Categories = [
  { id: 1, name: "All" },
  { id: 2, name: "Burger" },
  { id: 3, name: "Pizza" },
  { id: 4, name: "Cheese" },
  { id: 5, name: "Soda" },
];

export const ProductList = [
  {id:"1", name: "Humburger", price: "100", Image:  buger1  },
  {id:"2", name: "Breadburger", price: "120", Image:  buger2  },
  {id:"3", name: "Pastaburger", price: "130", Image:  buger3  },
  {id:"4", name: "PizzaRound", price: "150", Image:  pizza1  },
  {id:"5", name: "Fried Cheese", price: "250", Image:  cheese1 },
  {id:"6", name: "Pancake Cheese", price: "90", Image:  cheese2},
  {id:"7", name: "Biscuit Cheese", price: "60", Image:  cheese3},
  {id:"8", name: "Soda Drink", price: "150", Image:  soda } ,
];


export const DashMenus=[
  {id: "1", name: "Home", classname:"bx bx-home text-2xl text-gray-500 font-medium", destination:"/Adminpanel"},
  {id: "2", name: "Orders", classname:"bx bx-food-menu text-2xl text-gray-500 font-medium", destination:"/Adminpanel/Orders"},
  {id: "3", name: "Add products", classname:"bx bx-shopping-bag text-2xl text-gray-500 font-medium", destination:"/Adminpanel/AddProducts"},
  {id: "4", name: "Delete Products", classname:"bx bx-no-entry text-2xl text-gray-500 font-medium", destination:"/Adminpanel/DeleteProducts"},
  {id: "5", name: "Edit Profile", classname:"bx bx-user text-2xl text-gray-500 font-medium", destination:"/Adminpanel/UpdateProfile"},
  {id: "6", name: "Logout", classname:"bx bx-log-out text-2xl text-gray-500 font-medium"}
]