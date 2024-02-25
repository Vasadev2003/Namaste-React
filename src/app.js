import React, { useEffect, useState } from "react"
import { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import ContactUs from "./components/ContactUs"
import About from "./components/About"
import Error from "./components/Error"
import MenuCard from "./components/Menu"
import { Outlet } from "react-router-dom"
import { createBrowserRouter,Outlet,RouterProvider }from "react-router-dom"
import logginInfo from "./utils/UseContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import MyCart from "./components/Cart";
// Swiggy App


const AppLayout = () =>{

    const [data,setData] = useState();

    useEffect(()=>{
        const data = {
            changedName : "akshay"
        };
        setData(data.changedName);
    },[])
    return(
        <Provider store={appStore}>
        <logginInfo.Provider value = {{names : data,setData}}>
        <div className ="bg-indigo-200">
        <Header></Header>
        <Outlet />
        </div>
        </logginInfo.Provider>
        </Provider>
    )
}


const Grocery = lazy(()=>{
    import( "./components/Grocery")
})


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
                path : "/groceries",
                element : <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
            },
            {
                path : "/restaurant/:resId",
                element : <MenuCard />
            },
            {
                path : "/cart",
                element : <MyCart />
            },
        ],
        errorElement:<Error/>
    },
   
])



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider  router = {appRouter}  />);

