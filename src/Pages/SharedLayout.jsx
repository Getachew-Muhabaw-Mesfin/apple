import { Outlet } from "react-router";
import { NaveBar, Footer } from "../components";


const SharedLayout = () => {
  return (
    <>
        <NaveBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default SharedLayout