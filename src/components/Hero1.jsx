import Image1 from "../assets/image/image-1.jpg";
import Button from "./Button";

function Hero1() {
  return (
    <section className="bg-white container max-w-6xl mx-auto py-10">
      <div className="grid grid-cols-2">
        <div className="flex items-center">
          <div className="flex-col">
            <h1 className="text-6xl font-bold">
              Beautiful food & takeaway,
              <span className="text-teal-500"> delivered</span> to your door.
            </h1>
            <p className="mt-5 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a
              voluptatum ut incidunt! Doloremque ipsa nulla quia, temporibus
              minima modi accusamus aperiam itaque dolorum dolores!
            </p>
            <Button isi={"Place an Order"} padding={"px-5"}></Button>
          </div>
        </div>
        <div className="px-16 py-16">
          <img className="rounded-2xl" src={Image1} alt="Gambar 1" />
        </div>
      </div>
    </section>
  );
}

export default Hero1;
