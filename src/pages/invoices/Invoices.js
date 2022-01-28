import React from 'react';
import { Outlet } from 'react-router';
import { Link, NavLink } from 'react-router-dom';


function Invoices() {

  return <div>
    <h1>Invoice Module</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}
    >
      <p>React Router Link yerine Active State korumak için NavLink kullandık.</p>
      
      <NavLink style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "green" : ""
            };
          }} to="/invoice/filter">Invoice Filter Page</NavLink>
      <NavLink style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "green" : ""
            };
          }} to="/invoice/list">Invoice List Page</NavLink>
    </nav>
    <Outlet />
  </div>;
}

export default Invoices;
