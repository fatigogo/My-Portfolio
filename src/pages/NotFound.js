import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // 👈 Home icon
import "./Page.css";

function NotFound() {
  return (
    <div className="page-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn’t exist.</p>

      <Link to="/" className="back-home">
        <FaHome style={{ marginRight: "8px" }} /> Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
