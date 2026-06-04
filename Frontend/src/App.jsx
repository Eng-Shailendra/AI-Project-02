import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";

import { AuthProvider } from "./features/context/auth-context.jsx";
import Toster from "react-hot-toast";
import InterviewContextProvider from "./features/context/InterviewContext.jsx";
import router from "./routes/app-route.jsx";

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
