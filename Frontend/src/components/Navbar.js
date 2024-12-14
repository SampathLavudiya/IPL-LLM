import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      <div className="container">
        <nav
          className="navbar navbar-expand-sm fixed-top navbar-dark"
          data-bs-theme="black"
        >
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" style={{ color: "darkblack" }}>
              <img src="/images/IPL-logo.jpg" alt="IPL Logo" style={{ height: "30px" }} />
            </Link>
            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAlt"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAlt">
              <div className="navbar-nav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link to="/" className="nav-link" style={{ color: "white" }}>
                    Home
                  </Link>
                  <Link to="/MatchSummary" className="nav-link" style={{ color: "white" }}>
                    MatchSummary
                  </Link>
                  <Link to="/PlayerReports" className="nav-link" style={{ color: "white" }}>
                    PlayerReports
                  </Link>
                  <Link to="/News" className="nav-link" style={{ color: "white" }}>
                    News
                  </Link>
                  <Link to="/Chatbot" className="nav-link" style={{ color: "white" }}>
                    Chatbot
                  </Link>
                  <Link to="/ContactUs" className="nav-link" style={{ color: "white" }}>
                    ContactUs
                  </Link>
                </ul>
              </div>
              <div className="d-flex ms-auto">
                <ul className="navbar-nav">
                  {isAuthenticated && (
                    <li className="nav-item">
                      <p className="nav-link">{user.name}</p>
                    </li>
                  )}
                  <li className="nav-item">
                    {isAuthenticated ? (
                      <button
                        className="btn btn-outline-light"
                        onClick={() =>
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          })
                        }
                      >
                        Log Out
                      </button>
                    ) : (
                      <button className="btn btn-outline-light" onClick={() => loginWithRedirect()}>
                        Log In
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
