import React from "react";

export default function Header() {
    return (
    <header className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold text-pink-500">Dashboard</h2>
      <div className="flex items-center gap-4">
        <input className="border-2 px-3 py-2 rounded-md text-sm"
          type="text"
          placeholder="Search..."
        
        />
    
        <img
          src="/src/img/avatar.png"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
    );
  }