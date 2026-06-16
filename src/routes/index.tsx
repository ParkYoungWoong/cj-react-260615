import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'

// http://localhost:5173/
// http://localhost:5173/movies/tt1234567
// http://localhost:5173/#/movies/tt1234567

const router = createBrowserRouter([
  // 라우트 객체
  {
    path: '/', // http://localhost:5173/
    element: <Home />
  },
  {
    path: '/about', // http://localhost:5173/about
    element: <About />
  },
  {
    path: '/signin', // http://localhost:5173/signin
    element: <SignIn />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
