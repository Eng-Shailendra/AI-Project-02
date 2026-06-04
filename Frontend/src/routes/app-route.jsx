import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Protected from "../component/Protected";
import Reports from "../pages/Report";
import Hero from "../pages/Hero";
import GenerateReport from "../pages/GenerateReport";
import Contact from "../pages/Contact";
import Features from "../pages/Features";
import PreviewCard from "../component/PreviewCard";
import QuestionList from "../component/QuestionList";
import ReportsList from "../pages/ReportsList";

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
        index: true,
        element: <Hero />,
      },
      {
        path: "/generate",
        element: <GenerateReport />,
      },
      {
        path: "/ai-report/:id",
        element: <Reports />,
      },
      {
        path: "/all-ai-report",
        element: <ReportsList />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/demo-report",
        element: <Reports />,
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
