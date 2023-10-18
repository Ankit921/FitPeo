import React from 'react'
import classNames from 'classnames';
import {FcDeployment} from "react-icons/fc"
import {  DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';
import { Link } from 'react-router-dom';
import {BsArrowRight} from "react-icons/bs"
const linkClass =
"flex items-center gap-2 font-light px-3 py-2 hover:bg-cyan-700 hover:no-underline active:bg-neutral-600 rounded-lg text-base";

export default function Sidebar() {
  return (
    <div className="bg-indigo-950 w-30 p-3 flex flex-col text-white font-roboto">
      <div className="flex items-center gap-2 px-3 py-6">
        <FcDeployment fontSize={23} />
        <strong>
          <span className="text-neutral-100 text-lg">Dashboard</span>
        </strong>
      </div>
      <div className="flex-1 flex flex-col py-8 gap-4">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <div className="flex flex-row">
            <SidebarLink key={item.key} item={item} />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center pr-8 hover:bg-cyan-700  hover:no-underline active:bg-neutral-600">
        <div className="flex flex-row  ">
          <strong>
            <span className="text-neutral-50  px-1">Evano</span>
          </strong>
          <BsArrowRight className="mt-2.3" />
        </div>

        <h3 className="text-gray-300 font-thin text-sm ">Project manager</h3>
      </div>
    </div>
  );
}


function SidebarLink({item}){
    return (
      <Link to={item.path} className={classNames("text-white", linkClass)}>
        <span className="text-xl">{item.icon}</span>
        {item.label}
        <BsArrowRight className="mt-2.3" />
      </Link>
    );
}