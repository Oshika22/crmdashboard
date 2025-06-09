import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell,
} from "recharts";

const lineData = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 200 },
  { name: "May", sales: 350 },
  { name: "Jun", sales: 450 },
];

const barData = [
  { name: "Electronics", products: 12 },
  { name: "Clothing", products: 18 },
  { name: "Books", products: 9 },
];

const pieData = [
  { name: "Active", value: 70 },
  { name: "Inactive", value: 30 },
];

const COLORS = ["#00C49F", "#FF8042"];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">CRM Dashboard</h2>
        <div>
            <button
              onClick={() => navigate("/products")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
            >
              View Products
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 ml-4"
            >
              SignOut
            </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h4 className="text-lg font-semibold">Total Sales</h4>
          <p className="text-2xl font-bold text-blue-600">₹1,20,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h4 className="text-lg font-semibold">Active Users</h4>
          <p className="text-2xl font-bold text-green-600">1,540</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h4 className="text-lg font-semibold">Products</h4>
          <p className="text-2xl font-bold text-purple-600">39</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="mb-2 font-semibold text-xl">Monthly Sales</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="mb-2 font-semibold text-xl">Products by Category</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="products" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow col-span-full lg:col-span-1">
          <h4 className="mb-2 font-semibold text-xl">User Engagement</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
