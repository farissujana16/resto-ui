import Logo from "../assets/image/point_logo.png";
import Button from "./Button";
import { BiSolidShoppingBag } from "react-icons/bi";

function Navbar() {
  const menus = ["Home", "Order", "Company", "FAQ", "Contact"];

  return (
    <nav className="bg-white container max-w-6xl mx-auto">
      <div className="flex justify-between items-center py-3 my-4">
        <div>
          <img className="w-8" src={Logo} alt="" />
        </div>
        <div className="space-x-10">
          {menus.map((val, index) => (
            <a
              href="#"
              className="text-black font-semibold hover:text-teal-600"
              key={index}
            >
              {val}
            </a>
          ))}
          <Button isi={<BiSolidShoppingBag />} padding={"px-3"}></Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
