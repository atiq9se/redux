
import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}
