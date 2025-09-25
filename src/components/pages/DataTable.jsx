import React, { useState } from "react";
import { ChevronDown, EllipsisVertical, Trash2, SquarePen } from "lucide-react";
import PaginationFooter from "../smallComps/PaginationFooter";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const DataTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const data = [
    {
      id: 1,
      header: "Customer_Leads_Q1_2024.xlsx",
      createdDate: "Jan 15, 2024",
      status: "In Process",
      records: 18,
      limit: 10,
      reviewer: "Priya Sharma",
    },
    {
      id: 2,
      header: "Prospect_List_Mumbai.xlsx",
      createdDate: "Jan 15, 2024",
      status: "Done",
      records: 29,
      limit: 12,
      reviewer: "Priya Sharma",
    },
    {
      id: 3,
      header: "Follow_Up_Customers.xlsx",
      createdDate: "Jan 15, 2024",
      status: "Done",
      records: 10,
      limit: 3,
      reviewer: "Priya Sharma",
    },
    {
      id: 4,
      header: "Hot_Leads_January.xlsx",
      createdDate: "Jan 15, 2024",
      status: "Done",
      records: 27,
      limit: 14,
      reviewer: "Amit Patel",
    },
    {
      id: 5,
      header: "Cold_Leads_Backup.xlsx",
      createdDate: "Jan 15, 2024",
      status: "In Process",
      records: 2,
      limit: 8,
      reviewer: "Amit Patel",
    },
    {
      id: 6,
      header: "Weekly_Prospects.xlsx",
      createdDate: "Jan 15, 2024",
      status: "In Process",
      records: 20,
      limit: 9,
      reviewer: "Amit Patel",
    },
    {
      id: 7,
      header: "Customer_Leads_Q1_2024.xlsx",
      createdDate: "Jan 15, 2024",
      status: "In Process",
      records: 18,
      limit: 10,
      reviewer: "Priya Sharma",
    },
    {
      id: 8,
      header: "Prospect_List_Mumbai.xlsx",
      createdDate: "Jan 15, 2024",
      status: "Done",
      records: 29,
      limit: 12,
      reviewer: "Assign review...",
    },
    {
      id: 9,
      header: "Hot_Leads_January.xlsx",
      createdDate: "Jan 15, 2024",
      status: "Done",
      records: 29,
      limit: 12,
      reviewer: "Assign review...",
    },
    {
      id: 10,
      header: "Cold_Leads_Backup.xlsx",
      createdDate: "Jan 15, 2024",
      status: "Done",
      records: 29,
      limit: 12,
      reviewer: "Assign review...",
    },
  ];

  const StatusBadge = ({ status }) => {
    if (status === "Done") {
      return (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-700">Done</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
          <span className="text-sm text-gray-700">In Process</span>
        </div>
      );
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="w-12 px-4 py-3 text-left h-[16px]">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 w-[15px] h-[16px]"
                />
              </th>
              <th className="px-4 py-3 text-left text-[16px] font-medium text-gray-700 ">
                Header
              </th>
              <th className="px-4 py-3 text-left text-[16px] font-medium text-gray-700">
                Created Date
              </th>
              <th className="px-4 py-3 text-left text-[16px] font-medium text-gray-700">
                Status
              </th>
              <th className="px-4 py-3 text-left text-[16px] font-medium text-gray-700">
                Records
              </th>
              <th className="px-4 py-3 text-left text-[16px] font-medium text-gray-700">
                Limit
              </th>
              <th className="px-4 py-3 text-left text-[16px] font-medium text-gray-700">
                Reviewer
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 text-[16px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    className="w-[15px] h-[16px] rounded border-gray-300"
                  />
                </td>
                <td className="px-4 py-4">
                  <span className="text-[16px] text-gray-900 font-medium ">
                    {row.header}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-[16px] text-gray-600">
                    {row.createdDate}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-4 py-4">
                  <span className="text-[16px] text-gray-900 font-medium">
                    {row.records}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-[16px] text-gray-900 font-medium">
                    {row.limit}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[17px] text-gray-700">
                      {row.reviewer}
                    </span>
                    {row.reviewer === "Assign review..." && (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <EllipsisVertical className="h-4 cursor-pointer text-gray-300" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-44 absolute right-3 top-0 bg-gray-50 border border-gray-100 p-2 ">
                      <Link to="/customer-leads">
                        <div className=" border rounded-xl border-gray-100 hover:bg-white mb-1 font-medium flex items-center">
                          <SquarePen className="h-4 ml-2" />
                          <DropdownMenuItem>
                            <span className="text-[14px]">View Details</span>
                          </DropdownMenuItem>
                        </div>
                      </Link>
                      <div className="border rounded-xl border-gray-100 hover:bg-white font-medium flex items-center text-red-600">
                        <Trash2 className="ml-2 h-4" />
                        <DropdownMenuItem>
                          <span className="text-[14px]">Delete Files</span>
                        </DropdownMenuItem>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PaginationFooter
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </div>
  );
};

export default DataTable;
