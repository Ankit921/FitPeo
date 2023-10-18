import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiMoneyPoundBoxFill } from "react-icons/ri";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaBalanceScaleLeft } from "react-icons/fa";
export default function DadhboardStatsGrid() {
  return (
    <div className="flex gap-4 h-48">
      <BoxWrapper>
        <div className="rounded-full h-28 w-28 flex items-center justify-center bg-green-300">
          <RiMoneyPoundBoxFill className="text-2xl text-white" />
        </div>
        <div className="pl-2">
          <span className="text-sm text-gray-500 font-light">Earning</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $198K
            </strong>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-green-500 ">37.8%</span>
            <h5 className=" text-sm">This Month</h5>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-28 w-28 flex items-center justify-center bg-violet-400">
          <IoDocumentTextOutline className="text-2xl text-white" />
        </div>
        <div className="pl-2">
          <span className="text-sm text-gray-500 font-light">Orders</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $2.4K
            </strong>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-red-500 ">2%</span>
            <h5 className=" text-sm">This Month</h5>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-28 w-28 flex items-center justify-center bg-blue-400">
          <FaBalanceScaleLeft className="text-2xl text-white" />
        </div>
        <div className="pl-2">
          <span className="text-sm text-gray-500 font-light">Balance</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $2.4K
            </strong>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-red-500 ">2%</span>
            <h5 className=" text-sm">This Month</h5>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-28 w-28 flex items-center justify-center bg-red-400">
          <BsFillBagCheckFill className="text-2xl text-white" />
        </div>
        <div className="pl-2">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $89K
            </strong>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-green-500 ">11%</span>
            <h5 className=" text-sm">This Month</h5>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-lg pl-4 pr-2 flex-1  border border-gray-200 flex items-center ">
      {children}
    </div>
  );
}
