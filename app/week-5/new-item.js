"use client";

import { useState } from "react";

const NewItem = () => {
  const [quantity, setQuantity] = useState(1);
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Item Name: ${itemName}\nQuantity: ${quantity}\nCategory: ${category}`);
    setItemName("");
    setQuantity(1);
    setCategory("");
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-md shadow-md max-w-sm mx-auto bg-gray-50">
      <h1 className="text-lg font-bold">New Item</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="itemName" className="font-medium">Item Name</label>
          <input
            id="itemName"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Enter item name"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="font-medium">Category</label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Enter category"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-red-300"
            onClick={decrement}
            disabled={quantity === 1}
          >
            -
          </button>

          <span className="text-xl font-semibold">{quantity}</span>

          <button
            type="button"
            className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-green-300"
            onClick={increment}
            disabled={quantity === 20}
          >
            +
          </button>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default NewItem;
