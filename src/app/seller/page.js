import Sidebar from "@/components/seller/Sidebar";
import DashboardCards from "@/components/seller/DashboardCards";
import RevenueChart from "@/components/seller/RevenueChart";
import RecentOrders from "@/components/seller/RecentOrders";

export default function SellerDashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">
          Seller Dashboard
        </h1>

        <DashboardCards />

        <RevenueChart />

        <RecentOrders />
      </div>
    </div>
  );
}