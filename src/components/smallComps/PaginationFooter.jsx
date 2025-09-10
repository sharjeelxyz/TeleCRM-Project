import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const PaginationFooter = ({ rowsPerPage, setRowsPerPage }) => {
  return (
    <div className="flex items-center justify-between mb-4 px-4 py-3 bg-white border border-gray-200 rounded-xl ">
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Page 1 of 7</span>
        <div className="flex items-center gap-1 ml-4">
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
