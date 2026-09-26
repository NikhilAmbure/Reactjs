import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, {githubInfoloader} from "./components/Github/Github.jsx";

// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,
//   children: [
//     {
//       path: '',
//       element: <Home />
//     },
//     {
//       path: 'about',
//       element: <About />
//     },
//     {
//       path: 'contact',
//       element: <Contact />
//     },
//     {
//       path: 'user/:userid',
//       element: <User />
//     },
//     {
//       path: 'github',
//       element: <Github />
//     }
//   ]
// }])

// Another way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
          loader={githubInfoloader}
          path="github"
          element={<Github />}
      />
    {/*  Loader => Can fetch api or database faster (it will save it into cache)
     loads the api fetch data when user hovers the Github on navbar
     */}
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
