import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Header = () => {
    return (
        <>
            {/* Navbar Start */}
            <div
                className="container-fluid fixed-top px-0 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
                    <div className="col-lg-6 px-5 text-start">
                        <small>
                            <i className="fa fa-map-marker-alt me-2" />
                            123 Street, New York, USA
                        </small>
                        <small className="ms-4">
                            <i className="fa fa-envelope me-2" />
                            info@example.com
                        </small>
                    </div>
                    <div className="col-lg-6 px-5 text-end">
                        <small>Follow us:</small>
                        <a className="text-white-50 ms-3" href="">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a className="text-white-50 ms-3" href="">
                            <i className="fab fa-twitter" />
                        </a>
                        <a className="text-white-50 ms-3" href="">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a className="text-white-50 ms-3" href="">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                </div>
                <nav
                    className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn"
                    data-wow-delay="0.1s"
                >
                    <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                        <h1 className="fw-bold text-primary m-0">
                            Chari<span className="text-white">Team</span>
                        </h1>
                    </Link>
                    <button
                        type="button"
                        className="navbar-toggler me-4"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            <NavLink to="/" className="nav-item nav-link">
                                Home
                            </NavLink>
                            <NavLink to="about/" className="nav-item nav-link">
                                About
                            </NavLink>
                            <NavLink to="causes/" className="nav-item nav-link">
                                Causes
                            </NavLink>
                            <div className="nav-item dropdown">
                                <NavLink
                                    to="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Pages
                                </NavLink>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="services/" className="dropdown-item">
                                        Service
                                    </NavLink>
                                    <NavLink to="donate/" className="dropdown-item">
                                        Donate
                                    </NavLink>
                                   
                                </div>
                            </div>
                            <NavLink to="contact/" className="nav-item nav-link">
                                Contact
                            </NavLink>
                            <NavLink to="register/" className="nav-item nav-link">
                            Register
                            </NavLink>
                            <NavLink to="login/" className="nav-item nav-link">
                            Login
                            </NavLink>
                        </div>
                        <div className="d-none d-lg-flex ms-2">
                            <Link className="btn btn-outline-primary py-2 px-3" to="donate/">
                                Donate Now
                                <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                    <i className="fa fa-arrow-right" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
        </>

    )
}

export default Header
