import Image2 from "../assets/image/image-2.jpg";
import Button from "./Button";

function Hero2() {
  return (
    <section className="bg-white container max-w-6xl mx-auto h-screen flex items-center">
      <div className="grid grid-cols-2">
        <div className="flex items-center">
          <div className="flex-col">
            <h1 className="text-5xl font-bold text-teal-500">
              The home of fresh product
            </h1>
            <p className="mt-5 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a
              voluptatum ut incidunt! Doloremque ipsa nulla quia, temporibus
              minima modi accusamus aperiam itaque dolorum dolores!
            </p>
            <Button isi={"Learn about us"} padding={"px-5"}></Button>
          </div>
        </div>
        <div className="w-72 flex items-center mx-auto">
          <img className="rounded-2xl" src={Image2} alt="Gambar 1" />
        </div>
      </div>
    </section>
  );
}

export default Hero2;
