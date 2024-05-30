import HomePage from "./route/homePage/HomePage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ListPage from "./route/listPage/ListPage"
import Layout from "./route/layout/Layout"
import SinglePage from "./route/singlePage/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App