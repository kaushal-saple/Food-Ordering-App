import React,{lazy, Suspense}from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom"  
import ContactUs from "./components/ContactUs"
import Aboutus from "./components/Aboutus"
import Error from "./components/Error"
import RestaurantInfo from "./components/RestaurantInfo"



const DailyMart = lazy(()=>import("./components/DailyMart"));


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
                element:<RestaurantInfo/>,
            },
            {
                path:"/daily-mart",
                element:<Suspense fallback={<h2>Content is LOading........</h2>}><DailyMart/></Suspense>
            }
        ],
        errorElement:<Error/>
    
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute}/>)