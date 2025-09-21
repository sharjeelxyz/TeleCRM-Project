import React from "react";
import { PanelLeft, CirclePlus } from "lucide-react";

const TopNavBar = ({ onToggleSidebar }) => {
  return (
    <div className="flex items-center justify-between mb-2 sticky top-0 bg-gray-50 py-2 ">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <PanelLeft
            className="w-[18px] h-[18px] text-gray-700 active:text-gray-500 rounded-2xl"
            onClick={onToggleSidebar}
          />
        </div>
        <div className=" w-[81px] font-medium text-gray-800 flex items-center">
          <span className="text-xs">My Data</span>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-white pl-3 py-1 rounded-md cursor-pointer border border-gray-200 hover:bg-gray-50 w-[124px] h-[26px ">
        <div className="flex items-center">
          <CirclePlus className="w-[8px] h-[13px] text-gray-700" />
        </div>
        <div className="h-[21px] w-[94px]">
          <span className="text-xs font-medium text-gray-800 flex items-center mt-[1.20px]">
            Quick Access
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
