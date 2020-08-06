import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'

class Navbar extends React.Component {

    render(){
        return(
            <div className="navbar">
                <Link  to="/" className="link">Home</Link> 
                <Link  to="/dashboard"  className="link">Dashboard</Link>
                <Link  to="/products"   className="link">Products</Link>
                <Link  to="/signup"     className="rightlink">Sign Up</Link>
                <Link  to="/login"      className="rightlink">Login</Link>
            </div>
        )
    }
}

export default Navbar;