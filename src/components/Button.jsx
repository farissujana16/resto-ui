function Button(promt) {
  return (
    <button
      className={`py-3 ${promt.padding} rounded-md bg-teal-500 text-white hover:bg-teal-600 focus:ring-4 focus:ring-teal-300`}
    >
      {promt.isi}
    </button>
  );
}

export default Button;
