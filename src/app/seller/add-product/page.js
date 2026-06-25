"use client";

import { useState } from "react";

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);

    alert("Product Added");
  };

  return (
    <div className="max-w-xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setProduct({
              ...product,
              name: e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setProduct({
              ...product,
              price: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Category"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setProduct({
              ...product,
              category: e.target.value,
            })
          }
        />

        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}