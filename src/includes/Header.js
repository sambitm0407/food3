import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <>
            
                <div className="container">
                    <nav className="navbar fixed-top navbar-expand-md custom-navbar navbar-dark">
                        <img className="navbar-brand" src="https://www.foodafactoflife.org.uk/App_Themes/images/brand/logo.png" id="logo_custom" width="10%" alt="logo" />
                        <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon " />
                        </button>
                        <div className="collapse navbar-collapse " id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto ">
                                <li className="nav-item">
                                    <Link className="nav-link" exact to="/"><b>Home</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" exact to="/"><b>About</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" exact to="/"><b>Menu</b></Link>
                                </li> 
                                <li className="nav-item">
                                    <Link className="nav-link" exact to="/"><b>Services</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" exact to="/"><b>Gallery</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" exact to="/"><b>Blog</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" exact to="/"><b>Contact</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" exact to="/"> <b>Login</b></Link>
                                </li>
                                 
                            </ul>
                        </div>  
                    </nav>                                                                                  
                </div>

            </>
            


        )
    }
}
