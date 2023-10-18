import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/shared/Layout";
import Dashboard from "./Components/Dashboard";
import Products from "./Components/Products";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  index element={<Dashboard />}/>
          <Route path="products" element={<Products />}/>
        </Route>
      </Routes>
    </Router>
  );
}