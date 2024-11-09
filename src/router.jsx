import { createBrowserRouter } from "react-router-dom";
import Loading from "./pages/Loading";
import React,{ Suspense, lazy } from "react";
import {Home} from "./pages/";
import Menu from "./pages/Menu.jsx";
import Cart from "./pages/Cart.jsx";
const LazyApp = lazy(()=>import(
    './App.jsx'
    ))
 

export const Router = createBrowserRouter([
    {path: '/',
        element:<Home/>
    },    
    {path: '/cart',
        element:<Cart/>
    },
    {path: '/menu',
        element:(
        <Suspense fallback={<Loading/>}>
            <LazyApp/>
        </Suspense>
        ),
        children:[
          
            {path:'/menu',
                element: <Menu/>
            }           
        ],
    },
])
