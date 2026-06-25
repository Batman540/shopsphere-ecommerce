export default function RecentOrders() {
  const orders = [
    {
      id: "#1001",
      customer: "John",
      amount: "$120",
    },
    {
      id: "#1002",
      customer: "Emma",
      amount: "$90",
    },
    {
      id: "#1003",
      customer: "David",
      amount: "$210",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-5 shadow mt-6">
      <h2 className="text-xl font-bold mb-4">
        Recent Orders
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">
              Order ID
            </th>
            <th className="text-left py-2">
              Customer
            </th>
            <th className="text-left py-2">
              Amount
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="py-2">
                {order.id}
              </td>

              <td>{order.customer}</td>

              <td>{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}