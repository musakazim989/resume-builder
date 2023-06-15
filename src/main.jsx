import React from "react"
import App from "./App"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Resume1 from "./components/resume/Resume1"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/comp1",
    element: <Resume1 />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
