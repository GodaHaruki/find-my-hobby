import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './App.tsx'
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
      },
      {
        path: "question",
        element: <Question />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

