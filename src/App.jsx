import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.scss';
import './App.css'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Navbar expand="lg" variant="light" className="w-100">
        <Navbar.Brand as={NavLink} to="/" className="ms-3">
          <img
            src="/media/logo.png"
            alt=""
            className="navbar-logo"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-3 ">
            <NavLink
              to="/"
              className="nav-link custom-link text-black"
            >
              <i className="bi bi-house-door-fill me-1"></i>
              Home
            </NavLink>
            <NavLink
              to="/minecraft"
              className="nav-link minecraft custom-link text-black"
            >
              <i className="bi bi-box-fill me-1"></i>
              Minecraft
            </NavLink>
            <NavLink
              to="/domein"
              className="nav-link domein custom-link text-black"
            >
              <i className="bi bi-buildings-fill"></i>
              Domein
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="mt-3 flex-grow-1">
        <Outlet />
      </div>

      <footer className="d-flex flex-wrap justify-content-between align-items-center p-4 border rounded mt-4 gap-4 text-center text-md-start" style={{ minHeight: '160px' }}>
  <img src="/media/logo.png" alt="GameGrid logo" className="footer-logo" />
  
  <ul className="list-unstyled mx-md-4 mb-0">
    <li>
      <NavLink to="/" className="text-black fw-medium text-decoration-none">Home</NavLink>
    </li>
    <li>
      <NavLink to="/minecraft" className="text-black fw-medium text-decoration-none">Minecraft</NavLink>
    </li>
    <li>
      <NavLink to="/domein" className="text-black fw-medium text-decoration-none">Domein</NavLink>
    </li>
  </ul>

  <div className="footer-desc">
    GameGrid is de Nederlandse Minecraft server hosting.<br />
    Start direct je Minecraft 1.21 server. Na het bestellen van je Minecraft server kun je binnen 10 seconden aan de slag. Naast het hosten van Minecraft servers hosten we ook virtual private servers, websites en domeinen.
  </div>
</footer>

    </div>
  );
}
export default App;
