import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Loading from "./pages/Loading";
import React,{ Suspense, lazy } from "react";
import {About,Home} from "./pages/";
import Coffee from "./pages/Coffee.jsx";
import Foods from "./pages/Foods.jsx";
import Menu from "./pages/Menu.jsx";
import Ice from "./pages/Ice.jsx";
const LazyApp = lazy(()=>import(
    './App.jsx'
    ))
 

export const Router = createBrowserRouter([
    {path: '/',
        element:<Home/>
        ,
    },
    {path: '/menu',
        element:(
        <Suspense fallback={<Loading/>}>
            <LazyApp/>
        </Suspense>
        ),
        children:[
            {
                path:'/menu',
                element:<Menu/>
            },
            { path:'/menu/ICE',
                element:<Ice/>
            },           
            { path:'/menu/COFFEE',
                element:<Coffee/>
            },            
            { path:'/menu/FOODS',
                element:<Foods/>
            },            
        ],
    },
])
// const listMenu = ['COFFEE','ICE','FOODS']
