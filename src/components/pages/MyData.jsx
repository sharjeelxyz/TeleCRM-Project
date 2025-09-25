import React from "react";
import { Plus, ChevronDown, Columns2 } from "lucide-react";
import ExampleCard from "../smallComps/ExampleCard";
import DataTable from "./DataTable";
import TopNavBar from "../smallComps/TopNavBar";
import { useOutletContext } from "react-router-dom";

const MyData = () => {
  const { onToggleSidebar } = useOutletContext();

  return (
    <>
      <div className="pr-6 pl-3 pt-1">
        <TopNavBar onToggleSidebar={onToggleSidebar} />
        <ExampleCard />
        <div className="mb-5 rounded-lg hidden xl:block ">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-2 bg-gray-100 p-1 rounded-lg text-sm font-medium h-[36px]">
              <button className=" flex items-center gap-1 px-3 sm:px-4 py-2 bg-white rounded-md text-gray-800 shadow-sm ">
                Outline
              </button>
              <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                Past Performance
                <span className="bg-gray-300 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  3
                </span>
              </button>
              <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                Key Personnel
                <span className="bg-gray-300 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  2
                </span>
              </button>
              <button className="flex items-center px-3 sm:px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                Focus Documents
              </button>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 items-center h-[36px]">
              <button className="flex items-center gap-2 h-9 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium hover:bg-gray-50">
                <Columns2 className="h-4 w-4" />
                Customize Columns
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 h-[33px] border border-gray-300 rounded-md bg-white text-sm font-medium px-3 py-2 hover:bg-gray-50">
                <Plus className="h-4 w-4" />
                Add Section
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
