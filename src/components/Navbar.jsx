import 'react'
import "../styles/Navbarcss.css"
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
      <>
        <div className='navbar'>
          <div className='logo'>
            <img src={logo} alt="smocchInklogo" />
          </div>
          <div id="navbar_container">
            <h2>Home</h2>
            <h2>Products</h2>
            <h2>About</h2>
            <h2>Contact</h2>
          </div>
        </div>
      </>
    );
}

export default Navbar
