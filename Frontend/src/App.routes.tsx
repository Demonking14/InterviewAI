import {createBrowserRouter} from 'react-router'
import App from './App.js'
import Login from './features/auth/Pages/Login.tsx'
export const Router = createBrowserRouter([
    {
        path:'/',
        element:<App/>

    },
    {
        path:'/login',
        element:<Login/>
    }
])