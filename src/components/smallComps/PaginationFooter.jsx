import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const PaginationFooter = ({ rowsPerPage, setRowsPerPage }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 px-4 ">
      <div className=" h-[59px] w-[153px] flex items-center gap-2 text-gray-600 text-[13px] font-medium">
        <span>0 of 68 row(s) selected</span>
      </div>

      <div className="flex gap-8">
        <div className="flex items-center gap-2 text-[13px] font-medium ">
          <span>Rows per page</span>
          <select
            // value={rowsPerPage}
            // onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className=" w-[65px] h-[33px] border border-[#F0F0F0] text-gray-700 rounded px-2 text-sm focus:outline-none font-weight:[400] focus:ring-2 focus:ring-blue-400"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[13px] font-medium  ">Page 1 of 7</span>
          <div className="flex items-center gap-1 ml-2 sm:ml-4 ">
            <button className="p-1 hover:bg-gray-100 rounded border border-gray-300 h-[30px] w-[31px] px-[6px]">
              <ChevronsLeft className="w-4 h-4 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded border border-gray-300 h-[30px] w-[31px] px-[6px]">
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded border border-gray-300 h-[30px] w-[31px] px-[6px]">
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded border border-gray-300 h-[30px] w-[31px] px-[6px]">
              <ChevronsRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationFooter;
