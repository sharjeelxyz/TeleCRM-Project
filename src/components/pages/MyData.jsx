import React from "react";
import { Plus, ChevronDown, Columns2 } from "lucide-react";
import { PanelLeft, CirclePlus } from "lucide-react";
import ExampleCard from "../smallComps/ExampleCard";
import DataTable from "./DataTable";
import { useOutletContext } from "react-router-dom";

const MyData = () => {
  const { onToggleSidebar } = useOutletContext();

  return (
    <>
      <div className="pr-6 pl-3 pt-1">
        <div className="flex items-center justify-between mb-2 sticky top-0 bg-gray-50 py-2 ">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <PanelLeft
                className="w-[24px] h-[24px] text-gray-700 active:text-gray-500 rounded-2xl"
                onClick={onToggleSidebar}
              />
            </div>
            <div className=" w-[81px] font-medium text-gray-800 flex items-center">
              <span className="text-[14px]">My Data</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-md cursor-pointer border border-gray-200 hover:bg-gray-50 w-[124px] h-[26px] ">
            <div className="flex items-center">
              <CirclePlus className="w-4 h-3  text-gray-700" />
            </div>
            <div className="h-[21px] w-[94px] flex items-center ">
              <span className="text-[13px] font-medium text-gray-800 flex items-center mt-[1.20px]">
                Quick Access
              </span>
            </div>
          </div>
        </div>
        <ExampleCard />
        <div className="mb-3 rounded-lg hidden xl:block ">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center flex-wrap gap-2 bg-gray-100 p-1 rounded-lg text-sm font-medium h-[36px] w-[523px]">
              <button className="text-[13px]  flex items-center gap-1 px-3 sm:px-3 py-1 bg-white rounded-md text-gray-800 shadow-sm ">
                Outline
              </button>
              <button className="text-[13px] flex items-center gap-2 px-3 sm:px-3 py-1 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                Past Performance
                <span className="bg-gray-300 h-[19px] w-[19x] text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  3
                </span>
              </button>
              <button className="text-[13px] flex items-center gap-2 px-3 sm:px-3 py-1 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                Key Personnel
                <span className="bg-gray-300 h-[19px] w-[19x]  text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  2
                </span>
              </button>
              <button className="text-[13px] flex items-center px-3 sm:px-3 py-1 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                Focus Documents
              </button>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 items-center h-[36px]">
              <button className="flex items-center gap-2 w-[190px] justify-end px-3 py-[8px] text-[13px] border border-gray-300 rounded-md bg-white font-medium hover:bg-gray-50">
                <Columns2 className="h-[14.88px] w-[14.88px]" />
                Customize Columns
                <ChevronDown className="h-[13px] w-[13px]" />
              </button>
              <button className="flex items-center gap-2 w-[120px] h-[33px] border border-gray-300 rounded-md bg-white text-[13px] font-medium px-2 py-1 hover:bg-gray-50">
                <Plus className="w-[10px] h-[14px]" />
                <span className="text-[13px] mb-[2px]">Add Section</span>
              </button>
            </div>
          </div>
        </div>
        <DataTable />
      </div>
    </>
  );
};

export default MyData;
