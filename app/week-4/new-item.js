"use client";

import { useState } from "react";

const NewItem = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-md shadow-md max-w-sm mx-auto bg-gray-50">
      <h1 className="text-lg font-bold">New Item</h1>

      <div className="flex items-center gap-2">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-red-300"
          onClick={decrement}
          disabled={quantity === 1}
        >
          -
        </button>

        <span className="text-xl font-semibold">{quantity}</span>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-green-300"
          onClick={increment}
          disabled={quantity === 20}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewItem;