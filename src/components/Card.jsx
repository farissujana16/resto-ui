function Card(card) {
  return (
    <div className="flex flex-col items-center w-1/4 py-5 px-2">
      <div className="w-52">
        <img className="rounded-full" src={card.image} alt="" />
      </div>
      <div className="text-center mt-5">
        <p className="text-lg font-bold">{card.head}</p>
        <p className="mt-1 text-gray-500">{card.child}</p>
      </div>
    </div>
  );
}

export default Card;
