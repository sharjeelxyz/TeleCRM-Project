import React from "react";
import { PanelLeft, CirclePlus, ChevronRight, Plus } from "lucide-react";
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
      assignedTo: "Priya Sharma",
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
      assignedTo: "Priya Sharma",
    },
    {
      name: "Customer 9",
      email: "customeremail@company.com",
      phone: "+91888866666",
      status: "Active",
      city: "Kolkata",
      assignedTo: "Priya Sharma",
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
    <div>
      <div className="pr-6 pl-3 pt-1">
        <div className="flex items-center justify-between  sticky top-0 bg-gray-50 py-3  ">
          <div className="flex items-center gap-4">
            <PanelLeft
              className="w-[18px] h-[18px] text-gray-700 active:text-gray-500 rounded-2xl"
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

        <div className="mt-3">
          <h1 className="text-xl font-bold">Customer Leads Q1 2024</h1>
          <span className="text-gray-600 text-sm">
            File details and Record Management
          </span>
        </div>

        <div className="flex items-center gap-3 mt-4 justify-between">
          <div className="flex items-center gap-3">
            <div className="border border-gray-200 rounded px-4 py-1 flex items-center bg-white w-50">
              <input
                type="text"
                placeholder="Filter Customer..."
                className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
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

        <div className="grid grid-cols-5 border border-gray-200 bg-white rounded overflow-hidden text-center mt-4">
          <div className="flex flex-col justify-center items-center p-4 border-r border-gray-200 ">
            <span className="text-sm text-gray-900 font-medium">
              Number of records stored in database
            </span>
          </div>
          <div className="flex flex-col justify-center items-center p-4 border-r border-gray-200 ">
            <span className="text-sm text-gray-600">Total Records</span>
            <span className="text-2xl font-bold">1,200</span>
          </div>
          <div className="flex flex-col justify-center items-center p-4 border-r border-gray-200">
            <span className="text-sm text-gray-600">Assigned</span>
            <span className="text-2xl font-bold">700</span>
          </div>
          <div className="flex flex-col justify-center items-center p-4 border-r border-gray-200">
            <span className="text-sm text-gray-600">Pending</span>
            <span className="text-2xl font-bold">300</span>
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <span className="text-sm text-gray-600">Completed</span>
            <span className="text-2xl font-bold">200</span>
          </div>
        </div>

        <div className="p-2 border border-gray-200 mt-4 rounded-xl">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="w-12 px-4 py-3 text-left">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Phone
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  City
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Assigned To
                </th>
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
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {row.name}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {row.email}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {row.phone}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        row.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {row.city}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {row.assignedTo}
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

export default CustomerLeads;
