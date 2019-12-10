import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#5e5e5e", color: "#FFF", padding: "20px" }}>
                <Link to="/home">
                    <div>
                        <h1 style={{/*textAlign:"center",*/ textDecoration: "none", color: "white" }}>Medium.</h1>
                    </div>
                </Link>
                <div>
                    <Link to="/login">
                        <div style={{ backgroundColor: "#FFF", color: "#000", textDecoration: "none", padding: "10px", textAlign: "center" }}>
                            Login
                        </div>
                    </Link>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <Link to="/register">
                        <div style={{ backgroundColor: "#FFF", color: "#000", textDecoration: "none", padding: "10px", textAlign: "center" }}>
                            Register
                        </div>
                    </Link>
                </div>
            </div>
            

        )
    }
}
export default Header;