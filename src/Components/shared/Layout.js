import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';
import Header from './Header';
export default function Layout() {
  return (
    <div className="bg-gray-200 h-screen w-screen flex flex-row overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-col p-4 min-h-0 overflow-auto sm:flex-wrap">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
