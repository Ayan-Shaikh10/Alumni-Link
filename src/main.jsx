import "react-toastify/dist/ReactToastify.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import{ToastContainer} from "react-toastify";
import { AuthProvider } from "./contex/AuthContext";

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>

      <BrowserRouter>
      <App />
      <ToastContainer
      position="top-right"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="dark"
      />
    </BrowserRouter>


    </AuthProvider>

  </StrictMode>
);