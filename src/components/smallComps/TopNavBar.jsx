import React from "react";
import { PanelLeft, CirclePlus } from "lucide-react";

const TopNavBar = ({ onToggleSidebar }) => {
  return (
    <div className="flex items-center justify-between mb-2 sticky top-0 bg-gray-50 py-2 border-b border-gray-200 ">
      <div className="flex items-center gap-2">
        <PanelLeft
          className="w-6 h-6 text-gray-700 active:text-gray-500"
          onClick={onToggleSidebar}
        />
        <span className="text-sm font-medium text-gray-800">My Data</span>
      </div>
      <div className="flex items-center gap-1 bg-white px-3 py-2 rounded-md cursor-pointer border border-gray-200 hover:bg-gray-50">
        <CirclePlus className="w-4 h-4 text-gray-700" />
        <span className="text-sm font-medium text-gray-800">Quick Access</span>
      </div>
    </div>
  );
};

export default TopNavBar;
