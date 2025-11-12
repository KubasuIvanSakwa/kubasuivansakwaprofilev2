import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Loading from './components/Loading'
import { Analytics } from "@vercel/analytics/react" 


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      Component: lazy(() => import('./Pages/Layout')),
      children: [
        {index: true, Component: lazy(() => import('./Pages/Home'))},
        {path: "projects", Component: lazy(() => import('./Pages/Projects'))},
        {path: "meet-ivan", Component: lazy(() => import('./Pages/About'))},
        {path: "contact", Component: lazy(() => import('./Pages/Contact'))},
        {path: "*", Component: lazy(() => import('./Pages/NotFound'))},
      ],
    }
  ])

  return (
    // Use a React Fragment (<>) to wrap multiple top-level components
    <>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
      
      {/* Add the Analytics component here */}
      <Analytics />
    </>
  )
}

export default App


