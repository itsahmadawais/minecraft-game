import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainContainer({ children }) {
  return (
    <main className="container mx-auto py-10">
      <ToastContainer />
      {children}
    </main>
  );
}
