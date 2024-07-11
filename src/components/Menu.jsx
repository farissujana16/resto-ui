import Button from "./Button";
import Item from "./Item";

import Image6 from "../assets/image/image-6.jpg";
import Image7 from "../assets/image/image-7.jpg";
import Image8 from "../assets/image/image-8.jpg";
import Image9 from "../assets/image/image-9.jpg";
import Image10 from "../assets/image/image-10.jpg";
import Image11 from "../assets/image/image-11.jpg";

const menu = [
  { head: "Burger Dream", image: Image6, price: "9.20" },
  { head: "Burger Waldo", image: Image7, price: "10.00" },
  { head: "Burger Cali", image: Image8, price: "8.00" },
  { head: "Burger Chicken Body", image: Image9, price: "9.99" },
  { head: "Burger Spicy", image: Image10, price: "9.20" },
  { head: "Burger Clasic", image: Image11, price: "8.00" },
];

function Menu() {
  const btn = ["Burgers", "Sides", "Drink"];

  return (
    <div className="bg-teal-50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center py-10">
          <h1 className="text-5xl font-bold text-teal-500">Browse our menu</h1>
          <p className="mt-5 text-lg text-gray-500">
            Use our menu to place an order online, or phone our store to <br />
            place a pickup order. Fast and fresh food.
          </p>
        </div>
        <div className="py-2 flex justify-center space-x-10">
          {btn.map((val, index) => (
            <Button padding={"px-5"} isi={val}></Button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6">
          {menu.map((val, index) => (
            <Item
              key={index}
              head={val.head}
              image={val.image}
              price={val.price}
            ></Item>
          ))}
        </div>
        <div className="pt-20 pb-10 flex justify-center">
          <Button padding={"px-5"} isi={"See Full Menu"}></Button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
