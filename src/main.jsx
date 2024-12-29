import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home,About,Contact,UserId,Github } from './components/index.js'
import { githubInfoLoader } from './components/Github/Github.jsx'
// const router=createBrowserRouter([
// {
//   path:'/',
//   element:<App/>,
//   children:[
//   {
//     path:"",
//     element:<Home/>
//   },
//   {
//     path:"about",
//     element:<About/>
//   },
//   {
//     path:"contac",
//     element:<Contact/>
//   }
//   ]
// }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='/user/:userid' element={<UserId/>}/>
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github/>}
      />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
