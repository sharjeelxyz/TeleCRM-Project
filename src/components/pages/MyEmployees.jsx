import React from "react";
import { Link } from "react-router-dom";
import {
  PanelLeft,
  CirclePlus,
  EllipsisVertical,
  SquarePen,
  Trash2,
} from "lucide-react";
import PaginationFooter from "../smallComps/PaginationFooter";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const MyEmployees = ({ onToggleSidebar }) => {
  const customerDetails = [
    {
      id: "EMP001",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Telecaller",
    },
    {
      id: "EMP002",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Telecaller",
    },
    {
      id: "EMP003",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Senior Telecaller",
    },
    {
      id: "EMP004",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Telecaller",
    },
    {
      id: "EMP005",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Inactive",
      role: "Telecaller",
    },
    {
      id: "EMP006",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Inactive",
      role: "Team Lead",
    },
    {
      id: "EMP007",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Telecaller",
    },
    {
      id: "EMP008",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Active",
      role: "Senior Telecaller",
    },
    {
      id: "EMP009",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Inactive",
      role: "Telecaller",
    },
    {
      id: "EMP010",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      dateCreated: "Jan 15, 2024",
      status: "Inactive",
      role: "Telecaller",
    },
  ];

  return (
    <div>
      <div className="px-6 pt-1 pd-6">
        <div className="flex items-center justify-between mb-2 sticky top-0 bg-gray-50 py-3 border-b border-gray-200 ">
          <div className="flex items-center gap-2">
            <PanelLeft
              className="w-6 h-6 text-gray-700 active:text-gray-500"
              onClick={onToggleSidebar}
            />
            <span className="text-sm font-medium text-gray-800">
              My Employees
            </span>
          </div>
        </div>

        <div className="mt-3">
          <h1 className="text-xl font-bold">My Employees</h1>
          <span className="text-gray-600 text-sm">
            Here's a list of your Employees
          </span>
        </div>

        <div className="flex items-center gap-3 mt-4 justify-between">
          <div className="flex items-center gap-3">
            <div className="border border-gray-200 rounded px-4 py-1 flex items-center bg-white w-50">
              <input
                type="text"
                placeholder="Filter Employees..."
                className="outline-none text-sm text-gray-700 placeholder-gray-900 w-full"
              />
            </div>
            <button className="flex items-center gap-2 border border-gray-200 rounded px-4 py-1 bg-white hover:bg-gray-50">
              <CirclePlus className="text-gray-500 h-4 w-4" />
              <span className="text-sm font-medium">Status</span>
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded px-4 py-1 bg-white hover:bg-gray-50">
              <CirclePlus className="text-gray-500 h-4 w-4" />
              <span className="text-sm font-medium">City</span>
            </button>
          </div>
          <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 bg-blue-500 text-white font-medium text-[14px]">
            <CirclePlus className="text-white h-4 w-4" />
            Add New Customer
          </button>
        </div>

        <div className="border border-gray-200 mt-4 rounded-xl">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="w-12 px-4 py-3 text-left">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-4 pl-2 py-3 text-left text-sm font-medium text-gray-700">
                  Employee ID
                </th>
                <th className="px-4 pr-2 py-3 text-left text-sm font-medium text-gray-700">
                  Name & Email
                </th>
                <th className="px-4 pr-3 text-left text-sm font-medium text-gray-700">
                  Date Created
                </th>
                <th className="px-4 pr-2 py-3 text-left text-sm font-medium text-gray-700">
                  Status
                </th>
                <th className="px-4 pr-2 py-3 text-left text-sm font-medium text-gray-700">
                  Role
                </th>
                <th className=" py-3 text-left text-sm font-medium text-gray-700">
                  Password
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {customerDetails.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-4 pl-2 py-4 text-sm font-medium text-gray-900">
                    {row.id}
                  </td>

                  <td className="px-4 pl-2 py-4 text-sm  text-gray-900 flex-col flex">
                    <span className="font-medium"> {row.name}</span>
                    <span className="text-gray-500"> {row.email}</span>
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-700 ">
                    <span className="bg-pink-200 px-3 rounded-xl py-1 text-xs font-medium">
                      {row.dateCreated}
                    </span>
                  </td>
                  <td className="px-4 pl-2 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-xl ${
                        row.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 pl-2 py-4 ">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-xl ${
                        row.role === "Telecaller"
                          ? "bg-blue-200 text-gray-700"
                          : "bg-yellow-100 text-gray-700 border border-gray-100"
                      }`}
                    >
                      {row.role}
                    </span>
                  </td>
                  <td className="px-4 pl-2 py-4 text-sm font-medium text-gray-700">
                    temp123
                  </td>
                  <td>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <EllipsisVertical className="h-4 cursor-pointer text-gray-600" />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent className="w-44 absolute right-3 top-0 bg-gray-50 border border-gray-100 p-2 ">
                        <Link to="/my-employees/employee-detail">
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
        <div className="mt-4 ">
          <PaginationFooter />
        </div>
      </div>
    </div>
  );
};

export default MyEmployees;
