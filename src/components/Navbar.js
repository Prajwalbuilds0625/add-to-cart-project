import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          ShopCart
        </Link>

        <div className="ms-auto">
          <Link to="/" className="btn btn-outline-light me-2">
            Home
          </Link>

          <Link to="/cart" className="btn btn-warning">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;