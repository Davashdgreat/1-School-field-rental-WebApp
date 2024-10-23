import React from 'react';

import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Log Out</button>
      </header>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold">Sidebar</h2>
        </div>
        <div className="col-span-2 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Main Content</h2>
          <p>This is where the main dashboard content will go.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


