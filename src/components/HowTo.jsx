import Image3 from "../assets/image/image-3.jpg";
import Image4 from "../assets/image/image-4.jpg";
import Image5 from "../assets/image/image-5.jpg";

import Card from "./Card";

const card = [
  {
    image: Image3,
    head: "Adapt your menu items.",
    child:
      "Easily adapt your menu using the webflow CMS and follow customers to browse your items.",
  },
  {
    image: Image4,
    head: "Accept online orders & tekeout.",
    child:
      "Let your customers order and pay via the powerfull ecommerce system, or simple let them call your store.",
  },
  {
    image: Image5,
    head: "Manage delivery or takeout.",
    child:
      "Manage your own logistic and take orders simply through the ecommerce system.",
  },
];

function HowTo() {
  return (
    <div className="bg-white container max-w-6xl mx-auto my-auto h-screen flex-col justify-items-center">
      <div className="text-center py-20">
        <h1 className="text-5xl text-teal-500 font-bold">How it works.</h1>
      </div>
      <div className="flex gap-20 justify-center">
        {card.map((val, index) => (
          <Card
            key={index}
            image={val.image}
            head={val.head}
            child={val.child}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default HowTo;
