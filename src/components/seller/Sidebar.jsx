"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    {
      name: "Dashboard",
      path: "/seller",
    },
    {
      name: "Products",
      path: "/seller/products",
    },
    {
      name: "Add Product",
      path: "/seller/add-product",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-black text-white border-r border-gray-800 p-6">

      <h1 className="text-3xl font-bold mb-10 text-purple-500">
        ShopSphere
      </h1>

      <nav className="flex flex-col gap-3">

        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`px-4 py-3 rounded-lg transition-all duration-300 ${
              pathname === link.path
                ? "bg-purple-600 text-white"
                : "hover:bg-gray-900 text-gray-300"
            }`}
          >
            {link.name}
          </Link>
        ))}

      </nav>

    </aside>
  );
}