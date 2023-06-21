export const ProductItem = () => {
  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src="https://via.placeholder.com/250"
        alt="product image"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Product 1</h2>
        <p className="text-gray-500 my-2">100 $</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
          Add Cart
        </button>
      </div>
    </div>
  );
};