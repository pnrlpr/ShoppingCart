/* eslint-disable react/prop-types */

export const Cart = ({ cart, emptyCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) return;
  return (
    <div className="border ml-auto w-72 p-4 mt-2 roundedn-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      <ul>
        {cart.map((item) => (
          <li className="mt-2 flex justify-between">
            <span>{item.name}</span>
            <span>{item.price} $</span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl mt-2">Total: {total} $</p>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition-all mt-4"
        onClick={emptyCart}
      >
        Clear Cart
      </button>
    </div>
  );
};
