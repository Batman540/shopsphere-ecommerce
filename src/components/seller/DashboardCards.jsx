export default function DashboardCards() {
  const cards = [
    {
      title: "Products",
      value: "124",
    },
    {
      title: "Orders",
      value: "562",
    },
    {
      title: "Revenue",
      value: "$18,500",
    },
    {
      title: "Customers",
      value: "321",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white p-5 rounded-xl shadow"
        >
          <p className="text-gray-500">
            {card.title}
          </p>

          <h2 className="text-3xl font-bold">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}