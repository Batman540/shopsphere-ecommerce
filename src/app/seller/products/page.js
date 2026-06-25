"use client";

import Link from "next/link";

export default function SellerProducts() {
  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          My Products
        </h1>

        <Link
          href="/seller/add-product"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Add Product
        </Link>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        No Products Yet
      </div>
    </div>
  );
}