import Menu from "../Components/Menu"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom"
import Form from "../Components/Document/DocumentForm"

const MainLayout = () => {
  return (
      <>
          <Menu />
          {/* <Form/> */}
          
          <main className="container mx-auto mt-10">
              <Outlet/>
          </main>
          <Footer/>
      </>
  )
}

export default MainLayout
