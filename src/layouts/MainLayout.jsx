import { Outlet } from "react-router";
import { Dashboard } from "../assets/components/Dashboard";
import Header from "../assets/components/Header";
import Sidebar from "../assets/components/SideBar";

export function MainLayout() {
    return (<div className="grid grid-cols-12">
        <div className="col-span-2">
            <Sidebar/>
        </div>
        <div className="col-span-10">
            <Header/>
            <Outlet/>
        </div>
    
    </div>)
}