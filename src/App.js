import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom"
import ContactUs from "./components/ContactUs"
import Aboutus from "./components/Aboutus"
import Error from "./components/Error"
import RestaurantInfo from "./components/RestaurantInfo"




const AppLayout = ()=>(
    <div className="app-layout">
        <Header/>
        <Outlet/>
    </div>
)

const appRoute = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
                
            },
            {
                path:"/aboutus",
                element:<Aboutus/>
            },
            {
                path:"/restaurant/:resID",
                element:<RestaurantInfo/>
            }
        ],
        errorElement:<Error/>
    
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute}/>)