import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from './layouts/Default'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'

// http://localhost:5173/
// http://localhost:5173/movies/tt1234567
// http://localhost:5173/#/movies/tt1234567

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
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
      },
      {
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetails />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
