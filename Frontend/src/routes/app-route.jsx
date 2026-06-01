import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Protected from "../component/Protected";
import Reports from "../pages/Report";
import Hero from "../pages/Hero";
import GenerateReport from "../pages/GenerateReport";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
    children: [
      {
        path: "/report",
        element: <Reports />,
      },
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "/generate",
        element: <GenerateReport />,
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
export default router;
