import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";

const recentOrderData = [
  {
    id: "Abstract 3D",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A. Lape",
    total_sl: "20",
    ima: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "Sarphiens Illustration",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carroll",
    total_sl: "20",
    ima: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600",
  },
  {
    id: "Mosaic Painting",
    product_id: "5434",
    customer_id: "65345",
    customer_name: "Mason Nash",
    total_sl: "20",
    ima: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600",
  },
  {
    id: "Italian Marble",
    product_id: "9854",
    customer_id: "87832",
    customer_name: "Luke Parkin",
    total_sl: "20",
    ima: "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600",
  },
  {
    id: "Roman Art",
    product_id: "8763",
    customer_id: "09832",
    customer_name: "Anthony Fry",
    total_sl: "20",
    ima: "https://images.unsplash.com/photo-1552083974-186346191183?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600",
  },
  {
    id: "Indian Statues",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    total_sl: "20",
    ima: "https://images.unsplash.com/photo-1513346940221-6f673d962e97?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600",
  },
];

export default function TableSale() {
  return (
    <div className="bg-white px-4 pt-3 pb-3  rounded-lg border border-gray-600 flex-1">
      <div className="relative flex justify-between">
        <strong className="text-gray-700 font-medium">Products Sell</strong>
        <div className="relative flex justify-end ">
          <HiOutlineSearch
            fontSize={20}
            className="text-gray-400 absolute top-1/2 left-1 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search"
            className="text-sm focus:outline-none active:outline-none h-19 w-[14rem] border border-gray-50 rounded-sm pl-7 px-2"
          />
        </div>
      
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Stock</th>
              <th>Customer Name</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id}>
                <td>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      style={{
                        display: "block",
                        width: "10%",
                        height: "auto",
                        marginRight: "7px",
                      }} alt=""
                      src={order.ima}
                    />
                    <Link to={`/order/${order.id}`}>{order.id}</Link>
                  </div>
                </td>
                <td>
                  <Link to={`/product/${order.product_id}`}>
                    #{order.product_id}
                  </Link>
                </td>
                <td>
                  <Link to={`/customer/${order.customer_id}`}>
                    {order.customer_name}
                  </Link>
                </td>
                <td>{order.total_sl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
