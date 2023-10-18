import React from 'react'
import {HiOutlineSearch} from "react-icons/hi"
import { FcBusinessman } from 'react-icons/fc';
export default function Header() {
return (
  <div className="bg-gray-200 h-16 px-8 flex items-center justify-between">
    <div className="relative flex">
      <strong>
        <h1 className="text-xl">Hello Shahrukh</h1>
      </strong>
      <FcBusinessman fontSize={25} className="left-1" />
    </div>

    <div className="relative mr-4">
      <HiOutlineSearch
        fontSize={20}
        className="text-gray-400 absolute top-1/2 left-1 -translate-y-1/2"
      />
      <input
        type="text"
        placeholder="Search"
        className="text-sm focus:outline-none active:outline-none h-10 sm:h-12 w-32 sm:w-28 border border-gray-50 rounded-sm pl-7 px-2"
      />
    </div>
  </div>
);
}
