import { Link, Outlet, useNavigate } from "react-router-dom";
import "./layout.css";
import { useState, useContext, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State variable to track open/closed state
  const navigate = useNavigate();
  



  return (
    <div>
      <div className="navbar-container">
        <Link id="navbar-logo-container" to={"/HomePage"}>
        <div> LOGO</div>
        </Link>
      </div>
      <Menu
        isOpen={isSidebarOpen}
        onStateChange={({ isOpen }) => setIsSidebarOpen(isOpen)}
        width={"250px"}
      >
        <div>Hello User!</div>
        <Link
          to={"/"}
          id="home"
          className="menu-item"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          Home
        </Link>
        <Link
          to={"/"}
          id="about"
          className="menu-item"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
         Link 1
        </Link>
        <Link
          to={"/"}
          id="contact"
          className="menu-item"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          Link 2
        </Link>
        <Link
          to={"/"}
          id="contact"
          className="menu-item"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          Link 3
          </Link>
      </Menu>
      <Outlet />
    </div>
  );
}

export default Layout;
