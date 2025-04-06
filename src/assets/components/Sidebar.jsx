import React from "react";
import { NavLink } from "react-router";

export default function Sidebar() {
    const items = [
        { label: "Dashboard", to: "/" },
        { label: "Projects", to: "/projects" },
        { label: "Teams", to: "/teams" },
        { label: "Analytics", to: "/analytics" },
        { label: "Messages", to: "/messages" },
        { label: "Integrations", to: "/integrations" },
      ];

    return (
      <aside className="w-30">
        <div className="flex flex-col gap-3 text-left" >
        <div className="font-bold text-2xl">Logo</div>

          {items?.map((item, index) => (
            <NavLink to={item.to} key={index} className={({ isActive }) =>
            isActive ? "bg-pink-500 text-white p-2 rounded-sm" : "text-gray-500 hover:bg-pink-500 hover:text-white p-2 rounded-sm"
          }>
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="text-left" >
          <p >V2.0 is available</p>
          <button>Try now</button>
        </div>
      </aside>
    );
  }