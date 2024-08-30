import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
   return (
      <>

         {/* Navbar Start */}
         <div className="container-fluid bg-white sticky-top">
            <div className="container">
               <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
                  <Link to="/" className="navbar-brand">
                     <img className="img-fluid" src="img/logo.png" alt="Logo" />
                  </Link>
                  <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                     <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarCollapse">
                     <div className="navbar-nav ms-auto">
                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="/About" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/Product" className="nav-item nav-link">Products</NavLink>
                        <NavLink to="/Store" className="nav-item nav-link">Store</NavLink>
                        <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
                        <NavLink to="/Login" className="nav-item nav-link">Login</NavLink>
                        <NavLink to="/Register" className="nav-item nav-link">Registration</NavLink>
                     </div>
                     <div className="border-start ps-4 d-none d-lg-block">
                        <button type="button" className="btn btn-sm p-0"><i className="fa fa-search" /></button>
                     </div>
                  </div>
               </nav>
            </div>
         </div>
         {/* Navbar End */}
      </>
   )
}

export default Header