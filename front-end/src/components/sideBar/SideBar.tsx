import sideBarData from "../../core/Layout/sideBarData";
import SideBarItem from "./SideBarItem";
import logoImage from "../../assets/labs_lumi_logo.jpeg";

export default function SideBar() {
  return (
   <aside className=' w-56 bg-secondary m-2 rounded-2xl z-30 shadow-lg py-3'>
    <figure className="flex justify-center">
        <img src={logoImage} className="w-20" alt="" />
    </figure>
     {
        sideBarData.map(sideBarItem => <SideBarItem key={sideBarItem.name} icon={sideBarItem.icon}  name={sideBarItem.name} path={sideBarItem.path} />)
     }
   </aside>
  )
}
