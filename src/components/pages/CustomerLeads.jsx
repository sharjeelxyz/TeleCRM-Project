import React from "react";
import {
  PanelLeft,
  CirclePlus,
  ChevronRight,
  Plus,
  EllipsisVertical,
  ChevronDown,
} from "lucide-react";
import PaginationFooter from "../smallComps/PaginationFooter";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const CustomerLeads = () => {
  const { onToggleSidebar } = useOutletContext();
  const customerDetails = [
    {
      name: "Customer 1",
      email: "customeremail@company.com",
      phone: "+91888866666",
      status: "Active",
      city: "Mumbai",
      assignedTo: "Priya Sharma",
    },
    {
      name: "Customer 2",
      email: "customeremail@company.com",
      phone: "+91888866666",
      status: "Inactive",
      city: "Kolkata",
      assignedTo: "Priya Sharma",
    },
    {
      name: "Customer 3",
      email: "customeremail@company.com",
      phone: "+91888866666",
      status: "Active",
      city: "Chennai",
      assignedTo: "Priya Sharma",
    },
    {
      name: "Customer 4",
      email: "customeremail@company.com",
      phone: "+91888866666",
      status: "Inactive",
      city: "Mumbai",
      assignedTo: "Priya Sharma",
    },
    {
      name: "Customer 5",
      email: "customeremail@company.com",
      phone: "+91888866666",
      status: "Active",
      city: "Kolkata",
      assignedTo: "Assign review..",
    },
    {
      name: "Customer 6",
      email: "customeremail@company.com",
      phone: "+91888866666",
      status: "Inactive",
      city: "Chennai",
      assignedTo: "Priya Sharma",
    },
    {
      name: "Customer 7",
      email: "customeremail@company.com",
      phone: "+91888866666",
      status: "Active",
      city: "Mumbai",
      assignedTo: "Priya Sharma",
    },
    {
      name: "Customer 8",
      email: "customeremail@company.com",
      phone: "+91888866666",
      status: "Inactive",
      city: "Chennai",
      assignedTo: "Assign review..",
    },
    {
      name: "Customer 9",
      email: "customeremail@company.com",
      phone: "+91888866666",
      status: "Active",
      city: "Kolkata",
      assignedTo: "Assign review..",
    },
    {
      name: "Customer 10",
      email: "customeremail@company.com",
      phone: "+91888866666",
      status: "Inactive",
      city: "Mumbai",
      assignedTo: "Priya Sharma",
    },
  ];

  return (
    <div className="overflow-hidden bg-white">
      <div className="pr-6 pl-3 pt-1">
        <div className="flex items-center justify-between  sticky top-0  py-3  ">
          <div className="flex items-center gap-4">
            <PanelLeft
              className="w-[24px] h-[24px] text-gray-700 active:text-gray-500 rounded-2xl"
              onClick={onToggleSidebar}
            />
            <Link to="/my-data">
              <div className=" w-[55px] font-medium text-gray-800 flex items-center ">
                <span className="text-xs">My Data</span>
              </div>
            </Link>
            <span>
              <ChevronRight className="w-4 h-4 text-gray-800" />
            </span>
            <div className=" w-[91px] font-medium flex items-center ">
              <span className="text-xs">Customer Leads</span>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl w-[270px] h-[29px] font-bold">
            Customer Leads Q1 2024
          </h1>
          <span className="text-gray-600 text-sm w-[265px] h-[21px]">
            File details and Record Management
          </span>
        </div>

        {/* this fixed height is the problem ..remove it and remove those mt-90 nd all then it will look good */}
        <div className="h-[175px]">
          <div className=" items-center mt-4 sm:gap-3 lg:gap-0 sm:justify-between sm:flex">
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

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-0">
            <div class="bg-white border border-gray-200 w-full h-[106px] py-8 text-center flex flex-col justify-center">
              <span class="text-sm text-gray-800">
                Number of records stored in database
              </span>
            </div>

            <div class="bg-white border border-gray-200 w-full h-[106px] p-4 text-center flex flex-col justify-center">
              <span class="text-sm text-gray-600">Total Records</span>
              <p class="text-2xl font-bold text-gray-900 mt-1">1,200</p>
            </div>

            <div class="bg-white border border-gray-200 w-full h-[106px] p-4 text-center flex flex-col justify-center">
              <span class="text-sm text-gray-600">Assigned</span>
              <p class="text-2xl font-bold text-gray-900 mt-1">700</p>
            </div>

            <div class="bg-white border border-gray-200 w-full h-[106px] p-4 text-center flex flex-col justify-center">
              <span class="text-sm text-gray-600">Pending</span>
              <p class="text-2xl font-bold text-gray-900 mt-1">300</p>
            </div>

            <div class="bg-white border border-gray-200 w-full h-[106px] p-4 text-center flex flex-col justify-center">
              <span class="text-sm text-gray-600">Completed</span>
              <p class="text-2xl font-bold text-gray-900 mt-1">200</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto p-2 border border-gray-200  rounded-[10px] mt-120 sm:mt-70 md:mt-30 lg:mt-5  ">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="w-12 px-4 py-3 text-left h-[16px]">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 w-[17px] h-[16px]"
                  />
                </th>
                <th className="px-4 py-3 text-left text-[13px] font-medium text-gray-700">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-[13px] font-medium text-gray-700">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-[13px] font-medium text-gray-700">
                  Phone
                </th>
                <th className="px-4 py-3 text-left text-[13px] font-medium text-gray-700">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-[13px] font-medium text-gray-700">
                  City
                </th>
                <th className="px-4 py-3 text-left text-[13px] font-medium text-gray-700">
                  Assigned To
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
                      className="rounded border-gray-300 w-[17px] h-[16px]"
                    />
                  </td>
                  <td className="px-4 py-4 text-[13px] font-medium text-gray-900">
                    {row.name}
                  </td>
                  <td className="px-4 py-4 text-[13px] text-gray-700">
                    {row.email}
                  </td>
                  <td className="px-4 py-4 text-[13px] text-gray-700">
                    {row.phone}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-[2px] text-[11px] font-medium rounded-[6px] ${
                        row.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-300 text-red-900"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-[13px] text-gray-700">
                    {row.city}
                  </td>
                  <td className="pr-2 text-[13px] text-gray-700">
                    <span
                      className={`flex items-center font-medium ${
                        row.assignedTo === "Assign review.."
                          ? "border border-gray-300 rounded-[5px] h-[20px] w-[114px] px-[5px] justify-start "
                          : ""
                      }`}
                    >
                      {row.assignedTo}
                      {row.assignedTo === "Assign review.." && (
                        <ChevronDown className=" w-4 h-4 text-gray-500" />
                      )}
                    </span>
                  </td>
                  <td className="pl-4">
                    <EllipsisVertical className="h-4 w-4 text-gray-300 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <PaginationFooter />
        </div>
      </div>
    </div>
  );
};

export default CustomerLeads;
