import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Warehouse from "./pages/Warehouse";
import Parts from "./pages/Parts";
import Brand from "./pages/Brand";

function App() {
  return (
    <Router>
      <Header />
      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-32 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <Sidebar />
      </aside>
      <div class="p-4 sm:ml-64 ">
        <div class="p-4 border-2 rounded-lg dark:border-gray-700 mt-14">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/order" element={<Order />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/brand" element={<Brand />} />
            {/* <Route
              path="/edit/:id"
              element={<EditItem items={items} editItem={editItem} />}
            /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
