import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/HomePage'
import VideoPage from './components/VideoPage'

const App = () => {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"room/:id",
      element:<VideoPage/>
    }
  ])
  return (
    <div className=''>
      <RouterProvider router={router}/>
    </div>
  )
}


