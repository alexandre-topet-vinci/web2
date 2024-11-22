  import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { HomePage, CinemaPage, MovieListPage } from './components/App/App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cinema",
        element: <CinemaPage />,
      },
      {
        path: "movie",
        element: <MovieListPage />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
