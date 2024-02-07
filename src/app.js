import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import ContactUs from "./components/ContactUs"
import About from "./components/About"
import Error from "./components/Error"
import MenuCard from "./components/Menu"
import { Outlet } from "react-router-dom"
import { createBrowserRouter,Outlet,RouterProvider }from "react-router-dom"

// Swiggy App


const AppLayout = () =>{
    return(
        <div className ="main">
        <Header></Header>
        <Outlet />
        </div>
        
       
    )
}





const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path:"/",
                element:<Body/>
            

            },
            {
                path : "/about",
                element : <About/>,
              
            },
            {
                path : "/contactus",
                element : <ContactUs/>
            },
            {
                path : "/restaurant/:resId",
                element : <MenuCard />
            }
        ],
        errorElement:<Error/>
    },
   
])



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider  router = {appRouter}  />);

