import { Link, useLocation } from "react-router-dom";
import { ISideBarData } from "../../core/Layout/sideBarData";
import React from "react";

export default function SideBarItem({ path, icon, name}: ISideBarData) {

    const { pathname } = useLocation();

    const handleActiveRoute = () => {
        return pathname === path 
    };
  
    return (
    <div className={`flex justify-start items-center py-2 px-5 hover:bg-secondaryHover m-2 rounded-2xl ${handleActiveRoute() ? 'bg-secondaryHover' : ''}`}>
      <Link to={path} className={`font-bold flex gap-2 ${handleActiveRoute() ? 'text-primary' : 'text-white'}`}>
        {React.createElement(icon)}
        {name}
      </Link>
    </div>
  )
}
