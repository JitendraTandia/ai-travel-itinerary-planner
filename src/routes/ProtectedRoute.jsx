import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  console.log("children loaded", children);
  let loggin = Cookies.get("Logtk");
  return (
    <div>
      {!loggin ? <Navigate to={"/login"} /> : <div> {children} </div>}
    </div>
  );
};

export default ProtectedRoute;
