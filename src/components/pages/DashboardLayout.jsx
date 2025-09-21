import React, { useState } from "react";
import { Database, Trello, Settings } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden overflow-x-hidden">
      <aside
        className={`bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 h-full z-10 transition-all duration-300 ${
          collapsed ? "w-[59px]" : "w-[248px]"
        }`}
      >
        <div className="flex-shrink-0 p-4 border-b border-gray-200 text-sm">
          <h4 className="font-bold ml-5"> {collapsed ? "" : "TeleCRM"} </h4>
        </div>

        <nav className="flex-1 px-2 py-6 overflow-y-auto">
          <div>
            <Link to="my-data">
              <button className="flex items-center gap-3 w-full px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md mb-1">
                <Database className="w-[15.75px] h-[14.88px]" />
                {!collapsed && "My Data"}
              </button>
            </Link>
            <Link to="my-employees">
              <button className="flex items-center gap-3 w-full px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
                <Trello className="w-[15.75px] h-[14.88px]" />
                {!collapsed && "My Employees"}
              </button>
            </Link>
          </div>
        </nav>

        <div className="flex-shrink-0 p-4 ">
          <button className="flex items-center gap-3 w-full p-1 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md mb-10">
            <Settings className="w-[17px] h-[17px] text-gray-400" />
            {!collapsed && "Settings"}
          </button>

          <div className="flex items-center gap-3 rounded-lg">
            <div className="w-6 h-6 rounded-lg bg-black flex-shrink-0 "></div>
            {!collapsed && (
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-gray-900 truncate">
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
        <Outlet context={{ onToggleSidebar: handleToggleSidebar }} />
      </main>
    </div>
  );
};

export default DashboardLayout;
