import { Link, Outlet, useNavigate } from "react-router-dom";
import "./layout.css";
import { useState, useContext, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { CDBModalFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State variable to track open/closed state
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="navbar-container">
        <Link id="navbar-logo-container" to={"/"}>
        <div> PopCorn</div>
        </Link>
      </div>
      <Menu
        isOpen={isSidebarOpen}
        onStateChange={({ isOpen }) => setIsSidebarOpen(isOpen)}
        width={"250px"}
      >
        <Link
          to={"/"}
          id="home"
          className="menu-item"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          עמוד הבית
        </Link>
        <Link
          to={"/products"}
          id="about"
          className="menu-item"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
         המוצרים שלנו
        </Link>
        <Link
          to={"/aboutus"}
          id="contact"
          className="menu-item"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          עלינו
        </Link>
        <Link
          to={"/contactus"}
          id="contact"
          className="menu-item"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          צור קשר
          </Link>
      </Menu>
      <Outlet />
      <CDBModalFooter className="shadow" >
        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '100%',height:'300px',background: 'rgb(211,237,241)',background: 'radial-gradient(circle, rgba(211,237,241,1) 10%, rgba(235,242,241,1) 100%, rgba(252,70,107,1) 100%)',display:'flex',alignItems:'center'}}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap" style={{ width: '80%',height:'200px'}}>
            <CDBBox>
              <a href="/" className="d-flex align-items-center p-0 text-dark">
                <span className="ms-3 h5 font-weight-bold">פופקורן אירועים</span>
              </a>
              <p className="my-3" style={{ width: '250px',direction:"rtl" }}>
                מוצאים בשבילך פתרונות בשביל להפוך אירוע מקטן לגדול!
              </p>
              <CDBBox display="flex" className="mt-4">
                <CDBBtn flat color="dark">
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="mx-3">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2">
                  <CDBIcon fab icon="linkedin-in" />
                </CDBBtn>

              </CDBBox>
            </CDBBox>
            <CDBBox className="box2">
              <p className="h5 mb-4" style={{ fontWeight: '600',direction:'rtl' }}>
                האתר שלנו
              </p>
              <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0', display: 'flex',direction:'rtl' }}>
                <Link to={'/aboutus'}>עלינו</Link>
                <Link to={'/'}> דף בית</Link>
                <Link to={'/'}> צור קשר</Link>
                <Link to={'/products'}> הציוד שלנו</Link>
              </CDBBox>
            </CDBBox>
            <CDBBox className="box3">
              <p className="h5 mb-4" style={{ fontWeight: '600',direction:'rtl' }}>
                דרכי קשר מהירים
              </p>
              <CDBBox flex="column" style={{ padding: '0', display: 'flex' ,direction:'rtl'}}>
                <h4>טלפון-0526552958</h4>
                <h4>אימייל-cheneylon1@gmail.com</h4>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <small className="text-center mt-5">&copy; Chen Eylon.</small>
        </CDBBox>
      </CDBModalFooter>
    </div>
  );
}

export default Layout;
