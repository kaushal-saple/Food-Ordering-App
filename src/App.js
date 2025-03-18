import React,{lazy, Suspense,useEffect, useState}from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom"  
import ContactUs from "./components/ContactUs"
import Aboutus from "./components/Aboutus"
import Error from "./components/Error"
import RestaurantInfo from "./components/RestaurantInfo"
import userContext from "./Utils/userContext"




const DailyMart = lazy(()=>import("./components/DailyMart"));


const AppLayout = ()=>{
    const [userName,setUserName] = useState("");


    useEffect(()=>
            //we fetch some data by making an API call
            getUserData() 
        ,
        [])

    function getUserData(){
        //we fetch some data by making an API call
        const data = "Kaushal Saple"
        setUserName(data)
    }

    return (
        <userContext.Provider value={{loggedInUser:userName,setUserName}}>
            <div className="app-layout overflow-y-scroll h-screen [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth ">
                <Header/>
                <Outlet/>
            </div>
        </userContext.Provider>
    )
    
}

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