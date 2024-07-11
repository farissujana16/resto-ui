import Image12 from "../assets/image/image-12.jpg";
import Button from "./Button";

function Faq() {
  return (
    <div className="bg-white container max-w-6xl mx-auto h-screen flex items-center space-x-10">
      <div className="ml-24">
        <img className="rounded-xl" src={Image12} alt="" />
      </div>
      <div className="px-24">
        <h1 className="text-5xl font-bold text-teal-500">
          Order online with our simple checkout.
        </h1>
        <p className="mt-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto est,
          nesciunt temporibus alias consectetur eos.
        </p>
        <div className="pt-10">
          <Button padding={"px-5"} isi={"See our FAQ"}></Button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
