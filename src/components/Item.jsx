import Button from "./Button";

function Item(params) {
  return (
    <a
      href="#"
      className="bg-white  hover:border-teal-500 hover:border flex space-x-5 px-4 py-5 items-center rounded-xl shadow-lg"
    >
      <div className="w-72">
        <img className="rounded-xl" src={params.image} alt="" />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-xl">{params.head}</h4>
          <p className="text-teal-500">$ {params.price} USD</p>
        </div>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          consequatur numquam dolore.
        </p>
        <div className="space-x-3">
          <input
            className="border border-gray-400 py-3 px-3 rounded-lg mt-3 w-16"
            type="number"
            name=""
            id=""
            value={1}
          />
          <Button padding={"px-5"} isi={"Add to cart"}></Button>
        </div>
      </div>
    </a>
  );
}

export default Item;
