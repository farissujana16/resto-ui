import Logo from "../assets/image/point_logo.png";

import {
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

const company = ["Home", "Order", "FAQ", "Contact"];
const template = ["Style Guide", "Changelog", "Licence", "Webflow University"];
const flowbase = ["More Cloneables"];

function Footer() {
  return (
    <footer className="bg-teal-50">
      <div className="container max-w-5xl mx-auto flex justify-between pt-24">
        <div className="">
          <img className="w-10" src={Logo} alt="" />
          <p className="mt-5">
            Takeaway & Delivery template <br /> for small - medium bussiness
          </p>
        </div>
        <div className="flex space-x-28">
          <div>
            <h5 className="font-bold">COMPANY</h5>
            {company.map((val, index) => (
              <p className="mt-5 text-gray-500" key={index}>
                {val}
              </p>
            ))}
          </div>
          <div>
            <h5 className="font-bold">TEMPLATE</h5>
            {template.map((val, index) => (
              <p className="mt-5 text-gray-500" key={index}>
                {val}
              </p>
            ))}
          </div>
          <div>
            <h5 className="font-bold">FLOWBASE</h5>
            {flowbase.map((val, index) => (
              <p className="mt-5 text-gray-500" key={index}>
                {val}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="container max-w-5xl mx-auto pb-10">
        <hr className="h-px my-8 bg-gray-200 border-0" />
        <div className="flex justify-between items-center">
          <p>Build by Flowbase Powered by Webflow</p>
          <div className="flex flex-row space-x-5">
            <a
              href="#"
              className="text-2xl text-gray-500 border-2 px-2 py-2 rounded-full hover:text-purple-500"
            >
              <BiLogoInstagramAlt></BiLogoInstagramAlt>
            </a>
            <a
              href="#"
              className="text-2xl text-gray-500 border-2 px-2 py-2 rounded-full hover:text-sky-500"
            >
              <BiLogoTwitter></BiLogoTwitter>
            </a>
            <a
              href="#"
              className="text-2xl text-gray-500 border-2 px-2 py-2 rounded-full hover:text-red-500"
            >
              <BiLogoYoutube></BiLogoYoutube>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
