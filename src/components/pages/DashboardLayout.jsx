import React, { useState } from "react";
import { Database, Trello, Settings } from "lucide-react";
import CustomerLeads from "./CustomerLeads";
import { Routes, Route, Link } from "react-router-dom";
import MyData from "./MyData";
import MyEmployees from "./MyEmployees";
import EmployeeDetail from "./EmployeeDetail";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden overflow-x-hidden">
      <aside
        className={`bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 h-full z-10 transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex-shrink-0 p-4 border-b border-gray-200">
          <h4 className="font-bold text-gray-900">
            {collapsed ? "" : "TeleCRM"}
          </h4>
        </div>

        <nav className="flex-1 px-2 py-6 overflow-y-auto">
          <div className="space-y-2">
            <Link to="/my-data">
              <button className="flex items-center gap-3 w-full px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
                <Database className="w-4 h-4" />
                {!collapsed && "My Data"}
              </button>
            </Link>
            <Link to="/my-employees">
              <button className="flex items-center gap-3 w-full px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
                <Trello className="w-4 h-4" />
                {!collapsed && "My Employees"}
              </button>
            </Link>
          </div>
        </nav>

        <div className="flex-shrink-0 p-4 border-t border-gray-200 space-y-4">
          <button className="flex items-center gap-3 w-full px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
            <Settings className="w-5 h-5 text-gray-400" />
            {!collapsed && "Settings"}
          </button>

          <div className="flex items-center gap-3 p-2 rounded-lg">
            <div className="w-8 h-8 rounded-lg bg-black flex-shrink-0"></div>
            {!collapsed && (
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-gray-900 truncate">
                  LoadGO
                </span>
                <span className="text-xs text-gray-500 truncate">
                  m@example.com
                </span>
              </div>
            )}
          </div>
        </div>
      </aside>

      <main
        className={`flex-1 overflow-auto transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-64"
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={<MyData onToggleSidebar={handleToggleSidebar} />}
          />
          <Route
            path="/my-data"
            element={<MyData onToggleSidebar={handleToggleSidebar} />}
          />
          <Route
            path="/my-employees"
            element={<MyEmployees onToggleSidebar={handleToggleSidebar} />}
          />
          <Route
            path="/employee-details"
            element={<EmployeeDetail onToggleSidebar={handleToggleSidebar} />}
          />
          <Route
            path="/customer-leads"
            element={<CustomerLeads onToggleSidebar={handleToggleSidebar} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default DashboardLayout;
