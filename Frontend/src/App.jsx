import { useState } from "react";
import "./app.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/app-route.jsx";
import { AuthProvider } from "./features/auth/auth-context.jsx";
import Toster from "react-hot-toast";
import InterviewContextProvider from "./features/auth/InterviewContext.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <AuthProvider>
        <InterviewContextProvider>
          <RouterProvider router={router} />
        </InterviewContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
