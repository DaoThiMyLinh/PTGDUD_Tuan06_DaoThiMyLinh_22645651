import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header'
import Sidebar from './assets/components/SideBar'
import { MainLayout } from './layouts/MainLayout'
import { Dashboard } from './assets/components/Dashboard'
import { useRoutes } from 'react-router'
import { Project } from './assets/components/Project'

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "projects",
          element: <Project />,
        },
      ],
    },
  ]);

  return element;

}

export default App

// export default function Sidebar() {
//   const items = ["Dashboard", "Projects", "Teams", "Analytics", "Messages", "Integrations"];
//   return (
//     <aside className="w-64 h-screen bg-white shadow-md p-6 hidden md:block">
//       <div className="text-2xl font-bold text-pink-600 mb-10">Logo</div>
//       <ul className="space-y-4">
//         {items.map((item, index) => (
//           <li key={index} className="flex items-center gap-2 text-gray-700 hover:text-pink-600 cursor-pointer">
//             <span className="w-5 h-5 bg-gray-200 rounded"></span>
//             {item}
//           </li>
//         ))}
//       </ul>
//       <div className="mt-10 bg-blue-50 p-4 rounded-md text-sm">
//         <p className="font-medium">V2.0 is available</p>
//         <button className="mt-2 text-blue-600 underline">Try now</button>
//       </div>
//     </aside>
//   );
// }

