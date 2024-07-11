import Image13 from "../assets/image/image-13.jpg";
import Button from "./Button";

function Contact() {
  return (
    <div className="bg-white container max-w-6xl mx-auto h-screen flex items-center space-x-10">
      <div className="pr-24">
        <h1 className="text-5xl font-bold text-teal-500">
          Call our store and takeaway when it suits your best.
        </h1>
        <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nam
          enim odio harum quaerat voluptates neque provident consectetur!
          Inventore natus impedit quaerat porro perferendis nostrum?
        </p>
        <div className="pt-10">
          <Button padding={"px-5"} isi={"+62 81234567890"}></Button>
        </div>
      </div>
      <div className="">
        <img className="rounded-xl" src={Image13} alt="" />
      </div>
    </div>
  );
}

export default Contact;
