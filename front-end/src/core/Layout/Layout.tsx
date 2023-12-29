import { ReactNode } from "react"
import SideBar from "../../components/sideBar/SideBar"

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <div className="bg-secondaryHover flex h-screen w-full">
      <SideBar />

      <div className="p-5 bg-white m-2 rounded-2xl z-30 shadow-lg py-3 w-full">
        {children}
      </div>
    </div>
  )
}
