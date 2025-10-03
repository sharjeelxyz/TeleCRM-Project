import React from "react";
import { Link } from "react-router-dom";
import {
  PanelLeft,
  MoveRight,
  CirclePlus,
  EllipsisVertical,
  SquarePen,
  Trash2,
} from "lucide-react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
// import PaginationFooter from "../smallComps/PaginationFooter";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useOutletContext } from "react-router-dom";

const MyEmployees = () => {
  const { onToggleSidebar } = useOutletContext();
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
      role: "Telecaller",
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
    <div className="overflow-hidden bg-white">
      <div className="pr-6 pl-3 pt-1">
        <div className="flex items-center justify-between  sticky top-0 bg-white py-3  ">
          <div className="flex items-center gap-4">
            <PanelLeft
              className="w-[24px] h-[24px] text-gray-700 active:text-gray-500 rounded-2xl"
              onClick={onToggleSidebar}
            />
            <div className=" w-[96px] h-[18px] font-medium text-gray-800 flex items-center ">
              <span className="text-[14px]">My Employees</span>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-[22px] h-[29px] w-[175px] font-bold ml-1">
              My Employees
            </h1>
          </div>
          <div className="mt-[6px]">
            <span className="text-gray-600 text-[16px] ">
              Here's a list of your Employees
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-[7px] justify-between">
          <div className="flex items-center flex-wrap  gap-4">
            <div className="border border-gray-200 rounded-[7px] w-[244px] px-4 py-1 flex items-center bg-white h-[30px]">
              <input
                type="text"
                placeholder="Filter Employees..."
                className="outline-none text-[13px] font-medium text-[#313131] placeholder-gray-900 w-full"
              />
            </div>
            <button className="flex items-center gap-2 h-[30px]  border border-gray-200 rounded px-4 py-1 bg-white hover:bg-gray-50">
              <CirclePlus className="text-gray-500 h-4 w-4" />
              <span className="text-[13px] font-medium">Status</span>
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded px-4 py-1 bg-white hover:bg-gray-50">
              <CirclePlus className="text-gray-500 h-4 w-4" />
              <span className="text-[13px] font-medium">City</span>
            </button>
          </div>

          <button className="flex items-center gap-2 h-[40px] w-[185px] border border-gray-200 rounded-lg px-[18px] py-2 bg-[#2F67B1] text-white font-medium text-[13px]">
            <CirclePlus className="h-5 w-5" />
            <span className="hidden sm:inline">Add New Customer</span>
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 mt-[25px] rounded-[10px]">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="w-12 px-4 py-3 text-left h-[16px]">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 w-[17px] h-[16px]"
                  />
                </th>
                <th className="px-4 py-3 text-left text-[13px] h-[16px] font-medium text-gray-700 pt-2">
                  Employee ID
                </th>
                <th className="px-4 py-3 text-left text-[13px] h-[16px] font-medium text-gray-700 pt-2 ">
                  Name & Email
                </th>
                <th className="px-4 py-3 text-left text-[13px] h-[16px] font-medium text-gray-700">
                  Date Created
                </th>
                <th className="px-4 py-3 text-left text-[13px] h-[16px] font-medium text-gray-700">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-[13px] h-[16px] font-medium text-gray-700">
                  Role
                </th>
                <th className="px-4 py-3 text-left text-[13px] h-[16px] font-medium text-gray-700">
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
                      className="w-[17px] h-[16px] rounded border-gray-300"
                    />
                  </td>

                  <td className="px-4 py-4 ">
                    <span className="text-[13px] flex pb-[7px]  text-gray-900 font-medium">
                      {row.id}
                    </span>
                  </td>

                  <td className="px-4 py-4 flex flex-col">
                    <span className="text-[13px] text-gray-900 font-medium">
                      {row.name}
                    </span>
                    <span className="text-[13px] text-gray-500">
                      {row.email}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <span className="text-[10px] w-[74px] h-[16px] bg-green-100 text-gray-800 px-[6px] rounded-md py-[4px] font-medium">
                      {row.dateCreated}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <div
                      className={`flex items-center rounded gap-2 h-[16px] w-[68px] px-2 
              ${row.status === "Active" ? "bg-[#A7F8C8]" : "bg-[#F09696]"}`}
                    >
                      <span className="text-[11px] text-gray-700 font-medium flex px-2">
                        {row.status}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`text-[12px] font-medium text-gray-700 px-2 py-[2px] rounded-md border border-gray-200
                      ${
                        row.role === "Telecaller"
                          ? "bg-[#A7D9F8]"
                          : row.role === "Senior Telecaller"
                          ? "bg-[#F8E7A7]"
                          : "bg-gray-100"
                      }`}
                    >
                      {row.role}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <span className="text-[13px] font-medium text-gray-700">
                      temp123
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <EllipsisVertical className="h-4 cursor-pointer text-gray-300" />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent className="w-44 absolute right-3 top-0 bg-gray-50 border border-gray-100 p-2">
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
      </div>
    </div>
  );
};

export default MyEmployees;
