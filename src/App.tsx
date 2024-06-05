import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return (
    <div id="main" className="md:px-0">
      <RouterProvider router={router} />
    </div>
  )
}
