import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const PaginationFooter = ({ rowsPerPage, setRowsPerPage }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 px-4 py-2">
      <div className=" h-[59px] w-[153px] flex items-center gap-2 text-gray-600 text-sm">
        <span>0 of 68 row(s) selected</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
        <span>Rows per page</span>
        <select
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600 font-medium">Page 1 of 7</span>
        <div className="flex items-center gap-1 ml-2 sm:ml-4 ">
          <button className="p-1 hover:bg-gray-100 rounded border border-gray-300">
            <ChevronsLeft className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded border border-gray-300">
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded border border-gray-300">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded border border-gray-300">
            <ChevronsRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationFooter;
