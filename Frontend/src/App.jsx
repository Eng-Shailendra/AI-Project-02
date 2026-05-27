import { useState } from "react";
import "./app.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/app-route.jsx";
import { AuthProvider } from "./features/auth/auth-context.jsx";
import  Toster  from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Toster />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
