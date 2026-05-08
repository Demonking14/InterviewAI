import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router'
import {Router} from './App.routes.tsx'
import { AuthProvider } from './auth.store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}/>
    </AuthProvider>
  </StrictMode>,
)
