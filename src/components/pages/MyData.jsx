import React from "react";
import { Plus, ChevronDown, Columns2 } from "lucide-react";
import { PanelLeft, CirclePlus } from "lucide-react";
import ExampleCard from "../smallComps/ExampleCard";
import DataTable from "./DataTable";
import { useOutletContext } from "react-router-dom";
import PlusImage from "@/assets/Plus.png";
import CustomizeColumnImg from "@/assets/CustomizeColumnImg.png";
import BigPlus from "@/assets/BigPlus.png";

const MyData = () => {
  const { onToggleSidebar } = useOutletContext();

  return (
    <>
      <div className="pr-6 pl-3 pt-1">
        <div className="flex items-center justify-between mb-2 sticky top-0 bg-gray-50 py-2 ">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <PanelLeft
                className="w-[24px] h-[24px] text-gray-700 active:text-gray-500 rounded-2xl cursor-pointer"
                onClick={onToggleSidebar}
              />
            </div>
            <div className=" w-[81px] font-medium text-gray-800 flex items-center">
              <span className="text-[14px]">My Data</span>
            </div>
          </div>
          <div className="flex items-center gap-[10px] bg-[#E2E2E2] px-[8px] rounded-[10px] cursor-pointer border border-gray-200 hover:bg-gray-50 w-[124px] h-[28px] ">
            <div className="flex items-center">
              <img
                src={PlusImage}
                alt="plus"
                className="w-[13px] h-[13px]  text-gray-700"
              />
            </div>
            <div className=" flex items-center ">
              <span className="h-[12px] w-[82px] text-[13px] font-medium text-gray-800 flex items-center pb-[2px] ">
                Quick Access
              </span>
            </div>
          </div>
        </div>
        <ExampleCard />
        <div className="mb-3 rounded-lg hidden xl:block ">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center flex-wrap gap-2 bg-[#E8E7E7] p-1 rounded-lg text-sm font-medium h-[36px] w-[523px]">
              <button className="text-[13px]  flex items-center gap-1 px-3 sm:px-3 py-1 bg-[#FFFFFF] rounded-md text-gray-800 shadow-sm ">
                Outline
              </button>
              <button className="text-[13px] flex items-center gap-2 px-3 sm:px-3 py-1 rounded-md text-gray-600 hover:text-gray-800 hover:bg-[#FFFFFF]">
                Past Performance
                <span className="bg-gray-300 h-[19px] w-[19x] text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  3
                </span>
              </button>
              <button className="text-[13px] flex items-center gap-2 px-3 sm:px-3 py-1 rounded-md text-gray-600 hover:text-gray-800 hover:bg-[#FFFFFF]">
                Key Personnel
                <span className="bg-gray-300 h-[19px] w-[19x]  text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  2
                </span>
              </button>
              <button className="text-[13px] flex items-center px-3 sm:px-3 py-1 rounded-md text-gray-600 hover:text-gray-800 hover:bg-[#FFFFFF]">
                Focus Documents
              </button>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 items-center h-[36px]">
              <button className="flex items-center gap-2 w-[190px]  px-[13px] py-[7px] text-[13px] border border-gray-300 rounded-md bg-[#F9F9F9] font-medium hover:bg-[#FFFFFF]">
                <img
                  src={CustomizeColumnImg}
                  alt="plus"
                  className="w-[14.88px] h-[14.88px]  "
                />
                Customize Columns
                <ChevronDown className="h-[13px] w-[13px]" />
              </button>
              <button className="flex items-center gap-2 w-[120px] h-[33px] border border-gray-300 rounded-md bg-[#F9F9F9] text-[13px] font-medium px-2 py-1 hover:bg-[#FFFFFF]">
                <img src={BigPlus} alt="plus" className="w-[12px] h-[12px] " />
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
