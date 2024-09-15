import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Result from './Result.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>Home Page</>,
    children: [
      {
        path: "result",
        element: <Result />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


